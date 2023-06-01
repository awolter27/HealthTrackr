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

    // I have some version of the following code across all my edit pages because I want the index pages to be streamlined. So, if the user decides not to enter any information in the non-required fields, instead of having a header with a blank space beneath it, it will auto-populate to "N/A" (seen on other pages) or "None." 
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

    // I wrote this code to fix a glitch that happens in the edit routes. In my forms, I have required fields, which are enforced when adding a new entry. But, I found that if you go to edit an existing entry, you're able to delete the content from the required field. When you hit edit, nothing updates, but it still redirects the user back to the index page, which isn't great for user experience. So, I wrote some form of this code across all the edit pages to disable the button if the user doesn't answer all of the required fields.
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