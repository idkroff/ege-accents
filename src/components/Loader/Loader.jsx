import { Component } from 'react';
import Style from './Loader.module.css';
import Logo from '../Logo';

class Loader extends Component {
    render() {
        return (
            <div className={Style.LoaderIndicator} data-hidden={this.props.hidden}>
                <div className={Style.LoaderIndicatorHead}>
                    <div className={Style.FirstIndicator}></div>
                    <div className={Style.SecondIndicator}></div>
                </div>
                {this.props.fullpage &&
                    <div className={Style.LogoFrame}>
                    <Logo size="64px" />
                </div>
                }
            </div>
        );
    }
}

export default Loader;