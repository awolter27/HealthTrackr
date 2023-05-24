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
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <h1 className='fs-2 mt-4 mb-1'>Education</h1>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Location</Form.Label>
                                <Form.Control name="education.location" onChange={handleChange} as="textarea" type="text" placeholder="Butler University" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Degree</Form.Label>
                                <Form.Control name="education.degree" onChange={handleChange} as="textarea" type="text" placeholder="Bachelor of Science in Health Sciences" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Start Date</Form.Label>
                                <Form.Control name="education.startDate" onChange={handleChange} as="textarea" type="text" placeholder="08/01/1988" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">End Date</Form.Label>
                                <Form.Control name="education.endDate" onChange={handleChange} as="textarea" type="text" placeholder="05/01/1992" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <h1 className='fs-2 mt-4 mb-1'>Occupation</h1>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Title</Form.Label>
                                <Form.Control name="occupation.title" onChange={handleChange} as="textarea" type="text" placeholder="Chemist" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Employer</Form.Label>
                                <Form.Control name="occupation.employer" onChange={handleChange} as="textarea" type="text" placeholder="Eli Lilly" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Start Date</Form.Label>
                                <Form.Control name="occupation.startDate" onChange={handleChange} as="textarea" type="text" placeholder="08/01/1993" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">End Date</Form.Label>
                                <Form.Control name="occupation.endDate" onChange={handleChange} as="textarea" type="text" placeholder="Current" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3">Marital Status</Form.Label>
                                <Form.Control name="maritalStatus" onChange={handleChange} as="textarea" type="text" placeholder="Married" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3">Children</Form.Label>
                                <Form.Control name="children" onChange={handleChange} as="textarea" type="number" placeholder="3" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3">Diet</Form.Label>
                                <Form.Control name="diet" onChange={handleChange} as="textarea" type="text" placeholder="Poor" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <h1 className='fs-2 mt-4 mb-1'>Exercise</h1>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Type</Form.Label>
                                <Form.Control name="exercise.type" onChange={handleChange} as="textarea" type="text" placeholder="Cycling" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Duration</Form.Label>
                                <Form.Control name="exercise.duration" onChange={handleChange} as="textarea" type="number" placeholder="15" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Frequency</Form.Label>
                                <Form.Control name="exercise.frequency" onChange={handleChange} as="textarea" type="number" placeholder="5" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3">Sleep</Form.Label>
                                <Form.Control name="sleep" onChange={handleChange} as="textarea" type="number" placeholder="6" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <h1 className='fs-2 mt-4 mb-1'>Tobacco</h1>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Current</Form.Label>
                                <Form.Control name="tobacco.current" onChange={handleChange} as="textarea" type="text" placeholder="True" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Past</Form.Label>
                                <Form.Control name="tobacco.past" onChange={handleChange} as="textarea" type="text" placeholder="False" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Type</Form.Label>
                                <Form.Control name="tobacco.type" onChange={handleChange} as="textarea" type="text" placeholder="Cigars" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Amount</Form.Label>
                                <Form.Control name="tobacco.amount" onChange={handleChange} as="textarea" type="number" placeholder="1" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Start Date</Form.Label>
                                <Form.Control name="tobacco.startDate" onChange={handleChange} as="textarea" type="text" placeholder="02/12/1999" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Quit Date</Form.Label>
                                <Form.Control name="tobacco.quitDate" onChange={handleChange} as="textarea" type="text" placeholder="Current" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <h1 className='fs-2 mt-4 mb-1'>Alcohol</h1>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Current</Form.Label>
                                <Form.Control name="alcohol.current" onChange={handleChange} as="textarea" type="text" placeholder="True" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Past</Form.Label>
                                <Form.Control name="alcohol.past" onChange={handleChange} as="textarea" type="text" placeholder="False" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Type</Form.Label>
                                <Form.Control name="alcohol.type" onChange={handleChange} as="textarea" type="text" placeholder="Wine" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Amount</Form.Label>
                                <Form.Control name="alcohol.amount" onChange={handleChange} as="textarea" type="number" placeholder="5" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Start Date</Form.Label>
                                <Form.Control name="alcohol.startDate" onChange={handleChange} as="textarea" type="text" placeholder="06/30/1979" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Quit Date</Form.Label>
                                <Form.Control name="alcohol.quitDate" onChange={handleChange} as="textarea" type="text" placeholder="Current" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <h1 className='fs-2 mt-4 mb-1'>Substances</h1>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Current</Form.Label>
                                <Form.Control name="substances.current" onChange={handleChange} as="textarea" type="text" placeholder="False" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Past</Form.Label>
                                <Form.Control name="substances.past" onChange={handleChange} as="textarea" type="text" placeholder="True" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Type</Form.Label>
                                <Form.Control name="substances.type" onChange={handleChange} as="textarea" type="text" placeholder="Bath Salts" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Route</Form.Label>
                                <Form.Control name="substances.route" onChange={handleChange} as="textarea" type="text" placeholder="IV" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Amount</Form.Label>
                                <Form.Control name="substances.amount" onChange={handleChange} as="textarea" type="number" placeholder="10" className="fs-5 fw-light text-center" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Start Date</Form.Label>
                                <Form.Control name="substances.startDate" onChange={handleChange} as="textarea" type="text" placeholder="10/19/2004" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 fw-light">Quit Date</Form.Label>
                                <Form.Control name="substances.quitDate" onChange={handleChange} as="textarea" type="text" placeholder="10/20/2004" className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="I tried bath salts once." className="fs-5 fw-light text-center" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" className="btn btn-success text-white fs-5 fw-light me-3 mb-3 px-3 py-1 border border-dark rounded-3">Submit</button>
                                    <button type="button" className="btn btn-secondary text-white fs-5 fw-light ms-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
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