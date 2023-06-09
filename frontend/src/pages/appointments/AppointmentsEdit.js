import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function AppointmentsEdit({ getAppointments, URL, navigate, goBack }) {
    const { id } = useParams();

    const [appointment, setAppointment] = useState(null);

    async function getAppointment() {
        try {
            let myAppointment = await fetch(`${URL}/appointments/${id}`);
            myAppointment = await myAppointment.json();
            setAppointment(myAppointment);
        } catch (err) {
            console.log(err);
        }
    };

    function handleChange(e) {
        if (e.target.name === "specialty" && e.target.value === "") {
            setAppointment((currentState) => ({
                ...currentState,
                specialty: "N/A"
            }));
        } else if (e.target.name === "reason" && e.target.value === "") {
            setAppointment((currentState) => ({
                ...currentState,
                reason: "N/A"
            }));
        } else if (e.target.name === "notes" && e.target.value === "") {
            setAppointment((currentState) => ({
                ...currentState,
                notes: "None"
            }));
        } else {
            setAppointment((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value
            }));
        }
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/appointments/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointment)
            });
            navigate(`/appointments`);
        } catch (err) {
            console.log(err);
        }
        getAppointments();
    };

    function requiredInput() {
        if (appointment.nameOfAppointment && appointment.title && appointment.nameOfProvider && appointment.address && appointment.date && appointment.time) {
            return true;
        } else {
            return false;
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Edit Appointment</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Appointment <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="nameOfAppointment" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={appointment.nameOfAppointment} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Provider Title <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="title" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={appointment.title} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Provider Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="nameOfProvider" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={appointment.nameOfProvider} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Specialty</Form.Label>
                                <Form.Control name="specialty" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={appointment.specialty} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Address <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="address" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={appointment.address} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Date <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="date" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={appointment.date} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Time <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="time" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={appointment.time} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Reason</Form.Label>
                                <Form.Control name="reason" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={appointment.reason} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={appointment.notes} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" disabled={!requiredInput()} className="btn btn-success border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3 mb-3">Edit</button>
                                    <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3 mb-3">Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
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

export default AppointmentsEdit;