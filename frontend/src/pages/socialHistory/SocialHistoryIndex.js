import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SocialHistoryIndex() {
    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    const [socialhistory, setSocialHistory] = useState([]);

    async function getSocialHistory() {
        try {
            let mySocialHistory = await fetch(`${URL}/socialhistory`);
            mySocialHistory = await mySocialHistory.json();
            setSocialHistory(mySocialHistory);
        } catch (err) {
            console.log(err);
        }
    }

    function loaded(socialhistory) {
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
                {socialhistory.map((socialhistory, idx) => {
                    return (
                        <div className='d-flex align-items-center flex-column'>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Education</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Location</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.education.location}</Card.Text>
                                    <Card.Title className='fs-4'>Degree</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.education.degree}</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.education.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>End Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.education.endDate}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Occupation</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Title</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.occupation.title}</Card.Text>
                                    <Card.Title className='fs-4'>Employer</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.occupation.employer}</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.occupation.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>End Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.occupation.endDate}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Marital Status</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.maritalStatus}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Children</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.children} Children</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Diet</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.diet}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Exercise</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Type</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.exercise.type}</Card.Text>
                                    <Card.Title className='fs-4'>Duration</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.exercise.duration} minutes</Card.Text>
                                    <Card.Title className='fs-4'>Frequency</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.exercise.frequency} days per week</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Sleep</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.sleep} hours per night</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Tobacco</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Current</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.tobacco.current}</Card.Text>
                                    <Card.Title className='fs-4'>Past</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.tobacco.past}</Card.Text>
                                    <Card.Title className='fs-4'>Type</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.tobacco.type}</Card.Text>
                                    <Card.Title className='fs-4'>Amount</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.tobacco.amount} pack(s) per day</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.tobacco.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>Quit Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.tobacco.quitDate}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Alcohol</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Current</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.alcohol.current}</Card.Text>
                                    <Card.Title className='fs-4'>Past</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.alcohol.past}</Card.Text>
                                    <Card.Title className='fs-4'>Type</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.alcohol.type}</Card.Text>
                                    <Card.Title className='fs-4'>Amount</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.alcohol.amount} drink(s) per week</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.alcohol.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>Quit Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.alcohol.quitDate}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Substances</Card.Header>
                                <Card.Body>
                                    <Card.Title className='fs-4'>Current</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.substances.current}</Card.Text>
                                    <Card.Title className='fs-4'>Past</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.substances.past}</Card.Text>
                                    <Card.Title className='fs-4'>Type</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.substances.type}</Card.Text>
                                    <Card.Title className='fs-4'>Route</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.substances.route}</Card.Text>
                                    <Card.Title className='fs-4'>Amount</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.substances.amount} time(s) per day</Card.Text>
                                    <Card.Title className='fs-4'>Start Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.substances.startDate}</Card.Text>
                                    <Card.Title className='fs-4'>Quit Date</Card.Title>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.substances.quitDate}</Card.Text>
                                    {console.log(socialhistory.substances.startDate)}
                                    {console.log(socialhistory.substances.endDate)}
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card key={idx} border="dark" className='mb-4 text-center' id='card'>
                                <Card.Header className='fs-3' id='card-header'>Notes</Card.Header>
                                <Card.Body>
                                    <Card.Text className='fs-5 fw-light'>{socialhistory.notes}</Card.Text>
                                    <Card.Title className='fs-4'>Actions</Card.Title>
                                    <div className='d-flex justify-content-center'>
                                        <Link className='me-3' to={`/socialhistory/${socialhistory._id}/edit`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-edit-link">Edit</button>
                                        </Link>
                                        <Link className='ms-3' to={`/socialhistory/${socialhistory._id}/delete`}>
                                            <button type="button" className='text-white fs-5 fw-light  px-3 py-1 rounded-3' id="index-delete-link">Delete</button>
                                        </Link>
                                    </div>
                                </Card.Body>
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
            {socialhistory.length ? loaded(socialhistory) : loading()}
        </>
    )
}

export default SocialHistoryIndex;