import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HealthConditionsIndex() {
    const [healthconditions, setHealthConditions] = useState([]);

    const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

    async function getHealthConditions() {
        try {
            let myHealthConditions = await fetch(`${URL}/healthconditions`);
            myHealthConditions = await myHealthConditions.json();
            console.log(myHealthConditions)
            setHealthConditions(myHealthConditions);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getHealthConditions();
    }, []);

    function loaded(healthconditions) {
        return (
            <>
                <div className='index-container'>
                    <h1 className='index-header'>Health Conditions</h1>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>HEALTH CONDITION</th>
                                <th>CURRENT</th>
                                <th>PAST</th>
                                <th>AGE OF DIAGNOSIS</th>
                                <th>SYMPTOMS</th>
                                <th>TREATMENT</th>
                                <th>NOTES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {healthconditions.map((healthcondition, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{healthcondition.name}</td>
                                        <td>{healthcondition.currentOrPast.current}</td>
                                        <td>{healthcondition.currentOrPast.past}</td>
                                        <td>{healthcondition.ageOfDiagnosis}</td>
                                        <td>{healthcondition.symptoms}</td>
                                        <td>{healthcondition.treatment}</td>
                                        <td>{healthcondition.notes}</td>
                                        <td>
                                            <Link className='index-edit-link' to={'/healthconditions/:id/edit'}>
                                                <h2 className='index-edit-text'>Edit</h2>
                                            </Link>
                                            <Link className='index-delete-link' to={'/healthconditions/:id/delete'}>
                                                <h2 className='index-delete-text'>Delete</h2>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='index-new-container'>
                        <Link className='index-new-link' to={'/healthconditions/new'}>
                            <h2 className='index-new-text'>Add Health Condition</h2>
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
            {healthconditions.length ? loaded(healthconditions) : loading()}
        </>
    )
}

export default HealthConditionsIndex;