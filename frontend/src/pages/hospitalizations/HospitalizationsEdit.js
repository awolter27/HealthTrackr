// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";

// function HospitalizationsEdit() {
//     const { id } = useParams();
//     const [hospitalization, setHospitalization] = useState(null);
//     const navigate = useNavigate();

//     const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

//     async function getHospitalization() {
//         try {
//             let myHospitalization = await fetch(`${URL}/hospitalizations/${id}`);
//             myHospitalization = await myHospitalization.json();
//             setHospitalization(myHospitalization);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     useEffect(() => {
//         getHospitalization();
//     }, []);

//     function handleChange(e) {
//         setHospitalization((currentState) => ({
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
//                 body: JSON.stringify(hospitalization)
//             });
//             return navigate(`/hospitalizations/${id}`);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     function loaded() {
//         return (
//             <>
//                 <h2>Edit {hospitalization.name}</h2>
//                 <form onSubmit={handleSumbit}>
//                     Allergy: <input type="text" value={hospitalization.name} name="name" onChange={handleChange} />
//                     Reaction: <input type="text" value={hospitalization.reaction} name="reaction" onChange={handleChange} />
//                     Notes: <input type="number" value={hospitalization.notes} name="notes" onChange={handleChange} />
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

//     return (
//         <>
//             {allergy ? loaded() : loading()}
//         </>
//     )
// }

// export default AllergiesEdit;