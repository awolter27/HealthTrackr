import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
    return (
        <Navbar collapseOnSelect expand="sm" sticky="top" id="nav">
            <Container fluid>
                <Navbar.Brand href="/" className="border border-white border-1 rounded-3 text-white fs-2 fw-normal px-2 py-1 mx-1 my-1">HealthTrackr+</Navbar.Brand>
                {/* I used Bootstrap-React to style my app. When the screen size decreases, the nav bar collapses into a hamburger menu. I wanted the border and three lines inside the border to be white, so that's what the following lines of code are doing. I manually recreated the hamburger menu to my specifications. */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border border-white shadow-none mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="white">
                        <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M4 7h22M4 15h22M4 23h22"></path>
                    </svg>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="text-white text-end fs-4 fw-light mx-1"><span id="nav-heading">Home</span></Nav.Link>
                        <NavDropdown title="Menu" align="end" className="fs-4 fw-light mx-1" id="nav-menu">
                            <NavDropdown.Item href="/healthconditions" className="text-end fs-5 fw-light py-2">Health Conditions</NavDropdown.Item>
                            <NavDropdown.Item href="/allergies" className="text-end fs-5 fw-light py-2">Allergies</NavDropdown.Item>
                            <NavDropdown.Item href="/medications" className="text-end fs-5 fw-light py-2">Medications</NavDropdown.Item>
                            <NavDropdown.Item href="/surgeries" className="text-end fs-5 fw-light py-2">Surgeries</NavDropdown.Item>
                            <NavDropdown.Item href="/hospitalizations" className="text-end fs-5 fw-light py-2">Hospitalizations</NavDropdown.Item>
                            <NavDropdown.Item href="/socialhistory" className="text-end fs-5 fw-light py-2">Social History</NavDropdown.Item>
                            <NavDropdown.Item href="/familyhistory" className="text-end fs-5 fw-light py-2">Family History</NavDropdown.Item>
                            <NavDropdown.Item href="/vaccinations" className="text-end fs-5 fw-light py-2">Vaccinations</NavDropdown.Item>
                            <NavDropdown.Item href="/appointments" className="text-end fs-5 fw-light py-2">Appointments</NavDropdown.Item>
                            <NavDropdown.Item href="/careteam" className="text-end fs-5 fw-light py-2">Care Team</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;