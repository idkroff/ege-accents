import Styles from './WordTypeFilter.module.css';

import CheckBoxIcon from '../CheckBoxIcon';
import RestartAlt from '@mui/icons-material/RestartAlt';
import Close from '@mui/icons-material/Close';

import Swal from '../../service/Swal';
import { Component } from 'react';

class WordTypeFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWordTypes: props.currentWordTypes
        };
    }

    async handleInteract(result) {
        this.setState({
            currentWordTypes: await result
        });
    }

    render() {
        return (
            <>
                <div className={Styles.TitleContainer}>
                    <div className={Styles.Title}>Фильтр по частям речи</div>
                    <div className={Styles.IconsContainer}>
                        <div className={Styles.IconContainer} title='Сбросить фильтр' onClick={() => this.handleInteract(this.props.onReset())}>
                            <RestartAlt fontSize='inherit' />
                        </div>
                        <div className={Styles.IconContainer} onClick={Swal.close}>
                            <Close fontSize='inherit' />
                        </div>
                    </div>
                </div>
                <div className={Styles.TypesList}>
                    {this.props.wordTypes.map((wordType, i) => <WordTypeContainer wordType={wordType} key={i} onClick={() => this.handleInteract(this.props.onChange(wordType))} enabled={this.state.currentWordTypes.includes(wordType)} />)}
                </div>
            </>
        );
    }
}

function WordTypeContainer({ wordType, enabled, onClick }) {
    wordType = wordType.charAt(0).toUpperCase() + wordType.slice(1);
    return (
        <div className={Styles.WordTypeContainer} onClick={onClick}>
            <div>{wordType}</div>
            <CheckBoxIcon enabled={enabled} />
        </div>
    );
}

export default WordTypeFilter;