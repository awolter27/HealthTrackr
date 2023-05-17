import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <nav>
                    <Link className='link' to='/'>HealthTrackr</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;