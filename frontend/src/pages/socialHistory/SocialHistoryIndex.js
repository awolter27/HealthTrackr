import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SocialHistoryIndex() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [socialHistory, setSocialHistory] = useState([]);

    async function getSocialHistory() {
        try {
            let mySocialHistory = await fetch(`${URL}/socialhistory`);
            mySocialHistory = await mySocialHistory.json();
            setSocialHistory(mySocialHistory);
        } catch (err) {
            console.log(err);
        }
    }

    function loaded(socialHistory) {
        return (
            <Container fluid>
                <Row className='py-5 justify-content-end'>
                    <Col sm={4} className='text-center'>
                        <h1 className='fs-1 fw-normal ms-sm-3'>Social History</h1>
                    </Col>
                    <Col sm={4} className='text-center text-sm-end pe-sm-3'>
                        <Link to={'/socialhistory/new'}>
                            <button className='text-white fs-5 fw-light px-3 py-1 rounded-3' id='index-new-link'>Add Social History</button>
                        </Link>
                    </Col>
                </Row>
                {socialHistory.map((socialHistory, idx) => {
                    return (
                        <div className='d-flex justify-content-center mb-5'>
                            <Card key={idx} border="dark" className='text-center' id='card'>
                                <Card.Header className='fs-3 border-bottom border-dark rounded-1' id='card-header'>Education</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Location</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.education.location}</Card.Text>
                                    <Card.Title className='fs-4'>Degree</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.education.degree}</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.education.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>End Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.education.endDate}</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Occupation</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Title</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.occupation.title}</Card.Text>
                                    <Card.Title className='fs-4'>Employer</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.occupation.employer}</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.occupation.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>End Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.occupation.endDate}</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Marital Status</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.maritalStatus}</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Children</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.children} Children</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Diet</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.diet}</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Exercise</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Type</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.exercise.type}</Card.Text>
                                    <Card.Title className='fs-4'>Duration</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.exercise.duration} minutes</Card.Text>
                                    <Card.Title className='fs-4'>Frequency</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.exercise.frequency} days per week</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Sleep</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.sleep} hours per night</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Tobacco</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Current</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.tobacco.current}</Card.Text>
                                    <Card.Title className='fs-4'>Past</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.tobacco.past}</Card.Text>
                                    <Card.Title className='fs-4'>Type</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.tobacco.type}</Card.Text>
                                    <Card.Title className='fs-4'>Amount</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.tobacco.amount} pack(s) per day</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.tobacco.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>Quit Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.tobacco.quitDate}</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Alcohol</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Current</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.alcohol.current}</Card.Text>
                                    <Card.Title className='fs-4'>Past</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.alcohol.past}</Card.Text>
                                    <Card.Title className='fs-4'>Type</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.alcohol.type}</Card.Text>
                                    <Card.Title className='fs-4'>Amount</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.alcohol.amount} drink(s) per week</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.alcohol.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>Quit Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.alcohol.quitDate}</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Substances</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Current</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.substances.current}</Card.Text>
                                    <Card.Title className='fs-4'>Past</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.substances.past}</Card.Text>
                                    <Card.Title className='fs-4'>Type</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.substances.type}</Card.Text>
                                    <Card.Title className='fs-4'>Route</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.substances.route}</Card.Text>
                                    <Card.Title className='fs-4'>Amount</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.substances.amount} time(s) per day</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.substances.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>Quit Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.substances.quitDate}</Card.Text>
                                </Card.Body>
                                <Card.Header className='fs-3 border-bottom border-top border-dark rounded-1' id='card-header'>Notes</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialHistory.notes}</Card.Text>
                                </Card.Body>
                                <Card.Header className="fs-3 border-bottom border-top border-dark rounded-1" id='card-header'>Actions</Card.Header>
                                <div className='d-flex justify-content-center'>
                                    <Link className='me-3' to={`/socialhistory/${socialHistory._id}/edit`}>
                                        <button type="button" className='text-white fs-5 fw-light me-3 my-3 px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                    </Link>
                                    <Link className='ms-3' to={`/socialhistory/${socialHistory._id}/delete`}>
                                        <button type="button" className='text-white fs-5 fw-light ms-3 my-3 px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    )
                })}
            </Container>
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    useEffect(() => {
        getSocialHistory();
    }, []);

    return (
        <>
            {socialHistory.length ? loaded(socialHistory) : loading()}
        </>
    )
}

export default SocialHistoryIndex;