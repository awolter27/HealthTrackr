import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function CareTeamEdit() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [careTeam, setCareTeam] = useState(null);

    const { id } = useParams();

    async function getCareTeam() {
        try {
            let myCareTeam = await fetch(`${URL}/careteam/${id}`);
            myCareTeam = await myCareTeam.json();
            setCareTeam(myCareTeam);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        setCareTeam((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/careteam/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(careTeam)
            });
        } catch (err) {
            console.log(err);
        }
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Edit CareTeam</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Provider Title <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name='title' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{careTeam.title}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Provider Name <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name='name' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{careTeam.name}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Specialty <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name='specialty' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{careTeam.specialty}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Address</Form.Label>
                                <Form.Control name='address' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{careTeam.address}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Phone Number</Form.Label>
                                <Form.Control name='phoneNumber' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{careTeam.phoneNumber}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Email</Form.Label>
                                <Form.Control name='email' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{careTeam.email}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Last Appointment</Form.Label>
                                <Form.Control name='lastAppointment' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{careTeam.lastAppointment}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Next Appointment</Form.Label>
                                <Form.Control name='nextAppointment' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{careTeam.nextAppointment}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name='notes' onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{careTeam.notes}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" className="btn btn-success text-white fs-5 fw-light me-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Edit</button>
                                    <button type="button" className="btn btn-secondary text-white fs-5 fw-light ms-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </Container>
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    function goBack() {
        window.history.back();
    }

    useEffect(() => {
        getCareTeam();
    }, []);

    return (
        <>
            {careTeam ? loaded() : loading()}
        </>
    )
}

export default CareTeamEdit;