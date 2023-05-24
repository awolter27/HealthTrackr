// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";

// function AllergiesEdit() {
//     const { id } = useParams();
//     const [allergy, setAllergy] = useState(null);
//     const navigate = useNavigate();

//     const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

//     async function getAllergy() {
//         try {
//             let myAllergy = await fetch(`${URL}/allergies/${id}`);
//             myAllergy = await myAllergy.json();
//             setAllergy(myAllergy);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     function handleChange(e) {
//         setAllergy((currentState) => ({
//             ...currentState,
//             [e.target.name]: e.target.value
//         }))
//     }

//     async function handleSumbit(e) {
//         try {
//             e.preventDefault();
//             await fetch(`${URL}/${id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(allergy)
//             });
//             return navigate(`/allergies/${id}`);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     function loaded() {
//         return (
//             <>
//                 <h2>Edit {allergy.name}</h2>
//                 <form onSubmit={handleSumbit}>
//                     Allergy: <input type="text" value={allergy.name} name="name" onChange={handleChange} />
//                     Reaction: <input type="text" value={allergy.reaction} name="reaction" onChange={handleChange} />
//                     Notes: <input type="number" value={allergy.notes} name="notes" onChange={handleChange} />
//                     <button>Submit</button>
//                 </form>
//             </>
//         )
//     }

//     function loading() {
//         return (
//             <h1>Loading...</h1>
//         )
//     }

//     useEffect(() => {
//         getAllergy();
//     }, []);

//     return (
//         <>
//             {allergy ? loaded() : loading()}
//         </>
//     )
// }

// export default AllergiesEdit;