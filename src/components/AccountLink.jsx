import Link from './Link';
import Person from '@mui/icons-material/Person';

function AccountLink() {
    return (
        <Link
            to='/stats'
            style={{
                padding: 6,
                borderRadius: 'var(--border-radius-big)',
                backgroundColor: 'var(--secondary-color)',
                fontSize: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }}
            className='themeBackground'
            title='Аккаунт'
        >
            <Person fontSize='inherit' />
        </Link>
    );
}

export default AccountLink;