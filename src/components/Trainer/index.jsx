import { Component, createRef, useRef, useEffect } from 'react';

import Link from '../Link';
import ThemeSwitcher from '../ThemeSwitcher';
import WordTypeFilter from './WordTypeFilter';
import HomeLogo from '../HomeLogo';
import ContinueButton from '../ContinueButton';
import AccountLink from '../AccountLink';

import { LoaderContext } from '../../service/LoaderContext';

import FilterAlt from '@mui/icons-material/FilterAlt';
import Analytics from '@mui/icons-material/Analytics';

import TrainerStyles from './Trainer.module.css';

import Swal from '../../service/Swal';
import ShallowLayout from '../ShallowLayout';

import StorageInterface from '../../service/StorageInterface';

class Trainer extends Component {
    constructor(props) {
        super(props);

        this.storage = new StorageInterface();
        this.tasksPassed = this.storage.getTasksPassed();

        this.state = {
            showContinueButton: false,
            currentWordTypes: this.storage.getCurrentWordTypes(),
            stats: this.storage.getStats()
        };
        this.state.wordTypeFilterEnabled = this.state.currentWordTypes.length !== this.storage.wordTypes.length;
        this.state.currentTask = this.getTask();

        this.WordLayoutRef = createRef();
    }

    static contextType = LoaderContext;

    taskList() {
        let filteredTaskList = this.storage.allTasks.map(task => task);
        if (this.state.currentWordTypes.length) filteredTaskList = filteredTaskList.filter(taskData => this.state.currentWordTypes.includes(taskData.wordType));
        return filteredTaskList;
    }

    getTask() {
        const filteredTaskList = this.taskList().filter(taskData => !this.tasksPassed.has(taskData.id));
        if (!filteredTaskList.length)  {
            this.clearPassed();
            return this.getTask();
        }

        const taskIndex = Math.floor(Math.random()*filteredTaskList.length);
        const taskData = JSON.parse(
            JSON.stringify(
                filteredTaskList[taskIndex]
            )
        );
        
        taskData.words = taskData.words.map(word => {
            return {
                word,
                correct: undefined,
                answered: false,
                correctLetterIndex: Array.from(word).findIndex(letter => letter === letter.toUpperCase())
            };
        });

        taskData.hasErrors = false;
        taskData.finished = false;
        taskData.generatedAt = Date.now();

        return taskData;
    }

    updateStats(changer) {
        this.setState(state => {
            return {
                stats: changer(JSON.parse(JSON.stringify(state.stats)))
            };
        }, () => this.storage.setStats(this.state.stats));
    }

    clearPassed() {
        this.tasksPassed = new Set();
        this.storage.clearTasksPassed();
    }

    nextTask() {
        if (this.WordLayoutRef.current) this.WordLayoutRef.current.style.opacity = 0;
        setTimeout(() => {
            this.setState({
                currentTask: this.getTask(),
                showContinueButton: false
            });
            if (this.WordLayoutRef.current) this.WordLayoutRef.current.style.opacity = 1;
        }, 200);
    }

    addPassedTask() {
        const passedTaskId = this.state.currentTask.id;
        this.tasksPassed.add(passedTaskId);
        this.storage.addPassedTask(Array.from(this.tasksPassed));
    }

    onVowel(wordIndex, letterIndex) {
        const isCorrect = this.state.currentTask.words[wordIndex].correctLetterIndex === letterIndex;
        
        this.setState(state => { 
            const words = state.currentTask.words;
            words[wordIndex].pickedLetterIndex = letterIndex;
            words[wordIndex].answered = true;
            words[wordIndex].correct = isCorrect;
            return {
                currentTask: Object.assign(state.currentTask, { words, hasErrors: state.currentTask.hasErrors || !isCorrect })
            };
        });
    }

    onContinue() {
        this.nextTask();
    }

    showWordTypeFilter() {
        Swal.show({
            html: <WordTypeFilter 
                wordTypes={this.storage.wordTypes} 
                currentWordTypes={this.state.currentWordTypes} 
                onChange={(...data) => this.onWordTypesChange(...data)} 
                onReset={() => this.onWordTypesReset()} 
            />
        });
    }

    onWordTypesChange(wordType) {
        return new Promise(resolve => {
            if (this.state.currentWordTypes.includes(wordType)) {
                if (this.state.currentWordTypes.length <= 1)  return;
                this.setState(state => {
                    let currentWordTypes = new Set(state.currentWordTypes);
                    currentWordTypes.delete(wordType);
                    currentWordTypes = Array.from(currentWordTypes);
                    return {
                        currentWordTypes,
                        wordTypeFilterEnabled: true
                    };
                }, () => {
                    resolve(this.state.currentWordTypes);
                    this.storage.setCurrentWordTypes(this.state.currentWordTypes);
                    this.nextTask();
                });
            } else {
                if (!this.storage.wordTypes.includes(wordType)) return;
                this.setState(state => {
                    let currentWordTypes = new Set(state.currentWordTypes);
                    currentWordTypes.add(wordType);
                    currentWordTypes = Array.from(currentWordTypes);
                    return {
                        currentWordTypes,
                        wordTypeFilterEnabled: state.currentWordTypes.length !== (this.storage.wordTypes.length - 1)
                    };
                }, () => {
                    resolve(this.state.currentWordTypes);
                    this.storage.setCurrentWordTypes(this.state.currentWordTypes);
                    this.nextTask();
                });
            }
        });
    }

    onWordTypesReset() {
        return new Promise(resolve => {
            this.setState({
                currentWordTypes: this.storage.wordTypes,
                wordTypeFilterEnabled: false
            }, () => {
                resolve(this.state.currentWordTypes);
                this.storage.setCurrentWordTypes(this.storage.wordTypes);
                this.nextTask();
            });
        });
    }

    componentDidUpdate() {
        if (!this.state.currentTask.finished && this.state.currentTask.words.every(wordData => wordData.answered)) {
            this.updateStats(stats => {
                stats.solutionTime.push(+((Date.now() - this.state.currentTask.generatedAt) / this.state.currentTask.words.length / 1000).toFixed(2));
                if (this.state.currentTask.hasErrors) {
                    const misstakesData = this.state.currentTask.words
                        .filter(wordData => !wordData.correct)
                        .map(wordData => { 
                            return {
                                word: wordData.word,
                                wordType: this.state.currentTask.wordType
                            };
                        });
                    stats.misstakes.push(...misstakesData);
                }

                stats.wordCount.correct += this.state.currentTask.words.filter(wordData => wordData.correct).length;
                stats.wordCount.wrong += this.state.currentTask.words.filter(wordData => !wordData.correct).length;
                return stats;
            });

            this.storage.pushHistory(this.state.currentTask.words);

            if (!this.state.currentTask.hasErrors) {
                this.addPassedTask();
                setTimeout(() => this.nextTask(), 1000);
            }

            this.setState(state => {
                return {
                    showContinueButton: state.currentTask.hasErrors,
                    currentTask: Object.assign(state.currentTask, {
                        finished: true
                    })
                };
            });
        }
    }

    componentDidMount() {
        this.context.hideLoader();
    }

    render() {
        return (
            <div className={TrainerStyles.Container}>
                <WordLayout taskData={this.state.currentTask} showContinueButton={this.state.showContinueButton} containerRef={this.WordLayoutRef} onContinue={() => this.onContinue()}  onVowel={(...data) => this.onVowel(...data)} />
                
                <ShallowLayout type='lefttop'>
                    <HomeLogo />
                </ShallowLayout>
                <ShallowLayout type='righttop'>
                    <ThemeSwitcher />
                    <AccountLink />
                </ShallowLayout>
                <ShallowLayout type='leftbottom' style={{ right: 15 }}>
                    <InfoTabs 
                        wordType={this.state.currentTask.wordType} 
                        currentTaskNumber={Array.from(this.tasksPassed).filter(taskID => this.state.currentWordTypes.includes(this.storage.allTasks.find(taskData => taskData.id === taskID)?.wordType)).length+1} 
                        allTasksNumber={this.taskList().length} 
                        filterOn={this.state.wordTypeFilterEnabled} 
                        showWordTypeFilter={() => this.showWordTypeFilter()}
                        correctWordsPercent={Math.round(this.state.stats.wordCount.correct / (this.state.stats.wordCount.correct + this.state.stats.wordCount.wrong) * 100) || 0} 
                    />
                </ShallowLayout>
            </div>
        );
    }
}

function WordLayout({ taskData, onVowel, containerRef, showContinueButton, onContinue }) {
    return (
        <div className={TrainerStyles.WordLayout} ref={containerRef}>
            <TaskInfoContainer taskData={taskData} />
            {taskData.words.map((wordData, i) => <Word taskData={taskData} wordData={wordData} key={i} wordIndex={i} onVowel={onVowel} />)}
            {showContinueButton && <ContinueButton onClick={onContinue} />}
        </div>
    );
}

function Word({ wordData, wordIndex, onVowel }) {
    return (
        <div className={TrainerStyles.WordContainer}>
            {[...wordData.word].map((letter, i) => <Letter letter={letter} key={i} wordIndex={wordIndex} letterIndex={i} onVowel={onVowel} wordData={wordData} />)}
        </div>
    );
}

function Letter({ letter, wordIndex, letterIndex, onVowel, wordData }) {
    letter = letter.toUpperCase();
    const isVowel = 'ЁУЕЫАОЭЯИЮ'.includes(letter);
    const letterStyle = wordData.answered && (
        (wordData.correctLetterIndex === letterIndex)
        ? 'correct'
        : (
            (wordData.pickedLetterIndex === letterIndex) ? 'wrong' : 'untouched'
        )
    );

    const LetterContainerNode = useRef();
    useEffect(() => {
        LetterContainerNode.current.classList.remove('themeBackground');
        setTimeout(() => {
            if (LetterContainerNode.current)
            LetterContainerNode.current.classList.add('themeBackground');
        }, 10);
    });

    return (
        <span 
            className={TrainerStyles.LetterContainer} 
            data-vowel={isVowel}
            data-letterstyle={letterStyle}
            onClick={(isVowel && !wordData.answered) ? () => onVowel(wordIndex, letterIndex) : () => {}}
            ref={LetterContainerNode}
        >
            <code>{letter}</code>
        </span>
    );
}

function TaskInfoContainer({ taskData }) {
    return (
        <div className={TrainerStyles.TaskInfoContainer}>
            {taskData.context && <TaskInfo title='Контекст' text={taskData.context} />}
            {taskData.comment && taskData.finished && taskData.hasErrors && <TaskInfo title={'Комментарий'} text={taskData.comment} /> }
        </div>
    );
}

function TaskInfo({ text, title }) {
    return (
        <div className={`${TrainerStyles.TaskInfo} themeBackground`}>
            <div style={{ fontWeight: 500 }}>{title}</div>
            <div>{text}</div>
        </div>
    );
}

function InfoTabs({ wordType, currentTaskNumber, allTasksNumber, filterOn, correctWordsPercent, showWordTypeFilter }) {
    const [FilterTabRef, StatsTabRef] = [useRef(), useRef()];    
    useEffect(() => {
        const maxWidth = Math.max(
            parseFloat(getComputedStyle(FilterTabRef.current).getPropertyValue('width')), 
            parseFloat(getComputedStyle(StatsTabRef.current).getPropertyValue('width')),
        );
        FilterTabRef.current.style.minWidth = `${maxWidth}px`;
        StatsTabRef.current.style.minWidth = `${maxWidth}px`;
    }, [FilterTabRef, StatsTabRef]);

    wordType = wordType.charAt(0).toUpperCase() + wordType.slice(1);
    return (
        <div className={TrainerStyles.InfoTabsContainer}>
            <div 
                className={`${TrainerStyles.InfoTab} themeBackground`}
                style={{
                    cursor: 'pointer'
                }}
                onClick={() => showWordTypeFilter()}
                ref={FilterTabRef}
            >
                <FilterAlt />
                <div>
                    <div style={{ fontWeight: 500 }}>{wordType}</div>
                    <div>{filterOn ? 'Фильтр действует' : 'Фильтр выключен'}</div>
                </div>
            </div>
            <Link to='/stats' className={`${TrainerStyles.InfoTab} themeBackground`} ref={StatsTabRef}>
                <Analytics />
                <div>
                    <div style={{ fontWeight: 500 }}>Задание {currentTaskNumber} из {allTasksNumber}</div>
                    <div>{correctWordsPercent}% слов верно</div>
                </div>
            </Link>
        </div>
    );
}

export default Trainer;