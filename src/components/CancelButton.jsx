function CancelButton(props) {
    return (
        <div style={Object.assign({
            padding: '3px 10px 6px 10px',
            backgroundColor: 'var(--secondary-color)',
            color: 'var(--font-color)',
            cursor: 'pointer',
            borderRadius: 'var(--border-radius-default)',
            fontWeight: 500,
            fontSize: 20
        }, props.style)} onClick={props.onClick}>
            Отмена
        </div>
    );
}

export default CancelButton;