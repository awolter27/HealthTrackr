import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllergiesIndex() {
    const [allergies, setAllergies] = useState([]);

    async function getAllergies() {
        try {
            let myAllergies = await fetch('https://healthtrackr.onrender.com/allergies');
            myAllergies = await myAllergies.json();
            setAllergies(myAllergies);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllergies();
    }, []);

    function loaded(allergies) {
        return (
            <>
                {allergies.map((allergy, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/allergies/${allergy._id}`}>
                                <h2>Allergy: {allergy.name}</h2>
                            </Link>
                            <h2>Reaction: {allergy.reaction}</h2>
                            <h2>Notes: {allergy.notes}</h2>
                        </div>
                    )
                })}
                <Link to={'/allergies/new'}>
                    <h2>Add Allergy</h2>
                </Link>
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
            {allergies.length ? loaded(allergies) : loading()}
        </>
    )
}

export default AllergiesIndex;