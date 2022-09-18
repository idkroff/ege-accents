import { Component } from 'react';
import StatsStyles from './Stats.module.css';

import GoBack from '../GoBack';
import Link from '../Link';
import Delete from '@mui/icons-material/Delete';
import { LoaderContext } from '../../service/LoaderContext';

import Swal from '../../service/Swal';
import ConfirmButton from '../ConfirmButton';
import CancelButton from '../CancelButton';
import StorageInterface from '../../service/StorageInterface';

class Stats extends Component {
    constructor() {
        super();

        this.storage = new StorageInterface();

        this.state = {
            computedStats: this.getComputedStats()
        };
    }

    static contextType = LoaderContext;

    componentDidMount() {
        this.context.hideLoader();
    }

    getComputedStats() {
        const statsData = this.storage.getStats();
        const computedStats = {};

        if (statsData?.wordCount && (statsData?.wordCount?.correct || statsData?.wordCount?.wrong)) {
            computedStats.correctPercent = Math.round((
                statsData.wordCount.correct / (statsData.wordCount.correct + statsData.wordCount.wrong)
            ) * 100);
        }

        if (statsData?.misstakes?.length) {
            let [tempWordType, tempMisstakes] = [{}, {}];
            statsData.misstakes.forEach(wordData => {
                if (!tempWordType.hasOwnProperty(wordData.wordType)) {
                    tempWordType[wordData.wordType] = 0;
                }
                tempWordType[wordData.wordType]++;

                if (!tempMisstakes.hasOwnProperty(wordData.word)) {
                    tempMisstakes[wordData.word] = 0;
                }
                tempMisstakes[wordData.word]++;
            });

            tempWordType = Object.entries(tempWordType);
            tempWordType.sort((a,b) => b[1] - a[1]);

            tempMisstakes = Object.entries(tempMisstakes);
            tempMisstakes.sort((a,b) => b[1] - a[1]);

            computedStats.commonMisstakes = {
                words: tempMisstakes.slice(0,5).map(([word, count]) => {
                    return {
                        word,
                        count
                    };
                }),
                wordType: {
                    type: tempWordType[0][0],
                    count: tempWordType[0][1]
                }
            };
        }

        if (statsData?.solutionTime) {
            statsData.solutionTime.sort((a,b) => a - b);
            computedStats.solutionTimeAvg = (+((
                statsData.solutionTime[Math.floor(statsData.solutionTime.length / 2)]
                + statsData.solutionTime[Math.ceil(statsData.solutionTime.length / 2)]
            ) / 2).toFixed(2))
        }

        return computedStats;
    }

    requireClearStatsConfirm() {
        Swal.show({
            html: (
                <div>
                    <h2>Вы действительно хотите очистить всю статистику?</h2>
                    <span>Это не очистит историю ответов</span>
                    <div style={{
                        marginTop: 20,
                        display: 'flex',
                        gap: 20
                    }}>
                        <ConfirmButton style={{ 
                            flex: '1 1 0',
                            backgroundColor: 'var(--red-color)'
                        }} onClick={() => this.clearStats()} />
                        <CancelButton style={{ 
                            flex: '1 1 0' 
                        }} onClick={Swal.close}/>
                    </div>
                </div>
            )
        });
    }

    clearStats() {
        this.setState({
            computedStats: {}
        }, () => {
            this.storage.setZeroStats();
            Swal.close();
        });
    }

    render() {
        return (
            <div className={StatsStyles.Container}>
                <GoBack />
                <div className={StatsStyles.Main}>
                    <div className={StatsStyles.StatsContainer}>
                        <div className={StatsStyles.Header}>
                            <span>Статистика</span>
                            <div className={`${StatsStyles.ClearStatsIcon} themeBackground`} onClick={() => this.requireClearStatsConfirm()}>
                                <Delete fontSize='inherit' />
                            </div>
                        </div>

                        <h2>Корректность решений</h2>
                        {this.state.computedStats?.correctPercent
                        ? <div>Из всех решенных вами заданий, правильно решены - <StatsData>{this.state.computedStats.correctPercent}%</StatsData></div>
                        : <NotComputed />}                        
                        
                        <h2>Самые частые ошибки</h2>
                        {this.state.computedStats?.commonMisstakes
                        ? <div className={StatsStyles.CommonMisstakesContainer}>
                            <div>Чаще всего вы ошибаетесь в этих словах</div>
                            <div className={StatsStyles.CommonMisstakesLayout}>
                                {this.state.computedStats.commonMisstakes.words.map((wordData, wordIndex) => <CommonWrongWord wordData={wordData} key={wordIndex} />)}
                            </div>
                            <div>Больше всего ошибок в словах с частью речи <StatsData>{this.state.computedStats.commonMisstakes.wordType.type}</StatsData> - {this.state.computedStats.commonMisstakes.wordType.count}</div>
                        </div>
                        : <NotComputed />}

                        <h2>Скорость решения</h2>
                        {this.state.computedStats?.solutionTimeAvg 
                        ? <div>
                            В среднем вы ставите ударение в 1 слове за <StatsData>{this.state.computedStats.solutionTimeAvg}</StatsData> секунд
                        </div>
                        : <NotComputed />}

                        <h2>История ответов</h2>
                            <Link to='/stats/history'>
                            <div className={`${StatsStyles.HistoryLink} themeBackground`}>
                                Посмотреть
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

function StatsData(props) {
    return (
        <code className={`${StatsStyles.StatsDataContainer} themeBackground`}>{props.children}</code>
    );
}

function NotComputed() {
    return (
        <div>У нас пока недостаточно информации, чтобы отобразить эту статистику</div>
    );
}

function CommonWrongWord(props) {
    return (
        <div className={`${StatsStyles.CommonWrongWordContainer} themeBackground`} title={`Ошибок: ${props.wordData.count}`}>
            {props.wordData.word}
        </div>
    );
}

export default Stats;