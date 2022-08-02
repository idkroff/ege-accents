import { Component } from "react";
import { ThemeContext } from "../service/ThemeContext";
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';

class ThemeSwitcher extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <div 
                style={{
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    padding: 6,
                    backgroundColor: 'var(--secondary-color)',
                    borderRadius: 'var(--border-radius-big)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: 28
                }}
                onClick={() => this.context.toggle()}
                className='themeBackground'
            >
                { (this.context.theme === 'light') ? <DarkMode fontSize='inherit' /> : <LightMode fontSize='inherit' /> }
            </div>
        );
    }
}

export default ThemeSwitcher;