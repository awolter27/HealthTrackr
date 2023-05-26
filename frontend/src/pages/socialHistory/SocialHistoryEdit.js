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

        const defaultSettings = {
            education: {
                location: "N/A",
                degree: "N/A",
                startDate: "N/A",
                endDate: "N/A"
            },
            occupation: {
                title: "N/A",
                employer: "N/A",
                startDate: "N/A",
                endDate: "N/A"
            },
            maritalStatus: "N/A",
            children: 0,
            diet: "N/A",
            exercise: {
                type: "N/A",
                duration: 0,
                frequency: 0
            },
            sleep: 0,
            tobacco: {
                current: "N/A",
                past: "N/A",
                type: "N/A",
                amount: 0,
                startDate: "N/A",
                quitDate: "N/A"
            },
            alcohol: {
                current: "N/A",
                past: "N/A",
                type: "N/A",
                amount: 0,
                startDate: "N/A",
                quitDate: "N/A"
            },
            substances: {
                current: "N/A",
                past: "N/A",
                type: "N/A",
                route: "N/A",
                amount: 0,
                startDate: "N/A",
                quitDate: "N/A"
            },
            notes: "None"
        }

        let updatedValue = value;

        if (value === "") {
            const defaultValue = getDefaultValue(name, defaultSettings);
            updatedValue = defaultValue;
        }

        if (nestedKeys.length > 1) {
            setSocialHistory((currentState) => {
                const updatedSocialHistory = { ...currentState };
                let currentLevel = updatedSocialHistory;
                for (let i = 0; i < nestedKeys.length - 1; i++) {
                    currentLevel = currentLevel[nestedKeys[i]];
                }
                currentLevel[nestedKeys[nestedKeys.length - 1]] = updatedValue;
                return updatedSocialHistory;
            });
        } else {
            setSocialHistory((currentState) => ({
                ...currentState,
                [name]: updatedValue,
            }));
        }
    }

    function getDefaultValue(fieldName, defaultSettings) {
        const keys = fieldName.split('.');
        let defaultSetting = defaultSettings;
        for (const key of keys) {
            defaultSetting = defaultSetting[key];
            if (defaultSetting === undefined) {
                return "";
            }
        }
        return defaultSetting;
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
                                <Form.Control name="education.location" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.education.location} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Degree</Form.Label>
                                <Form.Control name="education.degree" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.education.degree} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="education.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.education.startDate} />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">End Date</Form.Label>
                                <Form.Control name="education.endDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.education.endDate} />
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Occupation</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Title</Form.Label>
                                <Form.Control name="occupation.title" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.occupation.title} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Employer</Form.Label>
                                <Form.Control name="occupation.employer" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.occupation.employer} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="occupation.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.occupation.startDate} />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-2">
                                <Form.Label className="fs-4">End Date</Form.Label>
                                <Form.Control name="occupation.endDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.occupation.endDate} />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Marital Status</Card.Header>
                                <Form.Control name="maritalStatus" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.maritalStatus} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Children</Card.Header>
                                <Form.Control name="children" onChange={handleChange} as="input" type="number" className="fs-5 fw-light pb-5 text-center" value={socialHistory.children} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Diet</Card.Header>
                                <Form.Control name="diet" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.diet} />
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Exercise</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="exercise.type" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.exercise.type} />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label className="fs-4">Duration</Form.Label>
                                <Form.Control name="exercise.duration" onChange={handleChange} as="input" type="number" className="fs-5 fw-light pb-5 text-center" value={socialHistory.exercise.duration} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Frequency</Form.Label>
                                <Form.Control name="exercise.frequency" onChange={handleChange} as="input" type="number" className="fs-5 fw-light pb-5 text-center" value={socialHistory.exercise.frequency} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Sleep</Card.Header>
                                <Form.Control name="sleep" onChange={handleChange} as="input" type="number" className="fs-5 fw-light pb-5 text-center" value={socialHistory.sleep} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Tobacco</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="tobacco.current" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.tobacco.current} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="tobacco.past" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.tobacco.past} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="tobacco.type" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.tobacco.type} />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="tobacco.amount" onChange={handleChange} as="input" type="number" className="fs-5 fw-light pb-5 text-center" value={socialHistory.tobacco.amount} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="tobacco.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.tobacco.startDate} />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="tobacco.quitDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.tobacco.quitDate} />
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Alcohol</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="alcohol.current" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.alcohol.current} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="alcohol.past" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.alcohol.past} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="alcohol.type" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.alcohol.type} />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="alcohol.amount" onChange={handleChange} as="input" type="number" className="fs-5 fw-light pb-5 text-center" value={socialHistory.alcohol.amount} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="alcohol.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.alcohol.startDate} />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="alcohol.quitDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.alcohol.quitDate} />
                            </Form.Group>
                            <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Substances</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="substances.current" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.substances.current} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="substances.past" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.substances.past} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="substances.type" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.substances.type} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Route</Form.Label>
                                <Form.Control name="substances.route" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.substances.route} />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="substances.amount" onChange={handleChange} as="input" type="number" className="fs-5 fw-light pb-5 text-center" value={socialHistory.substances.amount} />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="substances.startDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.substances.startDate} />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="substances.quitDate" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.substances.quitDate} />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className='fs-3 mb-4 border-bottom border-top border-dark rounded-1' id='card-header'>Notes</Card.Header>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={socialHistory.notes} />
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