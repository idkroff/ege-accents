import { Component, createContext } from "react";

const LoaderContext = createContext({
    hidden: true,
    show: () => {},
    hide: () => {}
});

class LoaderContextWrapper extends Component {
    constructor() {
        super();
        this.state = { hidden: true };
    }
    show() {
        if (this.state.hidden) this.setState({ hidden: false });
    }
    hide() {
        if (!this.state.hidden) this.setState({ hidden: true });
    }
    render() {
        return (
            <LoaderContext.Provider value={{
                loaderHidden: this.state.hidden,
                showLoader: () => this.show(),
                hideLoader: () => this.hide()
            }}>
                {this.props.children}
            </LoaderContext.Provider>
        );
    }
}

export { LoaderContextWrapper, LoaderContext };