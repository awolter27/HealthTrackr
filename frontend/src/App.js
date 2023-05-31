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
import { useNavigate } from "react-router-dom";

function App() {
  const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://healthtrackr.onrender.com" : "http://localhost:4000";

  const navigate = useNavigate();

  const [allergies, setAllergies] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [careTeam, setCareTeam] = useState([]);
  const [healthConditions, setHealthConditions] = useState([]);
  const [hospitalizations, setHospitalizations] = useState([]);
  const [medications, setMedications] = useState([]);
  const [surgeries, setSurgeries] = useState([]);
  const [vaccinations, setVaccinations] = useState([]);

  async function getAllergies() {
    try {
      let myAllergies = await fetch(`${URL}/allergies`);
      myAllergies = await myAllergies.json();
      setAllergies(myAllergies);
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

  async function getCareTeam() {
    try {
      let myCareTeam = await fetch(`${URL}/careteam`);
      myCareTeam = await myCareTeam.json();
      setCareTeam(myCareTeam);
    } catch (err) {
      console.log(err);
    }
  }

  async function getHealthConditions() {
    try {
      let myHealthConditions = await fetch(`${URL}/healthconditions`);
      myHealthConditions = await myHealthConditions.json();
      setHealthConditions(myHealthConditions);
    } catch (err) {
      console.log(err);
    }
  }

  async function getHospitalizations() {
    try {
      let myHospitalizations = await fetch(`${URL}/hospitalizations`);
      myHospitalizations = await myHospitalizations.json();
      setHospitalizations(myHospitalizations);
    } catch (err) {
      console.log(err);
    }
  }

  async function getMedications() {
    try {
      let myMedications = await fetch(`${URL}/medications`);
      myMedications = await myMedications.json();
      setMedications(myMedications);
    } catch (err) {
      console.log(err);
    }
  }

  async function getSurgeries() {
    try {
      let mySurgeries = await fetch(`${URL}/surgeries`);
      mySurgeries = await mySurgeries.json();
      setSurgeries(mySurgeries);
    } catch (err) {
      console.log(err);
    }
  }

  async function getVaccinations() {
    try {
      let myVaccinations = await fetch(`${URL}/vaccinations`);
      myVaccinations = await myVaccinations.json();
      setVaccinations(myVaccinations);
    } catch (err) {
      console.log(err);
    }
  }

  function goBack() {
    window.history.back();
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthconditions">
          <Route path="" element={<HealthConditionsIndex healthConditions={healthConditions} getHealthConditions={getHealthConditions} />} />
          <Route path="new" element={<HealthConditionsNew healthConditions={healthConditions} getHealthConditions={getHealthConditions} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<HealthConditionsEdit getHealthConditions={getHealthConditions} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<HealthConditionsDelete getHealthConditions={getHealthConditions} URL={URL} navigate={navigate} goBack={goBack} />} />
        </Route>
        <Route path="/allergies">
          <Route path="" element={<AllergiesIndex allergies={allergies} getAllergies={getAllergies} />} />
          <Route path="new" element={<AllergiesNew allergies={allergies} getAllergies={getAllergies} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<AllergiesEdit getAllergies={getAllergies} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<AllergiesDelete getAllergies={getAllergies} URL={URL} navigate={navigate} goBack={goBack} />} />
        </Route>
        <Route path="/medications">
          <Route path="" element={<MedicationsIndex medications={medications} getMedications={getMedications} />} />
          <Route path="new" element={<MedicationsNew medications={medications} getMedications={getMedications} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<MedicationsEdit getMedications={getMedications} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<MedicationsDelete getMedications={getMedications} URL={URL} navigate={navigate} goBack={goBack} />} />
        </Route>
        <Route path="/surgeries">
          <Route path="" element={<SurgeriesIndex surgeries={surgeries} getSurgeries={getSurgeries} />} />
          <Route path="new" element={<SurgeriesNew surgeries={surgeries} getSurgeries={getSurgeries} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<SurgeriesEdit getSurgeries={getSurgeries} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<SurgeriesDelete getSurgeries={getSurgeries} URL={URL} navigate={navigate} goBack={goBack} />} />
        </Route>
        <Route path="/hospitalizations">
          <Route path="" element={<HospitalizationsIndex hospitalizations={hospitalizations} getHospitalizations={getHospitalizations} />} />
          <Route path="new" element={<HospitalizationsNew hospitalizations={hospitalizations} getHospitalizations={getHospitalizations} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<HospitalizationsEdit getHospitalizations={getHospitalizations} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<HospitalizationsDelete getHospitalizations={getHospitalizations} URL={URL} navigate={navigate} goBack={goBack} />} />
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
          <Route path="" element={<VaccinationsIndex vaccinations={vaccinations} getVaccinations={getVaccinations} />} />
          <Route path="new" element={<VaccinationsNew vaccinations={vaccinations} getVaccinations={getVaccinations} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<VaccinationsEdit getVaccinations={getVaccinations} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<VaccinationsDelete getVaccinations={getVaccinations} URL={URL} navigate={navigate} goBack={goBack} />} />
        </Route>
        <Route path="/appointments">
          <Route path="" element={<AppointmentsIndex appointments={appointments} getAppointments={getAppointments} />} />
          <Route path="new" element={<AppointmentsNew appointments={appointments} getAppointments={getAppointments} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<AppointmentsEdit getAppointments={getAppointments} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<AppointmentsDelete getAppointments={getAppointments} URL={URL} navigate={navigate} goBack={goBack} />} />
        </Route>
        <Route path="/careteam">
          <Route path="" element={<CareTeamIndex careTeam={careTeam} getCareTeam={getCareTeam} />} />
          <Route path="new" element={<CareTeamNew careTeam={careTeam} getCareTeam={getCareTeam} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/edit" element={<CareTeamEdit getCareTeam={getCareTeam} URL={URL} navigate={navigate} goBack={goBack} />} />
          <Route path=":id/delete" element={<CareTeamDelete getCareTeam={getCareTeam} URL={URL} navigate={navigate} goBack={goBack} />} />
        </Route>
      </Routes >
    </>
  );
};

export default App;