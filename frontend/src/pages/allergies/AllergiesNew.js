import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function AllergiesNew() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const navigate = useNavigate();

    const [allergies, setAllergies] = useState([]);

    const [allergiesForm, setAllergiesForm] = useState({
        name: "",
        reaction: "",
        notes: ""
    })

    async function getAllergies() {
        try {
            let myAllergies = await fetch(`${URL}/allergies`);
            myAllergies = await myAllergies.json();
            setAllergies(myAllergies);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllergies();
    }, []);

    function handleChange(e) {
        setAllergiesForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/allergies`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(allergiesForm)
            })
            getAllergies();
            navigate(`/allergies`);
        } catch (err) {
            console.log(err);
        }
    }

    function goBack() {
        window.history.back();
    }

    return (
        <Container fluid>
            <h1 className='fs-1 fw-normal text-center my-5'>Add New Allergy </h1>
            <div className='d-flex justify-content-center mb-5'>
                <Card border="dark" className='text-center' id='card'>
                    <Form onSubmit={handleSumbit} className='mx-5'>
                        <Form.Group className="my-3">
                            <Form.Label className="fs-3">Allergy</Form.Label>
                            <Form.Control as="textarea" type="text" placeholder="Sulfonamides" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Reaction</Form.Label>
                            <Form.Control as="textarea" type="text" placeholder="Rhinitis" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Notes</Form.Label>
                            <Form.Control as="textarea" type="text" placeholder="I was told I was allergic to sulfonamides by my parents" className="fs-5 fw-light text-center" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fs-3">Actions</Form.Label>
                            <div>
                                <button type="submit" className="text-white fs-5 fw-light me-3 mb-3 px-3 py-1 rounded-3" id="new-submit-link">Submit</button>
                                <button type="button" className="text-white fs-5 fw-light ms-3 mb-3 px-3 py-1 rounded-3" id="new-cancel-link" onClick={goBack}>Cancel</button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        </Container >
    )
}

export default AllergiesNew;