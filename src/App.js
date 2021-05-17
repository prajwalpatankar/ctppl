import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurPolicies from './components/OurPolicies';
import OurServices from './components/OurServices';
import OurClientele from './components/OurClientele';
import OnGoing from './components/OnGoing';
import Completed from './components/Completed';
import Projects from './components/Projects';
import ContactMain from './components/ContactMain';
import NotFound from './components/NotFound';
import Navbar1 from './components/Navbar';
// import NavbarMis from './components/backend/NavbarMis';
// import Master from './components/backend/Master';
// import Requisition from './components/backend/Requisition';
// import RequisitionSite from './components/backend/Requisition_site';
// import PurchaseOrder from './components/backend/PurchaseOrder';
// import GoodsReceiptNote from './components/backend/GoodsReceiptNote';
// import Login from './components/backend/Login';
// import NewUser from './components/backend/NewUser';
// import NewProjects from './components/backend/NewProjects';
// import Menu from './components/backend/Menu';
// import ViewStock from './components/backend/ViewStock';
// import Issue from './components/backend/Issue';
// import DeliveryChallan from './components/backend/DeliveryChallan';

// import { useEffect } from 'react';
// import axios from 'axios';

// import UserContext from "./context/user/userContext";


// import RouterMain from './components/RouterMain';
// import RouterMIS from './components/backend/RouterMIS';


function App() {


  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     axios.defaults.headers.common["Authorization"] = `JWT ${localStorage.getItem('token')}`;
  //     console.log("in")
  //   } else {
  //     delete axios.defaults.headers.common["Authorization"];
  //     console.log("out")
  //   }
  // });


  return (
    // <div>
    //   <RouterMIS />
    //   <RouterMain />      
    // </div>
    <BrowserRouter>
      <div className="App">
        <Navbar1 />
        {/* <NavbarMis /> */}
        <Switch >
          <Route exact path='/' component={Home} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/OurPolicies' component={OurPolicies} />
          <Route path='/OurServices' component={OurServices} />
          <Route path='/OurClientele' component={OurClientele} />
          <Route path='/OnGoing' component={OnGoing} />
          <Route path='/Completed' component={Completed} />
          <Route path='/ContactUs:completed' component={ContactMain} />
          <Route path='/Projects:completed' component={Projects} />

          {/* <Route path='/1Menu' component={Menu} />
          <Route path='/login' component={Login} />
          <Route path='/1newuser' component={NewUser} />
          <Route path='/1projects' component={NewProjects} />
          <Route path='/1master' component={Master} />
          <Route path='/1req' component={Requisition} />
          <Route path='/1reqsite' component={RequisitionSite} />
          <Route path='/1po' component={PurchaseOrder} />
          <Route path='/1grn' component={GoodsReceiptNote} />
          <Route path='/1stock' component={ViewStock} />
          <Route path='/1issue' component={Issue} />
          <Route path='/1delivery' component={DeliveryChallan} /> */}

          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
