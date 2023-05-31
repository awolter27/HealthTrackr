import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

function AppointmentsNew({ appointments, getAppointments, URL, navigate, goBack }) {
    const [appointmentsForm, setAppointmentsForm] = useState({
        nameOfAppointment: "",
        title: "",
        nameOfProvider: "",
        specialty: "N/A",
        address: "",
        date: "",
        time: "",
        reason: "N/A",
        notes: "None"
    });

    function handleChange(e) {
        setAppointmentsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }));
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/appointments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointmentsForm)
            });
            getAppointments();
            navigate(`/appointments`);
        } catch (err) {
            console.log(err);
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Add New Appointment</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Appointment <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="nameOfAppointment" onChange={handleChange} as="textarea" type="text" placeholder="Cardiology Appointment" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Provider Title <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="title" onChange={handleChange} as="textarea" type="text" placeholder="Dr." className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Provider Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="nameOfProvider" onChange={handleChange} as="textarea" type="text" placeholder="Julia Brown" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Specialty</Form.Label>
                                <Form.Control name="specialty" onChange={handleChange} as="textarea" type="text" placeholder="Cardiology" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Address <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="address" onChange={handleChange} as="textarea" type="text" placeholder="962 Flynn Street" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Date <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="date" onChange={handleChange} as="textarea" type="text" placeholder="06/23/2020" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Time <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="time" onChange={handleChange} as="textarea" type="text" placeholder="2:30 pm" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Reason</Form.Label>
                                <Form.Control name="reason" onChange={handleChange} as="textarea" type="text" placeholder="Chest Pain" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="I need to mention both of my parents have had heart attacks." className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" className="btn btn-success border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3 mb-3">Submit</button>
                                    <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3 mb-3">Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </Container >
        );
    };

    useEffect(() => {
        getAppointments();
    }, []);

    return (
        <>
            {appointments ? loaded() : <Loading />}
        </>
    );
};

export default AppointmentsNew;