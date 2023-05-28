import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Home() {
    return (
        <Container className="d-flex flex-column align-items-center">
            <h1 className="py-5">Dashboard</h1>
            <div className='d-flex flex-column align-items-center rounded-4 bg-white' id='home-div'>
                <Link to={`/allergies`} className='d-flex flex-column align-items-center text-decoration-none'>
                    <Image src="/icons/allergies.png" className='px-5 pt-3 pb-1 rounded-4' alt='icon' id='home-image' />
                    <p className="fs-3 fw-light text-dark ">Allergies</p>
                </Link>
            </div>
            <div className='d-flex flex-column align-items-center rounded-4 bg-white' id='home-div'>
                <Link to={`/appointments`} className='d-flex flex-column align-items-center text-decoration-none'>
                    <Image src="/icons/appointments.png" className='px-4 pt-3 pb-1 rounded-4' alt='icon' id='home-image' />
                    <p className="fs-3 fw-light text-dark ">Appointments</p>
                </Link>
            </div>
        </Container>
    );
}

export default Home;