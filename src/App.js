import './App.css';
import Navbar1 from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurPolicies from './components/OurPolicies';
import OurServices from './components/OurServices';
import OurClientele from './components/OurClientele';
import OnGoing from './components/OnGoing';
import Completed from './components/Completed';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Projects from './components/Projects';
import ContactMain from './components/ContactMain';
import NotFound from './components/NotFound';
import Master from './components/backend/Master';
import Requisition from './components/backend/Requisition';
import RequisitionSite from './components/backend/Requisition_site';
import 'antd/dist/antd.css'; 

import Form1 from './components/Form1';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar1 />
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
          <Route path='/Form' component={Form1} />
          
          <Route path='/master' component={Master} />
          <Route path='/req' component={Requisition} />
          <Route path='/reqsite' component={RequisitionSite} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
