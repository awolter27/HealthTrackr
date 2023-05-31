import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/fonts.css";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import HealthConditionsIndex from "./pages/healthConditions/HealthConditionsIndex";
import HealthConditionsNew from "./pages/healthConditions/HealthConditionsNew";
import HealthConditionsEdit from "./pages/healthConditions/HealthConditionsEdit";
import HealthConditionsDelete from "./pages/healthConditions/HealthConditionsDelete";
import AllergiesIndex from "./pages/allergies/AllergiesIndex";
import AllergiesNew from "./pages/allergies/AllergiesNew";
import AllergiesEdit from "./pages/allergies/AllergiesEdit";
import AllergiesDelete from "./pages/allergies/AllergiesDelete";
import MedicationsIndex from "./pages/medications/MedicationsIndex";
import MedicationsNew from "./pages/medications/MedicationsNew";
import MedicationsEdit from "./pages/medications/MedicationsEdit";
import MedicationsDelete from "./pages/medications/MedicationsDelete";
import SurgeriesIndex from "./pages/surgeries/SurgeriesIndex";
import SurgeriesNew from "./pages/surgeries/SurgeriesNew";
import SurgeriesEdit from "./pages/surgeries/SurgeriesEdit";
import SurgeriesDelete from "./pages/surgeries/SurgeriesDelete";
import HospitalizationsIndex from "./pages/hospitalizations/HospitalizationsIndex";
import HospitalizationsNew from "./pages/hospitalizations/HospitalizationsNew";
import HospitalizationsEdit from "./pages/hospitalizations/HospitalizationsEdit";
import HospitalizationsDelete from "./pages/hospitalizations/HospitalizationsDelete";
import SocialHistoryIndex from "./pages/socialHistory/SocialHistoryIndex";
import SocialHistoryNew from "./pages/socialHistory/SocialHistoryNew";
import SocialHistoryEdit from "./pages/socialHistory/SocialHistoryEdit";
import SocialHistoryDelete from "./pages/socialHistory/SocialHistoryDelete";
import FamilyHistoryIndex from "./pages/familyHistory/FamilyHistoryIndex";
import FamilyHistoryNew from "./pages/familyHistory/FamilyHistoryNew";
import FamilyHistoryEdit from "./pages/familyHistory/FamilyHistoryEdit";
import FamilyHistoryDelete from "./pages/familyHistory/FamilyHistoryDelete";
import VaccinationsIndex from "./pages/vaccinations/VaccinationsIndex";
import VaccinationsNew from "./pages/vaccinations/VaccinationsNew";
import VaccinationsEdit from "./pages/vaccinations/VaccinationsEdit";
import VaccinationsDelete from "./pages/vaccinations/VaccinationsDelete";
import AppointmentsIndex from "./pages/appointments/AppointmentsIndex";
import AppointmentsNew from "./pages/appointments/AppointmentsNew";
import AppointmentsEdit from "./pages/appointments/AppointmentsEdit";
import AppointmentsDelete from "./pages/appointments/AppointmentsDelete";
import CareTeamIndex from "./pages/careTeam/CareTeamIndex";
import CareTeamNew from "./pages/careTeam/CareTeamNew";
import CareTeamEdit from "./pages/careTeam/CareTeamEdit";
import CareTeamDelete from "./pages/careTeam/CareTeamDelete";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function App() {
  const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

  const { id } = useParams();

  const navigate = useNavigate();

  const [allergy, setAllergy] = useState(null);
  const [allergies, setAllergies] = useState([]);
  const [appointment, setAppointment] = useState(null);
  const [appointments, setAppointments] = useState([]);

  async function getAllergy() {
    try {
      let myAllergy = await fetch(`${URL}/allergies/${id}`);
      myAllergy = await myAllergy.json();
      setAllergy(myAllergy);
    } catch (err) {
      console.log(err);
    }
  };

  async function getAllergies() {
    try {
      let myAllergies = await fetch(`${URL}/allergies`);
      myAllergies = await myAllergies.json();
      setAllergies(myAllergies);
    } catch (err) {
      console.log(err);
    }
  };

  async function getAppointment() {
    try {
      let myAppointment = await fetch(`${URL}/appointments/${id}`);
      myAppointment = await myAppointment.json();
      setAppointment(myAppointment);
    } catch (err) {
      console.log(err);
    }
  };

  async function getAppointments() {
    try {
      let myAppointments = await fetch(`${URL}/appointments`);
      myAppointments = await myAppointments.json();
      setAppointments(myAppointments);
    } catch (err) {
      console.log(err);
    }
  };

  function goBack() {
    window.history.back();
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthconditions">
          <Route path="" element={<HealthConditionsIndex />} />
          <Route path="new" element={<HealthConditionsNew />} />
          <Route path=":id/edit" element={<HealthConditionsEdit />} />
          <Route path=":id/delete" element={<HealthConditionsDelete />} />
        </Route>
        <Route path="/allergies">
          <Route path="" element={<AllergiesIndex allergies={allergies} getAllergies={getAllergies} />} />
          <Route path="new" element={<AllergiesNew allergies={allergies} getAllergies={getAllergies} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<AllergiesEdit allergy={allergy} getAllergy={getAllergy} getAllergies={getAllergies} setAllergy={setAllergy} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<AllergiesDelete allergy={allergy} allergies={allergies} getAllergy={getAllergy} getAllergies={getAllergies} setAllergies={setAllergies} URL={URL} id={id} navigate={navigate} goBack={goBack} />} />
        </Route>
        <Route path="/medications">
          <Route path="" element={<MedicationsIndex />} />
          <Route path="new" element={<MedicationsNew />} />
          <Route path=":id/edit" element={<MedicationsEdit />} />
          <Route path=":id/delete" element={<MedicationsDelete />} />
        </Route>
        <Route path="/surgeries">
          <Route path="" element={<SurgeriesIndex />} />
          <Route path="new" element={<SurgeriesNew />} />
          <Route path=":id/edit" element={<SurgeriesEdit />} />
          <Route path=":id/delete" element={<SurgeriesDelete />} />
        </Route>
        <Route path="/hospitalizations">
          <Route path="" element={<HospitalizationsIndex />} />
          <Route path="new" element={<HospitalizationsNew />} />
          <Route path=":id/edit" element={<HospitalizationsEdit />} />
          <Route path=":id/delete" element={<HospitalizationsDelete />} />
        </Route>
        <Route path="/socialhistory">
          <Route path="" element={<SocialHistoryIndex />} />
          <Route path="new" element={<SocialHistoryNew />} />
          <Route path=":id/edit" element={<SocialHistoryEdit />} />
          <Route path=":id/delete" element={<SocialHistoryDelete />} />
        </Route>
        <Route path="/familyhistory">
          <Route path="" element={<FamilyHistoryIndex />} />
          <Route path="new" element={<FamilyHistoryNew />} />
          <Route path=":id/edit" element={<FamilyHistoryEdit />} />
          <Route path=":id/delete" element={<FamilyHistoryDelete />} />
        </Route>
        <Route path="/vaccinations">
          <Route path="" element={<VaccinationsIndex />} />
          <Route path="new" element={<VaccinationsNew />} />
          <Route path=":id/edit" element={<VaccinationsEdit />} />
          <Route path=":id/delete" element={<VaccinationsDelete />} />
        </Route>
        <Route path="/appointments">
          <Route path="" element={<AppointmentsIndex appointments={appointments} getAppointments={getAppointments} />} />
          <Route path="new" element={<AppointmentsNew appointments={appointments} getAppointments={getAppointments} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<AppointmentsEdit appointment={appointment} getAppointment={getAppointment} getAppointments={getAppointments} setAppointment={setAppointment} URL={URL} id={id} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<AppointmentsDelete URL={URL} getAppointments={getAppointments} goBack={goBack} />} />
        </Route>
        <Route path="/careteam">
          <Route path="" element={<CareTeamIndex />} />
          <Route path="new" element={<CareTeamNew />} />
          <Route path=":id/edit" element={<CareTeamEdit />} />
          <Route path=":id/delete" element={<CareTeamDelete />} />
        </Route>
      </Routes >
    </>
  );
};

export default App;