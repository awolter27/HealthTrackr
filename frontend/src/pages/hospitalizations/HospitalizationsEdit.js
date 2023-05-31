import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function HospitalizationsEdit({ getHospitalizations, URL, navigate, goBack }) {
    const { id } = useParams();

    const [hospitalization, setHospitalization] = useState(null);

    async function getHospitalization() {
        try {
            let myHospitalization = await fetch(`${URL}/hospitalizations/${id}`);
            myHospitalization = await myHospitalization.json();
            setHospitalization(myHospitalization);
        } catch (err) {
            console.log(err);
        }
    };

    function handleChange(e) {
        if (e.target.name === "location" && e.target.value === "") {
            setHospitalization((currentState) => ({
                ...currentState,
                location: "N/A"
            }));
        } else if (e.target.name === "notes" && e.target.value === "") {
            setHospitalization((currentState) => ({
                ...currentState,
                notes: "None"
            }));
        } else {
            setHospitalization((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value
            }));
        }
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/hospitalizations/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(hospitalization)
            });
            navigate(`/hospitalizations`);
        } catch (err) {
            console.log(err);
        }
        getHospitalizations();
    };

    function requiredInput() {
        if (hospitalization.name && hospitalization.dates && hospitalization.reason) {
            return true;
        } else {
            return false;
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Edit Hospitalization</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Hospital <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={hospitalization.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Address</Form.Label>
                                <Form.Control name="location" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={hospitalization.location} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Dates <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="dates" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={hospitalization.dates} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Reason <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="reason" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={hospitalization.reason} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={hospitalization.notes} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" disabled={!requiredInput()} className="btn btn-success border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3 mb-3">Edit</button>
                                    <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3 mb-3">Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </Container>
        );
    };

    useEffect(() => {
        getHospitalization();
    }, []);

    return (
        <>
            {hospitalization ? loaded() : <Loading />}
        </>
    );
};

export default HospitalizationsEdit;