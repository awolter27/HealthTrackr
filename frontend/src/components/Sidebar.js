import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <nav className='sidebar-nav'>
                <Link className='link' to='/healthconditions'>Health Conditions</Link>
                <Link className='link' to='/allergies'>Allergies</Link>
                <Link className='link' to='/medications'>Medications</Link>
                <Link className='link' to='/surgeries'>Surgeries</Link>
                <Link className='link' to='/hospitalizations'>Hospitalizations</Link>
                <Link className='link' to='/socialhistory'>Social History</Link>
                <Link className='link' to='/familyhistory'>Family History</Link>
                <Link className='link' to='/vaccinations'>Vaccinations</Link>
                <Link className='link' to='/appointments'>Appointments</Link>
                <Link className='link' to='/careteam'>Care Team</Link>
            </nav>
        </>
    );
}

export default Sidebar;