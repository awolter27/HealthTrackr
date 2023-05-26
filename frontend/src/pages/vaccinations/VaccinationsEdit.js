import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function VaccinationsEdit() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [vaccination, setVaccination] = useState(null);

    const { id } = useParams();

    async function getVaccination() {
        try {
            let myVaccination = await fetch(`${URL}/vaccinations/${id}`);
            myVaccination = await myVaccination.json();
            setVaccination(myVaccination);
        } catch (err) {
            console.log(err);
        }
    }

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
    }

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
        } catch (err) {
            console.log(err);
        }
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Edit Vaccination</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Vaccination <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={vaccination.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Manufacturer</Form.Label>
                                <Form.Control name="manufacturer" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={vaccination.manufacturer} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Lot Number</Form.Label>
                                <Form.Control name="lotNumber" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={vaccination.lotNumber} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Date <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="date" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={vaccination.date} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={vaccination.notes} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" className="btn btn-success text-white fs-5 fw-light me-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Edit</button>
                                    <button type="button" className="btn btn-secondary text-white fs-5 fw-light ms-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
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
        getVaccination();
    }, []);

    return (
        <>
            {vaccination ? loaded() : loading()}
        </>
    )
}

export default VaccinationsEdit;