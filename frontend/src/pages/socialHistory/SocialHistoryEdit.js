import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function SocialHistoryEdit() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [socialHistory, setSocialHistory] = useState(null);

    const { id } = useParams();

    async function getSocialHistory() {
        try {
            let mySocialHistory = await fetch(`${URL}/socialhistory/${id}`);
            mySocialHistory = await mySocialHistory.json();
            setSocialHistory(mySocialHistory);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        const nestedKeys = name.split('.');
        if (nestedKeys.length > 1) {
            let updatedValue = value;
            const updatedSocialHistory = { ...socialHistory };
            let currentLevel = updatedSocialHistory;
            for (let i = 0; i < nestedKeys.length - 1; i++) {
                currentLevel = currentLevel[nestedKeys[i]];
            }
            currentLevel[nestedKeys[nestedKeys.length - 1]] = updatedValue;
            setSocialHistory(updatedSocialHistory);
        } else {
            setSocialHistory((currentState) => ({
                ...currentState,
                [name]: value
            }));
        }
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/socialhistory/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(socialHistory)
            });
        } catch (err) {
            console.log(err);
        }
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Edit Social History</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Form onSubmit={handleSumbit} className='mx-5'>
                        <Card border="dark" className='text-center' id='card'>
                            <Card.Header className='fs-3 border-bottom border-dark rounded-1' id='card-header'>Education</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Location</Form.Label>
                                <Form.Control name="education.location" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.education.location}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Degree</Form.Label>
                                <Form.Control name="education.degree" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.education.degree}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="education.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.education.startDate}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">End Date</Form.Label>
                                <Form.Control name="education.endDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.education.endDate}</Form.Control>
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Occupation</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Title</Form.Label>
                                <Form.Control name="occupation.title" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.occupation.title}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Employer</Form.Label>
                                <Form.Control name="occupation.employer" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.occupation.employer}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="occupation.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.occupation.startDate}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-2">
                                <Form.Label className="fs-4">End Date</Form.Label>
                                <Form.Control name="occupation.endDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.occupation.endDate}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Marital Status</Card.Header>
                                <Form.Control name="maritalStatus" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.maritalStatus}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Children</Card.Header>
                                <Form.Control name="children" onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center">{socialHistory.children}</Form.Control>
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Diet</Card.Header>
                                <Form.Control name="diet" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.diet}</Form.Control>
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Exercise</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="exercise.type" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.exercise.type}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label className="fs-4">Duration</Form.Label>
                                <Form.Control name="exercise.duration" onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center">{socialHistory.exercise.duration}</Form.Control>
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Frequency</Form.Label>
                                <Form.Control name="exercise.frequency" onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center">{socialHistory.exercise.frequency}</Form.Control>
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Sleep</Card.Header>
                                <Form.Control name="sleep" onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center">{socialHistory.sleep}</Form.Control>
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Tobacco</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="tobacco.current" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.tobacco.current}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="tobacco.past" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.tobacco.past}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="tobacco.type" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.tobacco.type}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="tobacco.amount" onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center">{socialHistory.tobacco.amount}</Form.Control>
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="tobacco.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.tobacco.startDate}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="tobacco.quitDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.tobacco.quitDate}</Form.Control>
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Alcohol</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="alcohol.current" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.alcohol.current}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="alcohol.past" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.alcohol.past}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="alcohol.type" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.alcohol.type}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="alcohol.amount" onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center">{socialHistory.alcohol.amount}</Form.Control>
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="alcohol.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.alcohol.startDate}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="alcohol.quitDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.alcohol.quitDate}</Form.Control>
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Substances</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="substances.current" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.substances.current}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="substances.past" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.substances.past}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="substances.type" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.substances.type}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Route</Form.Label>
                                <Form.Control name="substances.route" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.substances.route}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="substances.amount" onChange={handleChange} as="textarea" type="number" className="fs-5 fw-light text-center">{socialHistory.substances.amount}</Form.Control>
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="substances.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.substances.startDate}</Form.Control>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="substances.quitDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center"></Form.Control>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Notes</Card.Header>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center">{socialHistory.substances.quitDate}</Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Card.Header className="fs-3 border-bottom border-top border-dark rounded-1" id='card-header'>Actions</Card.Header>
                                <div className='d-flex justify-content-center mt-2'>
                                    <button type="submit" className="btn btn-success text-white fs-5 fw-light me-4 mt-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Edit</button>
                                    <button type="button" className="btn btn-secondary text-white fs-5 fw-light ms-4 mt-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Cancel</button>
                                </div>
                            </Form.Group>
                        </Card>
                    </Form>
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
        getSocialHistory();
    }, []);

    return (
        <>
            {socialHistory ? loaded() : loading()}
        </>
    )
}

export default SocialHistoryEdit;