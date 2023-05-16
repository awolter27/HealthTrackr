import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import HealthConditionsIndex from './pages/healthConditions/HealthConditionsIndex'
import HealthConditionsShow from './pages/healthConditions/HealthConditionsShow'
import HealthConditionsNew from './pages/healthConditions/HealthConditionsNew'
import HealthConditionsEdit from './pages/healthConditions/HealthConditionsEdit'
import HealthConditionsDelete from './pages/healthConditions/HealthConditionsDelete'
import AllergiesIndex from './pages/allergies/AllergiesIndex'
import AllergiesShow from './pages/allergies/AllergiesShow'
import AllergiesNew from './pages/allergies/AllergiesNew'
import AllergiesEdit from './pages/allergies/AllergiesEdit'
import AllergiesDelete from './pages/allergies/AllergiesDelete'
import MedicationsIndex from './pages/medications/MedicationsIndex'
import MedicationsShow from './pages/medications/MedicationsShow'
import MedicationsNew from './pages/medications/MedicationsNew'
import MedicationsEdit from './pages/medications/MedicationsEdit'
import MedicationsDelete from './pages/medications/MedicationsDelete'
import SurgeriesIndex from './pages/surgeries/SurgeriesIndex'
import SurgeriesShow from './pages/surgeries/SurgeriesShow'
import SurgeriesNew from './pages/surgeries/SurgeriesNew'
import SurgeriesEdit from './pages/surgeries/SurgeriesEdit'
import SurgeriesDelete from './pages/surgeries/SurgeriesDelete'
import HospitalizationsIndex from './pages/hospitalizations/HospitalizationsIndex'
import HospitalizationsShow from './pages/hospitalizations/HospitalizationsShow'
import HospitalizationsNew from './pages/hospitalizations/HospitalizationsNew'
import HospitalizationsEdit from './pages/hospitalizations/HospitalizationsEdit'
import HospitalizationsDelete from './pages/hospitalizations/HospitalizationsDelete'
import SocialHistoryIndex from './pages/socialHistory/SocialHistoryIndex'
import SocialHistoryShow from './pages/socialHistory/SocialHistoryShow'
import SocialHistoryNew from './pages/socialHistory/SocialHistoryNew'
import SocialHistoryEdit from './pages/socialHistory/SocialHistoryEdit'
import SocialHistoryDelete from './pages/socialHistory/SocialHistoryDelete'
import FamilyHistoryIndex from './pages/familyHistory/FamilyHistoryIndex'
import FamilyHistoryShow from './pages/familyHistory/FamilyHistoryShow'
import FamilyHistoryNew from './pages/familyHistory/FamilyHistoryNew'
import FamilyHistoryEdit from './pages/familyHistory/FamilyHistoryEdit'
import FamilyHistoryDelete from './pages/familyHistory/FamilyHistoryDelete'
import VaccinationsIndex from './pages/vaccinations/VaccinationsIndex'
import VaccinationsShow from './pages/vaccinations/VaccinationsShow'
import VaccinationsNew from './pages/vaccinations/VaccinationsNew'
import VaccinationsEdit from './pages/vaccinations/VaccinationsEdit'
import VaccinationsDelete from './pages/vaccinations/VaccinationsDelete'
import AppointmentsIndex from './pages/appointments/AppointmentsIndex'
import AppointmentsShow from './pages/appointments/AppointmentsShow'
import AppointmentsNew from './pages/appointments/AppointmentsNew'
import AppointmentsEdit from './pages/appointments/AppointmentsEdit'
import AppointmentsDelete from './pages/appointments/AppointmentsDelete'
import CareTeamIndex from './pages/careTeam/CareTeamIndex'
import CareTeamShow from './pages/careTeam/CareTeamShow'
import CareTeamNew from './pages/careTeam/CareTeamNew'
import CareTeamEdit from './pages/careTeam/CareTeamEdit'
import CareTeamDelete from './pages/careTeam/CareTeamDelete'
import Footer from './components/Footer';
import './styles/index.css';
import './styles/App.css';
import './styles/fonts.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/healthconditions'>
          <Route path='' element={<HealthConditionsIndex />} />
          <Route path='new' element={<HealthConditionsNew />} />
          <Route path=':id' element={<HealthConditionsShow />} />
          <Route path=':id/edit' element={<HealthConditionsEdit />} />
          <Route path=':id/delete' element={<HealthConditionsDelete />} />
        </Route>
        <Route path='/allergies'>
          <Route path='' element={<AllergiesIndex />} />
          <Route path='new' element={<AllergiesNew />} />
          <Route path=':id' element={<AllergiesShow />} />
          <Route path=':id/edit' element={<AllergiesEdit />} />
          <Route path=':id/delete' element={<AllergiesDelete />} />
        </Route>
        <Route path='/medications'>
          <Route path='' element={<MedicationsIndex />} />
          <Route path='new' element={<MedicationsNew />} />
          <Route path=':id' element={<MedicationsShow />} />
          <Route path=':id/edit' element={<MedicationsEdit />} />
          <Route path=':id/delete' element={<MedicationsDelete />} />
        </Route>
        <Route path='/surgeries'>
          <Route path='' element={<SurgeriesIndex />} />
          <Route path='new' element={<SurgeriesNew />} />
          <Route path=':id' element={<SurgeriesShow />} />
          <Route path=':id/edit' element={<SurgeriesEdit />} />
          <Route path=':id/delete' element={<SurgeriesDelete />} />
        </Route>
        <Route path='/hospitalizations'>
          <Route path='' element={<HospitalizationsIndex />} />
          <Route path='new' element={<HospitalizationsNew />} />
          <Route path=':id' element={<HospitalizationsShow />} />
          <Route path=':id/edit' element={<HospitalizationsEdit />} />
          <Route path=':id/delete' element={<HospitalizationsDelete />} />
        </Route>
        <Route path='/socialhistory'>
          <Route path='' element={<SocialHistoryIndex />} />
          <Route path='new' element={<SocialHistoryNew />} />
          <Route path=':id' element={<SocialHistoryShow />} />
          <Route path=':id/edit' element={<SocialHistoryEdit />} />
          <Route path=':id/delete' element={<SocialHistoryDelete />} />
        </Route>
        <Route path='/familyhistory'>
          <Route path='' element={<FamilyHistoryIndex />} />
          <Route path='new' element={<FamilyHistoryNew />} />
          <Route path=':id' element={<FamilyHistoryShow />} />
          <Route path=':id/edit' element={<FamilyHistoryEdit />} />
          <Route path=':id/delete' element={<FamilyHistoryDelete />} />
        </Route>
        <Route path='/vaccinations'>
          <Route path='' element={<VaccinationsIndex />} />
          <Route path='new' element={<VaccinationsNew />} />
          <Route path=':id' element={<VaccinationsShow />} />
          <Route path=':id/edit' element={<VaccinationsEdit />} />
          <Route path=':id/delete' element={<VaccinationsDelete />} />
        </Route>
        <Route path='/appointments'>
          <Route path='' element={<AppointmentsIndex />} />
          <Route path='new' element={<AppointmentsNew />} />
          <Route path=':id' element={<AppointmentsShow />} />
          <Route path=':id/edit' element={<AppointmentsEdit />} />
          <Route path=':id/delete' element={<AppointmentsDelete />} />
        </Route>
        <Route path='/careteam'>
          <Route path='' element={<CareTeamIndex />} />
          <Route path='new' element={<CareTeamNew />} />
          <Route path=':id' element={<CareTeamShow />} />
          <Route path=':id/edit' element={<CareTeamEdit />} />
          <Route path=':id/delete' element={<CareTeamDelete />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;