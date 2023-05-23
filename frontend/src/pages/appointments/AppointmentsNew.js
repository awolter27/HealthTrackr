import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function AppointmentsNew() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);

    const [appointmentsForm, setAppointmentsForm] = useState({
        nameOfAppointment: "",
        title: "",
        nameOfProvider: "",
        specialty: "",
        address: "",
        date: "",
        time: "",
        reason: "",
        notes: ""
    })

    async function getAppointments() {
        try {
            let myAppointments = await fetch(`${URL}/appointments`);
            myAppointments = await myAppointments.json();
            setAppointments(myAppointments);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAppointments();
    }, []);

    function handleChange(e) {
        setAppointmentsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/appointments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointmentsForm)
            })
            getAppointments();
            navigate(`/appointments`);
        } catch (err) {
            console.log(err);
        }
    }

    function goBack() {
        window.history.back();
    }

    return (
        <Container fluid>
            <h1 className='fs-1 fw-normal text-center my-5'>Add New Appointment</h1>
            <div className='d-flex justify-content-center mb-5'>
                <Card border="dark" className='text-center' id='card'>
                    <Form onSubmit={handleSumbit} className='mx-5'>
                        <Form.Group className="my-3">
                            <Form.Label className="fs-3 ms-4">Appointment <span className='text-danger'>*</span></Form.Label>
                            <Form.Control required name='nameOfAppointment' onChange={handleChange} as="textarea" type="text" placeholder="Cardiology Appointment" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3 ms-4">Provider Title <span className='text-danger'>*</span></Form.Label>
                            <Form.Control required name='title' onChange={handleChange} as="textarea" type="text" placeholder="Dr." className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3 ms-4">Provider Name <span className='text-danger'>*</span></Form.Label>
                            <Form.Control required name='nameOfProvider' onChange={handleChange} as="textarea" type="text" placeholder="Julia Brown" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Specialty</Form.Label>
                            <Form.Control name='specialty' onChange={handleChange} as="textarea" type="text" placeholder="Cardiology" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3 ms-4">Address <span className='text-danger'>*</span></Form.Label>
                            <Form.Control required name='address' onChange={handleChange} as="textarea" type="text" placeholder="962 Flynn Street" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3 ms-4">Date <span className='text-danger'>*</span></Form.Label>
                            <Form.Control required name='date' onChange={handleChange} as="textarea" type="text" placeholder="06/23/2020" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3 ms-4">Time <span className='text-danger'>*</span></Form.Label>
                            <Form.Control required name='time' onChange={handleChange} as="textarea" type="text" placeholder="2:30 pm" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Reason</Form.Label>
                            <Form.Control name='reason' onChange={handleChange} as="textarea" type="text" placeholder="Chest Pain" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Notes</Form.Label>
                            <Form.Control name='notes' onChange={handleChange} as="textarea" type="text" placeholder="I need to mention both of my parents have had heart attacks." className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Actions</Form.Label>
                            <div>
                                <button type="submit" className="text-white fs-5 fw-light me-3 mb-3 px-3 py-1 rounded-3" id="new-submit-link">Submit</button>
                                <button type="button" className="text-white fs-5 fw-light ms-4 mb-3 px-3 py-1 rounded-3" id="new-cancel-link" onClick={goBack}>Cancel</button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        </Container >
    )
}

export default AppointmentsNew;