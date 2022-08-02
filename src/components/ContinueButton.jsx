import NavigateNext from '@mui/icons-material/NavigateNext';

function ContinueButton({ onClick }) {
    return (
        <div 
            style={{
                cursor: 'pointer',
                fontSize: 24,
                padding: '6px 4px 6px 10px',
                backgroundColor: 'var(--secondary-color)',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center',
                borderRadius: 'var(--border-radius-default)'
            }}
            onClick={onClick}
            className='themeBackground'
        >
            <code
                style={{
                    marginTop: -3,
                    fontSize: 22
                }}
            >
                Далее
            </code>
            <NavigateNext />
        </div>
    );
}

export default ContinueButton;