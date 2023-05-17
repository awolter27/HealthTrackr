// const [allergiesForm, setAllergiesForm] = useState({
//     name: '',
//     reaction: '',
//     notes: ''
// })

// function handleChange(e) {
//     setAllergiesForm((previousFormState) => ({
//         ...previousFormState,
//         [e.target.name]: e.target.value
//     }))
// }

// async function handleSubmit(e) {
//     try {
//         e.preventDefault();
//         await fetch('http://loaclhost:4000/allergies', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(allergiesForm)
//         })
//         getAllergies();
//         e.target.reset();
//     } catch (err) {
//         console.log(err);
//     }
// }
