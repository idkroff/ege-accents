import { Component } from "react";

import { LoaderContext } from '../../service/LoaderContext';

import HistoryStyles from './History.module.css';
import GoBack from '../GoBack';
import ThemeSwitcher from '../ThemeSwitcher';
import CheckBoxIcon from '../CheckBoxIcon';
import ConfirmButton from '../ConfirmButton';
import Delete from '@mui/icons-material/Delete';

import Swal from '../../service/Swal';
import CancelButton from "../CancelButton";

class History extends Component {
    constructor() {
        super();
        this.state = {
            history: (localStorage.getItem('history')) ? JSON.parse(localStorage.getItem('history')).reverse() : [],
            showCorrect: true,
            showWrong: true
        }
    }

    static contextType = LoaderContext;

    componentDidMount() {
        this.context.hideLoader();
    }

    history() {
        return this.state.history.filter(wordData => (wordData.correct && this.state.showCorrect) || (!wordData.correct && this.state.showWrong));
    }

    toggleCorrect() {
        this.setState(state => {
            return {
                showCorrect: !state.showCorrect     
            };
        });
    }

    toggleWrong() {
        this.setState(state => {
            return {
                showWrong: !state.showWrong  
            };
        });
    }

    clearHistory() {
        this.setState({
            history: []
        }, Swal.close);
        localStorage.setItem('history', '[]');
    }

    requireClearConfirm() {
        Swal.show({
            html: (
                <div>
                    <h2>Вы действительно хотите очистить историю ответов?</h2>
                    <span>Это не обнулит статистику</span>
                    <div style={{
                        marginTop: 20,
                        display: 'flex',
                        gap: 20
                    }}>
                        <ConfirmButton style={{ 
                            flex: '1 1 0',
                            backgroundColor: 'var(--red-color)'
                        }} onClick={() => this.clearHistory()} />
                        <CancelButton style={{ 
                            flex: '1 1 0' 
                        }} onClick={Swal.close}/>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className={HistoryStyles.Container}>
                <GoBack />
                <ThemeSwitcher />
                <div className={HistoryStyles.Main}>
                    <div className={HistoryStyles.TitleContainer}>
                        <span>История выполнения заданий</span>
                        <div className={`${HistoryStyles.ClearIconContainer} themeBackground`} onClick={() => this.requireClearConfirm()}>
                            <Delete />
                        </div>
                    </div>
                    <div className={HistoryStyles.TypeSelectContainer}>
                        <div className={`${HistoryStyles.TypeSelect} themeBackground`} onClick={() => this.toggleCorrect()}>
                            <span>Верные</span>
                            <CheckBoxIcon enabled={this.state.showCorrect} />
                        </div>
                        <div className={`${HistoryStyles.TypeSelect} themeBackground`} onClick={() => this.toggleWrong()}>
                            <span>Неверные</span>
                            <CheckBoxIcon enabled={this.state.showWrong} />
                        </div>
                    </div>
                    <div className={HistoryStyles.RecsContainer}>
                        {this.history().map((wordData, i) => 
                            <div 
                                className={`${HistoryStyles.WordContainer} themeBackground`} 
                                data-wordstatus={(wordData.correct) ? 'correct' : 'error'}
                                key={i}
                            >
                                {Array.from(wordData.word).map((letter, i) => 
                                    <span
                                        style={{
                                            paddingInline: ([wordData.correctLetterIndex, wordData.pickedLetterIndex].includes(i)) ? 2 : 0,
                                            marginInline: ([wordData.correctLetterIndex, wordData.pickedLetterIndex].includes(i)) ? 2 : 0,
                                            color: ([wordData.correctLetterIndex, wordData.pickedLetterIndex].includes(i)) ? '#fff' : 'inherit',
                                            backgroundColor: (i === wordData.correctLetterIndex) 
                                            ? 'var(--green-color)'
                                            : (
                                                (i === wordData.pickedLetterIndex) ? 'var(--red-color)' : 'initial'
                                            ),
                                            borderRadius: ([wordData.correctLetterIndex, wordData.pickedLetterIndex].includes(i)) ? 'var(--border-radius-default)' : 'initial',
                                        }}
                                        className='themeBackground'
                                        key={i}
                                    >
                                        {letter}
                                    </span>
                                )}
                            </div>
                        )}
                        {!this.history().length && <div>
                            Похоже тут пусто!
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default History;