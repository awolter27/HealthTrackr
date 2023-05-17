import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AllergiesIndex() {
    const [allergies, setAllergies] = useState([]);


    async function getAllergies() {
        try {
            let myAllergies = await fetch('http://localhost:4000/allergies');
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
                <Link to={`/allergies/new`}>
                    <h2>new</h2>
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