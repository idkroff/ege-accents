import { Component, createContext } from "react";

const ThemeContext = createContext({
    theme: 'light',
    toggle: () => {}
});

class ThemeContextWrapper extends Component {
    constructor() {
        super();
        this.state = {
            theme: localStorage.getItem('colorTheme') || 'light'
        };
        this.updateDataTheme();
    }
    toggleTheme() {
        this.setState(state => { 
            return {
                theme: (state.theme === 'light') ? 'dark' : 'light' 
            };
        }, this.updateDataTheme);
    }
    updateDataTheme() {
        document.body.setAttribute('data-theme', this.state.theme);
        localStorage.setItem('colorTheme', this.state.theme);
    }
    render() {
        return (
            <ThemeContext.Provider value={{
                theme: this.state.theme,
                toggle: () => this.toggleTheme()
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export { ThemeContextWrapper, ThemeContext };