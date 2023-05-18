import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <>
            <header>
                <nav className='nav flex-column'>
                    <Link className='nav-link' id='nav-home-link' to='/'>HealthTrackr+</Link>
                    <Link className='nav-link' to='/healthconditions'>Health Conditions</Link>
                    <Link className='nav-link' to='/allergies'>Allergies</Link>
                    <Link className='nav-link' to='/medications'>Medications</Link>
                    <Link className='nav-link' to='/surgeries'>Surgeries</Link>
                    <Link className='nav-link' to='/hospitalizations'>Hospitalizations</Link>
                    <Link className='nav-link' to='/socialhistory'>Social History</Link>
                    <Link className='nav-link' to='/familyhistory'>Family History</Link>
                    <Link className='nav-link' to='/vaccinations'>Vaccinations</Link>
                    <Link className='nav-link' to='/appointments'>Appointments</Link>
                    <Link className='nav-link' to='/careteam'>Care Team</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;