import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function CareTeamNew() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const navigate = useNavigate();

    const [careTeam, setCareTeam] = useState([]);

    const [careTeamForm, setCareTeamForm] = useState({
        title: "",
        name: "",
        specialty: "",
        address: "",
        phoneNumber: "",
        email: "",
        lastAppointment: "",
        nextAppointment: "",
        notes: ""
    })

    async function getCareTeam() {
        try {
            let myCareTeam = await fetch(`${URL}/careteam`);
            myCareTeam = await myCareTeam.json();
            setCareTeam(myCareTeam);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCareTeam();
    }, []);

    function handleChange(e) {
        setCareTeamForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/careteam`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(careTeamForm)
            })
            getCareTeam();
            navigate(`/careteam`);
        } catch (err) {
            console.log(err);
        }
    }

    function goBack() {
        window.history.back();
    }

    return (
        <Container fluid>
            <h1 className='fs-1 fw-normal text-center my-5'>Add New Provider</h1>
            <div className='d-flex justify-content-center mb-5'>
                <Card border="dark" className='text-center' id='card'>
                    <Form onSubmit={handleSumbit} className='mx-5'>
                        <Form.Group className="my-3">
                            <Form.Label className="fs-3">Provider Title</Form.Label>
                            <Form.Control required name='title' onChange={handleChange} as="textarea" type="text" placeholder="Dr." className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Provider Name</Form.Label>
                            <Form.Control required name='name' onChange={handleChange} as="textarea" type="text" placeholder="Julia Brown" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Specialty</Form.Label>
                            <Form.Control required name='specialty' onChange={handleChange} as="textarea" type="text" placeholder="Cardiology" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Address</Form.Label>
                            <Form.Control name='address' onChange={handleChange} as="textarea" type="text" placeholder="962 Flynn Street" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Phone Number</Form.Label>
                            <Form.Control name='phoneNumber' onChange={handleChange} as="textarea" type="text" placeholder="440-968-7383" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Email</Form.Label>
                            <Form.Control name='email' onChange={handleChange} as="textarea" type="text" placeholder="julia.d.brown@montvilleregional.org" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Last Appointment</Form.Label>
                            <Form.Control name='lastAppointment' onChange={handleChange} as="textarea" type="text" placeholder="03/01/2021" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Next Appointment</Form.Label>
                            <Form.Control name='nextAppointment' onChange={handleChange} as="textarea" type="text" placeholder="09/30/2023" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Notes</Form.Label>
                            <Form.Control name='notes' onChange={handleChange} as="textarea" type="text" placeholder="I need to mention both of my parents have had heart attacks." className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Actions</Form.Label>
                            <div>
                                <button type="submit" className="text-white fs-5 fw-light me-3 mb-3 px-3 py-1 rounded-3" id="new-submit-link">Submit</button>
                                <button type="button" className="text-white fs-5 fw-light ms-3 mb-3 px-3 py-1 rounded-3" id="new-cancel-link" onClick={goBack}>Cancel</button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        </Container >
    )
}

export default CareTeamNew;