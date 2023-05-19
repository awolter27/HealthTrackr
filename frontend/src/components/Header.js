import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar collapseOnSelect expand="sm" sticky="top" id='nav'>
            <Container fluid>
                <Navbar.Brand href="/" className="text-white fs-2 fw-normal mx-1 my-1 px-2 py-1 border border-white border-1 rounded-3">HealthTrackr+</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-1 border border-white shadow-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="white">
                        <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M4 7h22M4 15h22M4 23h22"></path>
                    </svg>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="text-white fs-4 fw-light mx-1 text-end"><span id="nav-heading">Home</span></Nav.Link>
                        <NavDropdown title="Menu" align="end" className="fs-4 fw-light mx-1" id="nav-menu">
                            <NavDropdown.Item href="/healthconditions" className="fs-5 fw-light py-2 text-end">Health Conditions</NavDropdown.Item>
                            <NavDropdown.Item href="/allergies" className="fs-5 fw-light py-2 text-end">Allergies</NavDropdown.Item>
                            <NavDropdown.Item href="/medications" className="fs-5 fw-light py-2 text-end">Medications</NavDropdown.Item>
                            <NavDropdown.Item href="/surgeries" className="fs-5 fw-light py-2 text-end">Surgeries</NavDropdown.Item>
                            <NavDropdown.Item href="/hospitalizations" className="fs-5 fw-light py-2 text-end">Hospitalizations</NavDropdown.Item>
                            <NavDropdown.Item href="/socialhistory" className="fs-5 fw-light py-2 text-end">Social History</NavDropdown.Item>
                            <NavDropdown.Item href="/familyhistory" className="fs-5 fw-light py-2 text-end">Family History</NavDropdown.Item>
                            <NavDropdown.Item href="/vaccinations" className="fs-5 fw-light py-2 text-end">Vaccinations</NavDropdown.Item>
                            <NavDropdown.Item href="/appointments" className="fs-5 fw-light py-2 text-end">Appointments</NavDropdown.Item>
                            <NavDropdown.Item href="/careteam" className="fs-5 fw-light py-2 text-end">Care Team</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;