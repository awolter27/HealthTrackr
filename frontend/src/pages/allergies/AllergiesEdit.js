import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function AllergiesEdit() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [allergy, setAllergy] = useState(null);

    const { id } = useParams();

    async function getAllergy() {
        try {
            let myAllergy = await fetch(`${URL}/allergies/${id}`);
            myAllergy = await myAllergy.json();
            setAllergy(myAllergy);
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        if (e.target.name === "notes" && e.target.value === "") {
            setAllergy((currentState) => ({
                ...currentState,
                notes: "None"
            }))
        } else {
            setAllergy((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value
            }))
        }
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/allergies/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(allergy)
            });
        } catch (err) {
            console.log(err);
        }
    }

    function requiredInput() {
        if (allergy.name && allergy.reaction) {
            return true;
        } else {
            return false;
        }
    }

    function loaded() {
        return (
            <Container fluid>
                <h1 className='fs-1 fw-normal text-center my-5'>Edit Allergy</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <Card border="dark" className='text-center' id='card'>
                        <Form onSubmit={handleSumbit} className='mx-5'>
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Allergy <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={allergy.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Reaction <span className='text-danger'>*</span></Form.Label>
                                <Form.Control required name="reaction" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={allergy.reaction} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="fs-5 fw-light text-center" value={allergy.notes} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" disabled={!requiredInput()} className="btn btn-success text-white fs-5 fw-light me-3 mb-3 px-3 py-1 border border-dark rounded-3" onClick={goBack}>Edit</button>
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
        getAllergy();
    }, []);

    return (
        <>
            {allergy ? loaded() : loading()}
        </>
    )
}

export default AllergiesEdit;