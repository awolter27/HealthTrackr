import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function VaccinationsDelete({ getVaccinations, URL, navigate, goBack }) {
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

    async function deleteMyVaccination() {
        try {
            await fetch(`${URL}/vaccinations/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            navigate(`/vaccinations`);
        } catch (err) {
            console.log(err);
        }
        getVaccinations();
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal py-5 ms-sm-3">Delete Vaccination</h1>
                <div className="d-flex justify-content-center">
                    <Card border="dark" className="text-center mb-4" id="card">
                        <Card.Header className="fs-3" id="card-header">{vaccination.name}</Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4">Manufacturer</Card.Title>
                            <Card.Text className="fs-5 fw-light">{vaccination.manufacturer}</Card.Text>
                            <Card.Title className="fs-4">Lot Number</Card.Title>
                            <Card.Text className="fs-5 fw-light">#{vaccination.lotNumber}</Card.Text>
                            <Card.Title className="fs-4">Date Administered</Card.Title>
                            <Card.Text className="fs-5 fw-light">{vaccination.date}</Card.Text>
                            <Card.Title className="fs-4">Notes</Card.Title>
                            <Card.Text className="fs-5 fw-light">{vaccination.notes}</Card.Text>
                            <Card.Title className="fs-4">Actions</Card.Title>
                            <div className="d-flex justify-content-center">
                                <button type="button" onClick={deleteMyVaccination} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3">Delete</button>
                                <button type="button" onClick={goBack} className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3">Cancel</button>
                            </div>
                        </Card.Body>
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

export default VaccinationsDelete;