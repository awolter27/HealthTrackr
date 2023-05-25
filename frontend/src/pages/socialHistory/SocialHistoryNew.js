import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function SocialHistoryNew() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [socialHistory, setSocialHistory] = useState([]);

    const [socialHistoryForm, setSocialHistoryForm] = useState({
        education: {
            location: "",
            degree: "",
            startDate: "",
            endDate: ""
        },
        occupation: {
            title: "",
            employer: "",
            startDate: "",
            endDate: ""
        },
        maritalStatus: "",
        children: 0,
        diet: "",
        exercise: {
            type: "",
            duration: 0,
            frequency: 0
        },
        sleep: 0,
        tobacco: {
            current: "",
            past: "",
            type: "",
            amount: 0,
            startDate: "",
            quitDate: ""
        },
        alcohol: {
            current: "",
            past: "",
            type: "",
            amount: 0,
            startDate: "",
            quitDate: ""
        },
        substances: {
            current: "",
            past: "",
            type: "",
            route: "",
            amount: 0,
            startDate: "",
            quitDate: ""
        },
        notes: ""
    })

    const navigate = useNavigate();

    async function getSocialHistory() {
        try {
            let mySocialHistory = await fetch(`${URL}/socialhistory`);
            mySocialHistory = await mySocialHistory.json();
            setSocialHistory(mySocialHistory);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        setSocialHistoryForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/socialhistory`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(socialHistoryForm)
            })
            getSocialHistory();
            navigate(`/socialhistory`);
        } catch (err) {
            console.log(err);
        }
    }

    function goBack() {
        window.history.back();
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Add New Social History</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Form onSubmit={handleSumbit} className='mx-5'>
                        <Card border="dark" className='text-center' id='card'>
                            <Card.Header className='fs-3 border-bottom border-dark rounded-1' id='card-header'>Education</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Location</Form.Label>
                                <Form.Control name="education.location" onChange={handleChange} as="textarea" type="text" placeholder="Butler University" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Degree</Form.Label>
                                <Form.Control name="education.degree" onChange={handleChange} as="textarea" type="text" placeholder="Bachelor of Science in Health Sciences" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="education.startDate" onChange={handleChange} as="textarea" type="text" placeholder="08/01/1988" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">End Date</Form.Label>
                                <Form.Control name="education.endDate" onChange={handleChange} as="textarea" type="text" placeholder="05/01/1992" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Occupation</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Title</Form.Label>
                                <Form.Control name="occupation.title" onChange={handleChange} as="textarea" type="text" placeholder="Chemist" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Employer</Form.Label>
                                <Form.Control name="occupation.employer" onChange={handleChange} as="textarea" type="text" placeholder="Eli Lilly" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="occupation.startDate" onChange={handleChange} as="textarea" type="text" placeholder="08/01/1993" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-2">
                                <Form.Label className="fs-4">End Date</Form.Label>
                                <Form.Control name="occupation.endDate" onChange={handleChange} as="textarea" type="text" placeholder="Current" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Marital Status</Card.Header>
                                <Form.Control name="maritalStatus" onChange={handleChange} as="textarea" type="text" placeholder="Married" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Children</Card.Header>
                                <Form.Control name="children" onChange={handleChange} as="textarea" type="number" placeholder="3" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Diet</Card.Header>
                                <Form.Control name="diet" onChange={handleChange} as="textarea" type="text" placeholder="Poor" className="fs-5 mb-3 fw-light text-center" />
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Exercise</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="exercise.type" onChange={handleChange} as="textarea" type="text" placeholder="Cycling" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label className="fs-4">Duration</Form.Label>
                                <Form.Control name="exercise.duration" onChange={handleChange} as="textarea" type="number" placeholder="15" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Frequency</Form.Label>
                                <Form.Control name="exercise.frequency" onChange={handleChange} as="textarea" type="number" placeholder="5" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Sleep</Card.Header>
                                <Form.Control name="sleep" onChange={handleChange} as="textarea" type="number" placeholder="6" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Tobacco</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="tobacco.current" onChange={handleChange} as="textarea" type="text" placeholder="True" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="tobacco.past" onChange={handleChange} as="textarea" type="text" placeholder="False" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="tobacco.type" onChange={handleChange} as="textarea" type="text" placeholder="Cigars" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="tobacco.amount" onChange={handleChange} as="textarea" type="number" placeholder="1" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="tobacco.startDate" onChange={handleChange} as="textarea" type="text" placeholder="02/12/1999" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="tobacco.quitDate" onChange={handleChange} as="textarea" type="text" placeholder="Current" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Alcohol</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="alcohol.current" onChange={handleChange} as="textarea" type="text" placeholder="True" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="alcohol.past" onChange={handleChange} as="textarea" type="text" placeholder="False" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="alcohol.type" onChange={handleChange} as="textarea" type="text" placeholder="Wine" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="alcohol.amount" onChange={handleChange} as="textarea" type="number" placeholder="5" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="alcohol.startDate" onChange={handleChange} as="textarea" type="text" placeholder="06/30/1979" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="alcohol.quitDate" onChange={handleChange} as="textarea" type="text" placeholder="Current" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Substances</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="substances.current" onChange={handleChange} as="textarea" type="text" placeholder="False" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="substances.past" onChange={handleChange} as="textarea" type="text" placeholder="True" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="substances.type" onChange={handleChange} as="textarea" type="text" placeholder="Bath Salts" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Route</Form.Label>
                                <Form.Control name="substances.route" onChange={handleChange} as="textarea" type="text" placeholder="IV" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="substances.amount" onChange={handleChange} as="textarea" type="number" placeholder="10" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="substances.startDate" onChange={handleChange} as="textarea" type="text" placeholder="10/19/2004" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="substances.quitDate" onChange={handleChange} as="textarea" type="text" placeholder="10/20/2004" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Notes</Card.Header>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="I tried bath salts once." className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Card.Header className="fs-3 border-bottom border-top border-dark rounded-1" id='card-header'>Actions</Card.Header>
                                <div className='d-flex justify-content-center mt-2'>
                                    <button type="submit" className="btn btn-success text-white fs-5 fw-light me-4 mt-3 px-3 py-1 border border-dark rounded-3">Submit</button>
                                    <button type="button" className="btn btn-secondary text-white fs-5 fw-light ms-4 mt-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Cancel</button>
                                </div>
                            </Form.Group>
                        </Card>
                    </Form>
                </div>
            </Container >
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    useEffect(() => {
        getSocialHistory();
    }, []);

    return (
        <>
            {socialHistory ? loaded() : loading()}
        </>
    )
}

export default SocialHistoryNew;