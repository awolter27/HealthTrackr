import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

function HospitalizationsNew({ hospitalizations, getHospitalizations, URL, navigate, goBack }) {
    const [hospitalizationsForm, setHospitalizationsForm] = useState({
        name: "",
        location: "N/A",
        dates: "",
        reason: "",
        notes: "None"
    });

    function handleChange(e) {
        setHospitalizationsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }));
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/hospitalizations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(hospitalizationsForm)
            });
            getHospitalizations();
            navigate(`/hospitalizations`);
        } catch (err) {
            console.log(err);
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Add New Hospitalization</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Hospital <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" placeholder="Montville Regional Hospital" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Address</Form.Label>
                                <Form.Control name="location" onChange={handleChange} as="textarea" type="text" placeholder="962 Flynn Street" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Dates <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="dates" onChange={handleChange} as="textarea" type="text" placeholder="09/05/2018 - 09/12/2018" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Reason <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="reason" onChange={handleChange} as="textarea" type="text" placeholder="Pneumonia" className="text-center fs-5 fw-light" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" placeholder="I was treated with IV antibiotics." className="text-center fs-5 fw-light" />
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
        getHospitalizations();
    }, []);

    return (
        <>
            {hospitalizations ? loaded() : <Loading />}
        </>
    );
};

export default HospitalizationsNew;