import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

function SurgeriesNew({ surgeries, getSurgeries, URL, navigate, goBack }) {
    const [surgeriesForm, setSurgeriesForm] = useState({
        name: "",
        location: "N/A",
        date: "",
        surgeon: "N/A",
        reason: "",
        notes: "None"
    });

    function handleChange(e) {
        setSurgeriesForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }));
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/surgeries`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(surgeriesForm)
            });
            getSurgeries();
            navigate(`/surgeries`);
        } catch (err) {
            console.log(err);
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Add New Surgery</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Surgery <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" placeholder="Tonsillectomy" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Location</Form.Label>
                                <Form.Control name="location" onChange={handleChange} as="textarea" type="text" placeholder="Luna Memorial Hospital" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Date <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="date" onChange={handleChange} as="textarea" type="text" placeholder="11/19/1970" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Surgeon</Form.Label>
                                <Form.Control name="surgeon" onChange={handleChange} as="textarea" type="text" placeholder="Dr. Benson Hanks" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Reason <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="reason" onChange={handleChange} as="textarea" type="text" placeholder="Tonsillitis" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="I had no complications." className="text-center fs-5 fw-light" />
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
        getSurgeries();
    }, []);

    return (
        <>
            {surgeries ? loaded() : <Loading />}
        </>
    );
};

export default SurgeriesNew;