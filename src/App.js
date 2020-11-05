import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurPolicies from './components/OurPolicies';
import OurServices from './components/OurServices';
import OurClientele from './components/OurClientele';
import OnGoing from './components/OnGoing';
import Completed from './components/Completed';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/OurPolicies' component={OurPolicies} />
        <Route path='/OurServices' component={OurServices} />
        <Route path='/OurClientele' component={OurClientele} />
        <Route path='/OnGoing' component={OnGoing} />
        <Route path='/Completed' component={Completed} />
        <Route path='/ContactUs' component={ContactUs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
