import { useNavigate } from 'react-router-dom';

import ArrowBack from '@mui/icons-material/ArrowBack';

function GoBack() {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(-1)}
            style={{
                position: 'absolute',
                top: 15,
                left: 15,
                padding: "6px 10px",
                backgroundColor: 'var(--secondary-color)',
                transition: 'background-color 0.2s ease',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: 28
            }}
        >
            <ArrowBack fontSize='inherit' />
            <div 
                className='desktopOnly'
                style={{
                    paddingLeft: 6,
                    paddingRight: 4,
                    fontSize: 20,
                    marginTop: -3
                }}
            >
                <span style={{ fontWeight: 500 }}>Назад</span>
            </div>
        </div>
    );
}

export default GoBack;