import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function VaccinationsEdit({ getVaccinations, URL, navigate, goBack }) {
    const { id } = useParams();

    const [vaccination, setVaccination] = useState(null);

    async function getVaccination() {
        try {
            let myVaccination = await fetch(`${URL}/vaccinations/${id}`);
            myVaccination = await myVaccination.json();
            setVaccination(myVaccination);
        } catch (err) {
            console.log(err);
        }
    };

    function handleChange(e) {
        if (e.target.name === "manufacturer" && e.target.value === "") {
            setVaccination((currentState) => ({
                ...currentState,
                manufacturer: "N/A"
            }));
        } else if (e.target.name === "lotNumber" && e.target.value === "") {
            setVaccination((currentState) => ({
                ...currentState,
                lotNumber: "N/A"
            }));
        } else if (e.target.name === "notes" && e.target.value === "") {
            setVaccination((currentState) => ({
                ...currentState,
                notes: "None"
            }));
        } else {
            setVaccination((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value
            }));
        }
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/vaccinations/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(vaccination)
            });
            navigate(`/vaccinations`);
        } catch (err) {
            console.log(err);
        }
        getVaccinations();
    };

    function requiredInput() {
        if (vaccination.name && vaccination.date) {
            return true;
        } else {
            return false;
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Edit Vaccination</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Vaccination <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={vaccination.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Manufacturer</Form.Label>
                                <Form.Control name="manufacturer" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={vaccination.manufacturer} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Lot Number</Form.Label>
                                <Form.Control name="lotNumber" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={vaccination.lotNumber} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Date <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="date" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={vaccination.date} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={vaccination.notes} />
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
        getVaccination();
    }, []);

    return (
        <>
            {vaccination ? loaded() : <Loading />}
        </>
    );
};

export default VaccinationsEdit;