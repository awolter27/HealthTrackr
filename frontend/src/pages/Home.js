import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <Container className='pb-5'>
            <h1 className="py-5 text-center">Dashboard</h1>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
                <Card style={{ width: '13rem' }} className='mx-4 mb-4 border border-dark'>
                    <Link to={`/allergies`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/allergies.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light text-center'>Allergies</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '13rem' }} className='pt-3 mx-4 mb-4 border border-dark'>
                    <Link to={`/appointments`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/appointments.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light pt-3 text-center'>Appointments</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '13rem' }} className='pt-1 mx-4 mb-4 border border-dark'>
                    <Link to={`/careteam`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/careteam.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light text-center'>Care Team</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '13rem' }} className='mx-4 mb-4 border border-dark'>
                    <Link to={`/familyhistory`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/familyhistory.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light text-center'>Family History</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '13rem' }} className='pt-4 mx-4 mb-4 border border-dark'>
                    <Link to={`/healthconditions`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/healthconditions.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light pt-2 text-center'>Health Conditions</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '13rem' }} className='mx-4 mb-4 border border-dark'>
                    <Link to={`/hospitalizations`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/hospitalizations.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light text-center'>Hospitalizations</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '13rem' }} className='mx-4 mb-4 border border-dark'>
                    <Link to={`/medications`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/medications.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light text-center'>Medications</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '13rem' }} className='mx-4 mb-4 border border-dark'>
                    <Link to={`/socialhistory`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/socialhistory.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light text-center'>Social History</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '13rem' }} className='pt-2 mx-4 mb-4 border border-dark'>
                    <Link to={`/surgeries`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/surgeries.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light pt-2 text-center'>Surgeries</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '13rem' }} className='mx-4 mb-4 border border-dark'>
                    <Link to={`/vaccinations`} className='text-dark text-decoration-none'>
                        <Card.Img variant="top" src="/icons/vaccinations.png" alt='Medical Logo' className='px-3 pt-3' />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-light text-center'>Vaccinations</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
            </div>
        </Container>
    );
}

export default Home;