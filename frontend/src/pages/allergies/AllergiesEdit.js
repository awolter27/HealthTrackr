import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function AllergiesEdit({ getAllergies, URL, navigate, goBack }) {
    const { id } = useParams();

    const [allergy, setAllergy] = useState(null);

    async function getAllergy() {
        try {
            let myAllergy = await fetch(`${URL}/allergies/${id}`);
            myAllergy = await myAllergy.json();
            setAllergy(myAllergy);
        } catch (err) {
            console.log(err);
        }
    };

    function handleChange(e) {
        if (e.target.name === "notes" && e.target.value === "") {
            setAllergy((currentState) => ({
                ...currentState,
                notes: "None"
            }));
        } else {
            setAllergy((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value
            }));
        }
    };

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
            navigate(`/allergies`);
        } catch (err) {
            console.log(err);
        }
        getAllergies();
    };

    function requiredInput() {
        if (allergy.name && allergy.reaction) {
            return true;
        } else {
            return false;
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Edit Allergy</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Allergy <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={allergy.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Reaction <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="reaction" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={allergy.reaction} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={allergy.notes} />
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
        getAllergy();
    }, []);

    return (
        <>
            {allergy ? loaded() : <Loading />}
        </>
    );
};

export default AllergiesEdit;