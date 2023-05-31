import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function CareTeamDelete({ getCareTeam, URL, navigate, goBack }) {
    const { id } = useParams();

    const [careteam, setCareTeam] = useState(null);

    async function getCareTeam() {
        try {
            let myCareTeam = await fetch(`${URL}/careteam/${id}`);
            myCareTeam = await myCareTeam.json();
            setCareTeam(myCareTeam);
        } catch (err) {
            console.log(err);
        }
    };

    async function deleteMyCareTeam() {
        try {
            await fetch(`${URL}/careteam/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            navigate(`/careteam`);
        } catch (err) {
            console.log(err);
        }
        getCareTeam();
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal py-5 ms-sm-3">Delete Care Team</h1>
                <div className="d-flex justify-content-center">
                    <Card border="dark" className="text-center mb-5" id="card">
                        <Card.Header className="fs-3" id="card-header">{careteam.title} {careteam.name}</Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4">Specialty</Card.Title>
                            <Card.Text className="fs-5 fw-light">{careteam.specialty}</Card.Text>
                            <Card.Title className="fs-4">Address</Card.Title>
                            <Card.Text className="fs-5 fw-light">{careteam.address}</Card.Text>
                            <Card.Title className="fs-4">Phone Number</Card.Title>
                            <Card.Text className="fs-5 fw-light">{careteam.phoneNumber}</Card.Text>
                            <Card.Title className="fs-4">Email</Card.Title>
                            <Card.Text className="fs-5 fw-light">{careteam.email}</Card.Text>
                            <Card.Title className="fs-4">Last Appointment</Card.Title>
                            <Card.Text className="fs-5 fw-light">{careteam.lastAppointment}</Card.Text>
                            <Card.Title className="fs-4">Next Appointment</Card.Title>
                            <Card.Text className="fs-5 fw-light">{careteam.nextAppointment}</Card.Text>
                            <Card.Title className="fs-4">Notes</Card.Title>
                            <Card.Text className="fs-5 fw-light">{careteam.notes}</Card.Text>
                            <Card.Title className="fs-4">Actions</Card.Title>
                            <div className="d-flex justify-content-center">
                                <button type="button" onClick={deleteMyCareTeam} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3">Delete</button>
                                <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3">Cancel</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div >
            </Container>
        );
    };

    useEffect(() => {
        getCareTeam();
    }, []);

    return (
        <>
            {careteam ? loaded() : <Loading />}
        </>
    );
};

export default CareTeamDelete;