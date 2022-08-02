function ConfirmButton(props) {
    return (
        <div style={Object.assign({
            padding: '3px 10px 6px 10px',
            backgroundColor: 'var(--green-color)',
            cursor: 'pointer',
            borderRadius: 'var(--border-radius-default)',
            fontWeight: 500,
            fontSize: 20,
            color: '#fff'
        }, props.style)} onClick={props.onClick}>
            Да
        </div>
    );
}

export default ConfirmButton;