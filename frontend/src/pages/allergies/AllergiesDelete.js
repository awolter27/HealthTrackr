import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import { useEffect } from "react";

function AllergiesDelete({ allergy, getAllergy, getAllergies, URL, id, goBack }) {
    async function deleteMyAllergy() {
        try {
            await fetch(`${URL}/allergies/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } catch (err) {
            console.log(err);
        }
        getAllergies();
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal py-5 ms-sm-3">Delete Allergy</h1>
                <div className="d-flex justify-content-center">
                    <Card border="dark" className="text-center mb-5" id="card">
                        <Card.Header className="fs-3" id="card-header">{allergy.name}</Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4">Reaction</Card.Title>
                            <Card.Text className="fs-5 fw-light">{allergy.reaction}</Card.Text>
                            <Card.Title className="fs-4">Notes</Card.Title>
                            <Card.Text className="fs-5 fw-light">{allergy.notes}</Card.Text>
                            <Card.Title className="fs-4">Actions</Card.Title>
                            <div className="d-flex justify-content-center">
                                <button type="button" onClick={deleteMyAllergy} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1">Delete</button>
                                <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1">Cancel</button>
                            </div>
                        </Card.Body>
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

export default AllergiesDelete;