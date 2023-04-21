import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Nipuni
import DoctorChat from './Pages/Ni_Chat/DoctorChat';

//Githma
import CreatePost from './Pages/Gi_Inventory/CreatePost';
import EditPost from './Pages/Gi_Inventory/EditPost';
import PostDetails from './Pages/Gi_Inventory/PostDetails';
import Home from './Pages/Gi_Inventory/Home';
import InventoryDashbord from './Component/InventoryDashbord';



//Dashboards of Users
import AdminDashboard from './Component/AdminDashboard';
import PatientsDashboard from './Component/PatientsDashboard';
import StaffDashboard from './Component/StaffDashboard';
import DoctorDashboard from './Component/DoctorDashboard';

//Kanishka
import AppointmentShedul from './Pages/Ks_Appointment/AppointmentShedul';
import AppointmentDashboard from './Pages/Ks_Appointment/AppointmentDashboard';
import DoctorDetails from './Pages/Ks_Appointment/DoctorDetails';

//Nikini
import Login from './Pages/Nv_UserManagement/login';
import Signup from './Pages/Nv_UserManagement/signup';
 
import AddPatient from './Pages/Nv_UserManagement/patient/AddPatient';
import AllPatient from './Pages/Nv_UserManagement/patient/AllPatient';
import EditPatient from './Pages/Nv_UserManagement/patient/EditPatient';
import ReadPatient from './Pages/Nv_UserManagement/patient/ReadPatient';

import AddDoctor from './Pages/Nv_UserManagement/doctor/AddDoctor';
import AllDoctor from './Pages/Nv_UserManagement/doctor/AllDoctor';
import EditDoctor from './Pages/Nv_UserManagement/doctor/EditDoctor';
import ReadDoctor from './Pages/Nv_UserManagement/doctor/ReadDoctor';


import AllAdmin from './Pages/Nv_UserManagement/admin/AllAdmin';
import ReadAdmin from './Pages/Nv_UserManagement/admin/ReadAdmin';


import AddStaff from './Pages/Nv_UserManagement/staff/AddStaff';
import AllStaff from './Pages/Nv_UserManagement/staff/AllStaff';
import EditStaff from './Pages/Nv_UserManagement/staff/EditStaff';
import ReadStaff from './Pages/Nv_UserManagement/staff/ReadStaff';


//Buwani
import Medical from './Pages/Bu_Medical/Medical'; 
import ViewMedical from './Pages/Bu_Medical/ViewMedical';
import UpdateMedical from './Pages/Bu_Medical/UpdateMedical';
import Dash_Medical from './Pages/Bu_Medical/Dash_Medical';
 

//Sandunika
import LeaveReq from './Pages/Si_MinorStaff/LeaveReq';
 
//Tharanee
import addSalary from './Pages/Tn_Payroll/addSalary';
import StaffChat from './Pages/Ni_Chat/StaffChat';
import AdminChat from './Pages/Ni_Chat/AdminChat';

function App() {
    return (
        <div className="App">

            <Router>
                <Switch>


                    <Route exact path='/DoctorChat' component={DoctorChat} />

                    //Gi_Inventory
                    <Route exact path="/product" component={Home} />
                    <Route exact path="/add" component={CreatePost} />
                    <Route exact path="/edit/:id" component={EditPost} />
                    <Route exact path="/post/:id" component={PostDetails} />
                    <Route exact path="/InventoryDashbord" component={InventoryDashbord}/>

                    //Appointment
                    <Route exact path="/AppointmentShedul" component={AppointmentShedul} />
                    <Route exact path="/AppointmentDashboard" component={AppointmentDashboard} />
                    <Route exact path="/DoctorDetails" component={DoctorDetails} />


                    
                    //Dashboard
                    <Route exact path="/AdminDashboard" component={AdminDashboard} />
                    <Route exact path="/PatientsDashboard" component={PatientsDashboard}/>
                    <Route exact path="/StaffDashboard" component={StaffDashboard} />
                    <Route exact path="/DoctorDashboard" component={DoctorDashboard}/>

                    
                    //Nv_UserManagement
                     <Route exact path="/mainLogin" component={Login} />
                    <Route exact path="/signup" component={Signup} /> 
                    <Route exact path="/AddPatient" component={AddPatient} />
                    <Route exact path="/AllPatient" component={AllPatient} />
                    <Route exact path="/EditPatient/:id" component={EditPatient} />
                    <Route exact path="/ReadPatient/:id" component={ReadPatient} />

                    <Route exact path="/AddDoctor" component={AddDoctor} />
                    <Route exact path="/AllDoctor" component={AllDoctor} />
                    <Route exact path="/EditDoctor/:id" component={EditDoctor} />
                    <Route exact path="/ReadDoctor/:id" component={ReadDoctor} />

                    <Route exact path="/AddStaff" component={AddStaff} />
                    <Route exact path="/AllStaff" component={AllStaff} />
                    <Route exact path="/EditStaff/:id" component={EditStaff} />
                    <Route exact path="/ReadStaff/:id" component={ReadStaff} />
                    
                    <Route exact path="/AllAdmin" component={AllAdmin} />
                    <Route exact path="/ReadAdmin" component={ReadAdmin} />
                


                    //Bu_Medical
                    <Route exact path="/Medical" component={Medical} />
                    <Route exact path="/DashMedical" component={Dash_Medical} />
                    <Route exact path="/ViewMedical/:id" component={ViewMedical} />
                    <Route exact path="/UpdateMedical/:id" component={UpdateMedical} /> 
                  

                    //Si_MinorStaff
                    <Route exact path="/LeaveReq" component={LeaveReq} />

                    //Tn_Payroll
                    <Route exact path="/addSalary" component={addSalary} />

                    //Chat
                    <Route exact path='/StaffChat' component={StaffChat} />
                    <Route exact path='/DoctorChat' component={DoctorChat} />
                    <Route exact path='/AdminChat' component={AdminChat} />

                    <Redirect to='/mainLogin' component={Login} />
                </Switch>

            </Router>



        </div>
    );
}

export default App;
