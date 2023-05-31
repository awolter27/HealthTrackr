import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function CareTeamEdit({ getCareTeam, URL, navigate, goBack }) {
    const { id } = useParams();

    const [careTeam, setCareTeam] = useState(null);

    async function getCareTeam() {
        try {
            let myCareTeam = await fetch(`${URL}/careteam/${id}`);
            myCareTeam = await myCareTeam.json();
            setCareTeam(myCareTeam);
        } catch (err) {
            console.log(err);
        }
    };

    function handleChange(e) {
        if (e.target.name === "address" && e.target.value === "") {
            setCareTeam((currentState) => ({
                ...currentState,
                address: "N/A"
            }));
        } else if (e.target.name === "phoneNumber" && e.target.value === "") {
            setCareTeam((currentState) => ({
                ...currentState,
                phoneNumber: "N/A"
            }));
        } else if (e.target.name === "email" && e.target.value === "") {
            setCareTeam((currentState) => ({
                ...currentState,
                email: "N/A"
            }));
        } else if (e.target.name === "lastAppointment" && e.target.value === "") {
            setCareTeam((currentState) => ({
                ...currentState,
                lastAppointment: "N/A"
            }));
        } else if (e.target.name === "nextAppointment" && e.target.value === "") {
            setCareTeam((currentState) => ({
                ...currentState,
                nextAppointment: "N/A"
            }));
        } else if (e.target.name === "notes" && e.target.value === "") {
            setCareTeam((currentState) => ({
                ...currentState,
                notes: "None"
            }));
        } else {
            setCareTeam((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value
            }));
        }
    };

    async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch(`${URL}/careteam/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(careTeam)
            });
            navigate(`/careteam`);
        } catch (err) {
            console.log(err);
        }
        getCareTeam();
    };

    function requiredInput() {
        if (careTeam.title && careTeam.name && careTeam.specialty) {
            return true;
        } else {
            return false;
        }
    };

    function loaded() {
        return (
            <Container fluid>
                <h1 className="text-center fs-1 fw-normal my-5">Edit Care Team</h1>
                <div className="d-flex justify-content-center mb-5">
                    <Card border="dark" className="text-center" id="card">
                        <Form onSubmit={handleSumbit} className="mx-5">
                            <Form.Group className="my-3">
                                <Form.Label className="fs-3 ms-4">Provider Title <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="title" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={careTeam.title} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Provider Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="name" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={careTeam.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 ms-4">Specialty <span className="text-danger">*</span></Form.Label>
                                <Form.Control required name="specialty" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={careTeam.specialty} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Address</Form.Label>
                                <Form.Control name="address" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={careTeam.address} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Phone Number</Form.Label>
                                <Form.Control name="phoneNumber" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={careTeam.phoneNumber} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Email</Form.Label>
                                <Form.Control name="email" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={careTeam.email} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Last Appointment</Form.Label>
                                <Form.Control name="lastAppointment" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={careTeam.lastAppointment} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Next Appointment</Form.Label>
                                <Form.Control name="nextAppointment" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={careTeam.nextAppointment} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Notes</Form.Label>
                                <Form.Control name="notes" onChange={handleChange} as="textarea" type="text" className="text-center fs-5 fw-light" value={careTeam.notes} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3">Actions</Form.Label>
                                <div>
                                    <button type="submit" disabled={!requiredInput()} className="btn btn-success border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 me-3 mb-3">Edit</button>
                                    <button type="button" className="btn btn-secondary border border-dark rounded-3 text-white fs-5 fw-light px-3 py-1 ms-3 mb-3" onClick={goBack}>Cancel</button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </Container>
        );
    };

    useEffect(() => {
        getCareTeam();
    }, []);

    return (
        <>
            {careTeam ? loaded() : <Loading />}
        </>
    );
};

export default CareTeamEdit;