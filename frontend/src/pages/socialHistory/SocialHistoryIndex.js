import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SocialHistoryIndex() {
    const [socialhistory, setSocialHistory] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getSocialHistory() {
        try {
            let mySocialHistory = await fetch(`${URL}/socialhistory`);
            mySocialHistory = await mySocialHistory.json();
            setSocialHistory(mySocialHistory);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getSocialHistory();
    }, []);

    function loaded(socialhistory) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Social History</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>EDUCATION</th>
                                <th>OCCUPATION</th>
                                <th>MARITAL STATUS</th>
                                <th>CHILDREN</th>
                                <th>DIET</th>
                                <th>EXERCISE</th>
                                <th>SLEEP</th>
                                <th>TOBACCO</th>
                                <th>ALCOHOL</th>
                                <th>SUBSTANCES</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {socialhistory.map((socialhistory, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{socialhistory.education.location} {socialhistory.education.degree}
                                        {socialhistory.education.startDate}
                                        {socialhistory.education.endDate}</td>
                                        <td>{socialhistory.occupation.title} {socialhistory.occupation.employer} {socialhistory.occupation.startDate} {socialhistory.occupation.endDate}</td>
                                        <td>{socialhistory.maritalStatus}</td>
                                        <td>{socialhistory.children}</td>
                                        <td>{socialhistory.diet}</td>
                                        <td>{socialhistory.exercise.type} {socialhistory.exercise.duration} {socialhistory.exercise.frequency}</td>
                                        <td>{socialhistory.sleep}</td>
                                        <td>{socialhistory.tobacco.current} {socialhistory.tobacco.past} {socialhistory.tobacco.type} {socialhistory.tobacco.amount} {socialhistory.tobacco.startDate} {socialhistory.tobacco.quitDate}</td>
                                        <td>{socialhistory.alcohol.current} {socialhistory.alcohol.past} {socialhistory.alcohol.type} {socialhistory.alcohol.amount} {socialhistory.alcohol.startDate} {socialhistory.alcohol.quitDate}</td>
                                        <td>{socialhistory.substances.current} {socialhistory.substances.past} {socialhistory.substances.type} {socialhistory.substances.route} {socialhistory.substances.amount} {socialhistory.substances.startDate} {socialhistory.substances.quitDate}</td>
                                        <td>{socialhistory.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/socialhistory/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/socialhistory/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/socialhistory/new'}>
                            <h2 className='index-new-text'>Add Social History</h2>
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            {socialhistory.length ? loaded(socialhistory) : loading()}
        </>
    )
}

export default SocialHistoryIndex;