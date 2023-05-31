import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import { useEffect } from "react";

function AppointmentsDelete({ appointment, getAppointment, getAppointments, URL, id, goBack }) {
    async function deleteMyAppointment() {
        try {
            await fetch(`${URL}/appointments/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } catch (err) {
            console.log(err);
        }
        getAppointments();
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal py-5 ms-sm-3">Delete Appointment</h1>
                <div className="d-flex justify-content-center">
                    <Card border="dark" className="text-center mb-5" id="card">
                        <Card.Header className="fs-3" id="card-header">{appointment.nameOfAppointment}</Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4">Provider</Card.Title>
                            <Card.Text className="fs-5 fw-light">{appointment.title} {appointment.nameOfProvider}</Card.Text>
                            <Card.Title className="fs-4">Specialty</Card.Title>
                            <Card.Text className="fs-5 fw-light">{appointment.specialty}</Card.Text>
                            <Card.Title className="fs-4">Address</Card.Title>
                            <Card.Text className="fs-5 fw-light">{appointment.address}</Card.Text>
                            <Card.Title className="fs-4">Date</Card.Title>
                            <Card.Text className="fs-5 fw-light">{appointment.date} {appointment.time}</Card.Text>
                            <Card.Title className="fs-4">Reason</Card.Title>
                            <Card.Text className="fs-5 fw-light">{appointment.reason}</Card.Text>
                            <Card.Title className="fs-4">Notes</Card.Title>
                            <Card.Text className="fs-5 fw-light">{appointment.notes}</Card.Text>
                            <Card.Title className="fs-4">Actions</Card.Title>
                            <div className="d-flex justify-content-center">
                                <button type="button" onClick={deleteMyAppointment} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1">Delete</button>
                                <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1">Cancel</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        );
    };

    useEffect(() => {
        getAppointment();
    }, []);

    return (
        <>
            {appointment ? loaded() : <Loading />}
        </>
    );
};

export default AppointmentsDelete;