import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

function SocialHistoryNew({ socialHistory, getSocialHistory, URL, navigate, goBack }) {
    const [socialHistoryForm, setSocialHistoryForm] = useState({
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
    });

    function handleChange(e) {
        setSocialHistoryForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }));
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/socialhistory`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(socialHistoryForm)
            });
            getSocialHistory();
            navigate(`/socialhistory`);
        } catch (err) {
            console.log(err);
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="fs-1 fw-normal text-center my-5">Add New Social History</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Form onSubmit={handleSumbit} className="mx-5">
                        <Card border="dark" className="text-center" id="card">
                            <Card.Header className="border-bottom border-dark rounded-1 fs-3" id="card-header">Education</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Location</Form.Label>
                                <Form.Control name="education.location" onChange={handleChange} as="textarea" type="text" placeholder="Butler University" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Degree</Form.Label>
                                <Form.Control name="education.degree" onChange={handleChange} as="textarea" type="text" placeholder="Bachelor of Science in Health Sciences" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="education.startDate" onChange={handleChange} as="textarea" type="text" placeholder="08/01/1988" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">End Date</Form.Label>
                                <Form.Control name="education.endDate" onChange={handleChange} as="textarea" type="text" placeholder="05/01/1992" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Card.Header className="border-bottom border-dark rounded-1 fs-3" id="card-header">Occupation</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Title</Form.Label>
                                <Form.Control name="occupation.title" onChange={handleChange} as="textarea" type="text" placeholder="Chemist" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Employer</Form.Label>
                                <Form.Control name="occupation.employer" onChange={handleChange} as="textarea" type="text" placeholder="Eli Lilly" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="occupation.startDate" onChange={handleChange} as="textarea" type="text" placeholder="08/01/1993" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-2">
                                <Form.Label className="fs-4">End Date</Form.Label>
                                <Form.Control name="occupation.endDate" onChange={handleChange} as="textarea" type="text" placeholder="Current" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className="border-bottom border-top border-dark rounded-1 fs-3 mb-4" id="card-header">Marital Status</Card.Header>
                                <Form.Control name="maritalStatus" onChange={handleChange} as="textarea" type="text" placeholder="Married" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Card.Header className="border-bottom border-top border-dark rounded-1 fs-3 mb-4" id="card-header">Children</Card.Header>
                                <Form.Control name="children" onChange={handleChange} as="input" type="number" placeholder="3" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Card.Header className="border-bottom border-top border-dark rounded-1 fs-3 mb-4" id="card-header">Diet</Card.Header>
                                <Form.Control name="diet" onChange={handleChange} as="textarea" type="text" placeholder="Poor" className="text-center fw-light fs-5 mb-3" />
                            </Form.Group>
                            <Card.Header className="border-bottom border-dark rounded-1 fs-3" id="card-header">Exercise</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="exercise.type" onChange={handleChange} as="textarea" type="text" placeholder="Cycling" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label className="fs-4">Duration</Form.Label>
                                <Form.Control name="exercise.duration" onChange={handleChange} as="input" type="number" placeholder="15" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Frequency</Form.Label>
                                <Form.Control name="exercise.frequency" onChange={handleChange} as="input" type="number" placeholder="5" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className="border-bottom border-top border-dark rounded-1 fs-3 mb-4" id="card-header">Sleep</Card.Header>
                                <Form.Control name="sleep" onChange={handleChange} as="input" type="number" placeholder="6" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Card.Header className="border-bottom border-dark rounded-1 fs-3" id="card-header">Tobacco</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="tobacco.current" onChange={handleChange} as="textarea" type="text" placeholder="True" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="tobacco.past" onChange={handleChange} as="textarea" type="text" placeholder="False" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="tobacco.type" onChange={handleChange} as="textarea" type="text" placeholder="Cigars" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="tobacco.amount" onChange={handleChange} as="input" type="number" placeholder="1" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="tobacco.startDate" onChange={handleChange} as="textarea" type="text" placeholder="02/12/1999" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="tobacco.quitDate" onChange={handleChange} as="textarea" type="text" placeholder="Current" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Card.Header className="border-bottom border-dark rounded-1 fs-3" id="card-header">Alcohol</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="alcohol.current" onChange={handleChange} as="textarea" type="text" placeholder="True" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="alcohol.past" onChange={handleChange} as="textarea" type="text" placeholder="False" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="alcohol.type" onChange={handleChange} as="textarea" type="text" placeholder="Wine" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="alcohol.amount" onChange={handleChange} as="input" type="number" placeholder="5" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="alcohol.startDate" onChange={handleChange} as="textarea" type="text" placeholder="06/30/1979" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-4">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="alcohol.quitDate" onChange={handleChange} as="textarea" type="text" placeholder="Current" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Card.Header className="border-bottom border-dark rounded-1 fs-3" id="card-header">Substances</Card.Header>
                            <Form.Group className="mt-3">
                                <Form.Label className="fs-4">Current</Form.Label>
                                <Form.Control name="substances.current" onChange={handleChange} as="textarea" type="text" placeholder="False" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Past</Form.Label>
                                <Form.Control name="substances.past" onChange={handleChange} as="textarea" type="text" placeholder="True" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Type</Form.Label>
                                <Form.Control name="substances.type" onChange={handleChange} as="textarea" type="text" placeholder="Bath Salts" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Route</Form.Label>
                                <Form.Control name="substances.route" onChange={handleChange} as="textarea" type="text" placeholder="IV" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-1">
                                <Form.Label className="fs-4">Amount</Form.Label>
                                <Form.Control name="substances.amount" onChange={handleChange} as="input" type="number" placeholder="10" className="text-center fs-5 fw-light pb-5" />
                                <Form.Text className="text-muted">* You must enter a number</Form.Text>
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Start Date</Form.Label>
                                <Form.Control name="substances.startDate" onChange={handleChange} as="textarea" type="text" placeholder="10/19/2004" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-2">
                                <Form.Label className="fs-4">Quit Date</Form.Label>
                                <Form.Control name="substances.quitDate" onChange={handleChange} as="textarea" type="text" placeholder="10/20/2004" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="my-3">
                                <Card.Header className="border-bottom border-top border-dark rounded-1 fs-3 mb-4" id="card-header">Notes</Card.Header>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="I tried bath salts once." className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mt-2 mb-3">
                                <Card.Header className="border-bottom border-dark rounded-1 fs-3" id="card-header">Actions</Card.Header>
                                <div className="d-flex justify-content-center mt-3">
                                    <button type="submit" className="btn btn-success border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3">Submit</button>
                                    <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3">Cancel</button>
                                </div>
                            </Form.Group>
                        </Card>
                    </Form>
                </div>
            </Container >
        );
    };

    useEffect(() => {
        getSocialHistory();
    }, []);

    return (
        <>
            {socialHistory ? loaded() : <Loading />}
        </>
    );
};

export default SocialHistoryNew;