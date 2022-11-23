import { Component } from "react";

import { LoaderContext } from '../../service/LoaderContext';
import GoBack from '../GoBack';
import ShallowLayout from "../ShallowLayout";
import ThemeSwitcher from "../ThemeSwitcher";

import S from "./Theory.module.css";

class Theory extends Component {
    static contextType = LoaderContext;

    componentDidMount() {
        this.context.hideLoader();
    }

    render() {
        return (
            <div className={S.Wrapper}>
                <GoBack />
                <ShallowLayout type='righttop'>
                    <ThemeSwitcher />
                </ShallowLayout>
                <div className={S.Container}>
                    <div className={S.Sections}>
                        <div className={S.Section}>
                            <div className={S.SectionTitle}>Существительные</div>
                            <div className={S.SectionSubTitle}>Ударение определяется конечным сочетанием гласных и согласных звуков:</div>
                            <ul>
                                <li>-Ал (квартАл)</li>
                                <li>-провОд (искл. электропрОвод)</li>
                                <li>-мЕн (полисмЕн; Искл. бАрмен, фенОмен)</li>
                                <li>-Атай (глашАтай)</li>
                                <li>-лЕние (мышлЕние)</li>
                            </ul>
                            <div className={S.SectionSubTitle}>Ударение определяется по производящему слогу:</div>
                            <ul style={{ gap: 8 }}>
                                <li>В сущ. на -ие ударение на той же букве, что и в глаголе, от которого оно образовано:<br />вЕдать – исповЕдание, обеспЕчить – обеспЕчение, <b>НО</b> мышлЕние, уведомлЕние, узаконЕние</li>
                                <li>В сущ. на -ота ударение зависит от части речи, от которой оно образовано:<br />&nbsp;&nbsp;&nbsp;&nbsp;— От прилагательного: -отА (полный – полнотА)<br />&nbsp;&nbsp;&nbsp;&nbsp;— От глагола: -Ота (зевать - зевОта)</li>
                            </ul>
                            Большинство слов без правил 😞
                        </div>

                        <div className={S.Section}>
                            <div className={S.SectionTitle}>Прилагательные</div>
                            <ul style={{ gap: 8 }}>
                                <li>Ударный слог в полной форме прилагательного сохраняется и в краткой форме.<br /><i>Например: красИвый – красИв – красИва – красИво</i></li>
                                <li>Если ударение в краткой форме женского рода падает на окончание, то в сравнительно степени ударение падает на суффикс ее<br /><i>Например: сильна – сильнЕе; стройнА – стройнЕе</i></li>
                                <li>Если же ударение в краткой форме женского рода на основе, то в сравнительной степени оно сохраняется на основе.<br /><i>Например: красИва – красИвее; печАльна – печАльнее</i></li>
                                <li>Чаще всего у прилагательных в краткой форме женского рода ударение падает на окончание<br /><i>Например: правА</i><br />В мужском и женском роде этих прилагательных ударение падает на основу.<br /><i>Например: сердце прАво</i></li>
                            </ul>
                        </div>

                        <div className={S.Section}>
                            <div className={S.SectionTitle}>Глаголы</div>
                            Четких правил расстановки ударение не существует, мы лишь даем рекомендации и правила, которые помогут вам в большинстве случаях
                            
                            <div className={S.SectionSubTitle}>Ударения в глаголах в прошедшем времени</div>
                            <ul>
                                <li>Ж.р. -&gt; на окончание (искл. клАла, крАла, слАла, стлАла)</li>
                                <li>Ср.р и м.р -&gt; не на окончание (к тому же если в глаголах есть приставка, то чаще ударение падает на приставку: прибыть – прИбыл, прИбыло; принять – прИнял, прИняло)</li>
                            </ul>

                            <div className={S.SectionSubTitle}>Ударения в глаголах не в прошедшем времени</div>
                            Поставить глагол в неопределенную форму. Если это не исключение, то ударение падает на гласный суффикс.
                            <i>Например: исключИть – исключИт, одолжИть – одолжИт, наделИть - наделЯт</i>
                            <i><b>Исключение:</b> освЕдомишься – освЕдомит, опОшлить – опОшлит, озлОбить – озлОбит, оклЕить – оклЕят, откУпорить – откУпорит, принУдить – принУдят, чЕрпать - чЕрпает</i>
                            Некоторые исключения могли быть забыты. Если наткнетесь на иные случаи, оповестите нас. Изменения будут учтены.
                        
                            <div className={S.SectionSubTitle}>Баловать как целовать</div>
                            <ul>
                                <li>Как целовать: пломбировАть, примировАть, нормировАть, сортировАть, сформировАть, блефовАть, бомбардировАть</li>
                                <li>Исключения: дозИровать, бронИровать, ходАтайствовать, блОкировать, костюмИровать</li>
                            </ul>

                            <div className={S.SectionSubTitle}>Возвратные глаголы в прошедшем времени (на -ся, на -сь)</div>
                            <ul>
                                <li>М.р -&gt; на сЯ -&gt; начаться – началсЯ; приняться – принялсЯ</li>
                                <li>Ср.р и ж.р -&gt; на окончание -&gt; началАсь, началОсь; принялАсь, принялОсь</li>
                            </ul>
                            <a target="_blank" rel="noopener noreferrer" href="https://i.imgur.com/ISJ5WPF.jpg" style={{ textDecoration: 'underline' }}>Алгоритм работы с глаголами</a>
                        </div>

                        <div className={S.Section}>
                            <div className={S.SectionTitle}>Причастия</div>
                            <ul style={{ gap: 10 }}>
                                <li>Если в полной форме причастие имеет суффикс ённ, то в краткой форме ё остается только в мужском роде. В среднем роде и в женском роде ударение падает на окончание.<br /><i>Например: приведЁнный – приведЁн, приведенА; ободрЁннный – ободрЁн, ободренО</i></li>
                                <li>Если в неопределенной форме глагола были суффиксы о или ну, то в причастиях ударение перейдет на 1 слог назад<br /><i>Например: полОть -&gt; пОлотый; согнУть -&gt; сОгнутый</i></li>
                                <li>В кратких причастиях женского рода ударение чаще всего падает на окончание</li>
                                <li>Вш, ущ, ющ, ащ, ящ – ударение в причастиях с такими суффиксами ставится, как в неопределенной форме глагола</li>
                            </ul>
                        </div>

                        <div className={S.Section}>
                            <div className={S.SectionTitle}>Деепричастия</div>
                            <ul style={{ gap: 8 }}>
                                <li>Ударение в деепричастиях ставится на тот же слог, что и в глаголах неопределенной формы.<br /><i>Например: задАть – задАв; занЯть – занЯв</i></li>
                                <li>2.	Исключения те же, что и у глагола.<br /><i>Например: исчЕрпать – исчЕрпав</i></li>
                            </ul>
                        </div>

                        <div className={S.Section}>
                            <div className={S.SectionTitle}>Наречия</div>
                            Правил нет. Запоминайте 😊
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Theory;