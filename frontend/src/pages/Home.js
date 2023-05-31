import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container fluid className="pb-5">
            <h1 className="text-center py-5">Dashboard</h1>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                <Card style={{ width: "13rem" }} className="border border-dark mx-4 mb-4">
                    <Link to={`/allergies`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/allergies.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4 fw-light">Allergies</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: "13rem" }} className="border border-dark pt-3 mx-4 mb-4">
                    <Link to={`/appointments`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/appointments.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4 fw-light pt-3">Appointments</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: "13rem" }} className="border border-dark pt-1 mx-4 mb-4">
                    <Link to={`/careteam`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/careteam.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4 fw-light">Care Team</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: "13rem" }} className="border border-dark mx-4 mb-4">
                    <Link to={`/familyhistory`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/familyhistory.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4 fw-light">Family History</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: "13rem" }} className="border border-dark pt-4 mx-4 mb-4">
                    <Link to={`/healthconditions`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/healthconditions.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4 fw-light pt-3">Health Conditions</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: "13rem" }} className="border border-dark mx-4 mb-4">
                    <Link to={`/hospitalizations`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/hospitalizations.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4 fw-light">Hospitalizations</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: "13rem" }} className="border border-dark mx-4 mb-4">
                    <Link to={`/medications`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/medications.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4 fw-light">Medications</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: "13rem" }} className="border border-dark mx-4 mb-4">
                    <Link to={`/socialhistory`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/socialhistory.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4 fw-light">Social History</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: "13rem" }} className="border border-dark pt-2 mx-4 mb-4">
                    <Link to={`/surgeries`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/surgeries.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="fs-4 fw-light pt-2 text-center">Surgeries</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: "13rem" }} className="border border-dark mx-4 mb-4">
                    <Link to={`/vaccinations`} className="text-dark text-decoration-none">
                        <Card.Img variant="top" src="/icons/vaccinations.png" alt="Medical Logo" className="px-3 pt-3" />
                        <Card.Body>
                            <Card.Title className="text-center fs-4 fw-light">Vaccinations</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
            </div>
        </Container>
    );
};

export default Home;