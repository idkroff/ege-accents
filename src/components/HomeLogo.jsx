import Logo from './Logo';
import Info from '@mui/icons-material/Info';
import Link from './Link';
import { useRef } from 'react';

function HomeLogo() {
    const InfoLinkNode = useRef();

    return (
        <div
            onMouseEnter={() => {
                InfoLinkNode.current.style.visibility = 'initial';
                InfoLinkNode.current.style.opacity = 1;
            }}
            onMouseLeave={() => {
                InfoLinkNode.current.style.opacity = 0;
                setTimeout(() => {
                    InfoLinkNode.current.style.visibility = 'hidden';
                }, 300);
            }}
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                gap: 6,
                position: 'absolute',
                top: 15,
                left: 15,
            }}
        >
            <div
                style={{
                    padding: 6,
                    backgroundColor: 'var(--secondary-color)',
                    transition: 'background-color 0.2s ease',
                    borderRadius: 'var(--border-radius-big)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
            >
                <Logo size="28px" />
                <div 
                    className='desktopOnly'
                    style={{
                        marginTop: -2,
                        paddingLeft: 6,
                        paddingRight: 4,
                        fontSize: 20
                    }}
                >
                    <span style={{ fontWeight: 500 }}>ЕГЭ</span>
                    <span>.Ударения</span>
                </div>
            </div>
            <Link
                ref={InfoLinkNode}
                to='/about'
                style={{
                    padding: 6,
                    borderRadius: 'var(--border-radius-big)',
                    backgroundColor: 'var(--secondary-color)',
                    fontSize: 28,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease',
                    cursor: 'pointer',
                    opacity: 0,
                    visibility: 'hidden'
                }}
                className='themeBackground'
                title='О сервисе'
            >
                <Info fontSize='inherit' />
            </Link>
        </div>
    );
}

export default HomeLogo;