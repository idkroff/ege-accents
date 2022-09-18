const defaultStyles = {
    position: "absolute",
    display: "flex",
    gap: 10
};

const styles = {
    leftbottom: {
        left: 15,
        bottom: 15
    },
    lefttop: {
        left: 15,
        top: 15
    },
    rightbottom: {
        right: 15,
        bottom: 15
    },
    righttop: {
        right: 15,
        top: 15
    }
};

function ShallowLayout({ children, type, style }) {
    return (
        <div
            style={Object.assign(
                {},
                defaultStyles,
                styles[type],
                style
            )}
        >
            {children}
        </div>
    );
}

export default ShallowLayout;