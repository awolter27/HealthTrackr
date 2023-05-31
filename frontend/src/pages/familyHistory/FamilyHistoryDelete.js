import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function FamilyHistoryDelete({ getFamilyHistory, URL, navigate, goBack }) {
    const { id } = useParams();

    const [familyHistory, setFamilyHistory] = useState(null);

    async function getFamilyHistory() {
        try {
            let myFamilyHistory = await fetch(`${URL}/familyhistory/${id}`);
            myFamilyHistory = await myFamilyHistory.json();
            setFamilyHistory(myFamilyHistory);
        } catch (err) {
            console.log(err);
        }
    };

    async function deleteMyFamilyHistory() {
        try {
            await fetch(`${URL}/familyhistory/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            navigate(`/familyhistory`);
        } catch (err) {
            console.log(err);
        }
        getFamilyHistory();
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal py-5 ms-sm-3">Delete Family History</h1>
                <div className="d-flex justify-content-center">
                    <Card border="dark" className="text-center mb-5" id="card">
                        <Card.Header className="fs-3" id="card-header">{familyHistory.relationship}</Card.Header>
                        <Card.Body>
                            <Card.Title className="fs-4">Living</Card.Title>
                            <Card.Text className="fs-5 fw-light">{familyHistory.living.living}</Card.Text>
                            <Card.Title className="fs-4">Age</Card.Title>
                            <Card.Text className="fs-5 fw-light">{familyHistory.living.age} years old</Card.Text>
                            <Card.Title className="fs-4">Deceased</Card.Title>
                            <Card.Text className="fs-5 fw-light">{familyHistory.deceased.deceased}</Card.Text>
                            <Card.Title className="fs-4">Age At Death</Card.Title>
                            <Card.Text className="fs-5 fw-light">{familyHistory.deceased.ageAtDeath} years old</Card.Text>
                            <Card.Title className="fs-4">Health Condition</Card.Title>
                            <Card.Text className="fs-5 fw-light">{familyHistory.healthCondition}</Card.Text>
                            <Card.Title className="fs-4">Age At Diagnosis</Card.Title>
                            <Card.Text className="fs-5 fw-light">{familyHistory.ageOfDiagnosis} years old</Card.Text>
                            <Card.Title className="fs-4">Notes</Card.Title>
                            <Card.Text className="fs-5 fw-light">{familyHistory.notes}</Card.Text>
                            <Card.Title className="fs-4">Actions</Card.Title>
                            <div className="d-flex justify-content-center">
                                <button type="button" onClick={deleteMyFamilyHistory} className="btn btn-danger border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3">Delete</button>
                                <button onClick={goBack} type="button" className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3">Cancel</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        );
    };

    useEffect(() => {
        getFamilyHistory();
    }, []);

    return (
        <>
            {familyHistory ? loaded() : <Loading />}
        </>
    );
};

export default FamilyHistoryDelete;