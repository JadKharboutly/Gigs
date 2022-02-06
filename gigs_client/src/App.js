import './App.css';
import LandingPage from './Components/Pages/LandingPage';
import SignInPage from './Components/Pages/SignInPage';
import ProfilePage from './Components/Pages/Profilepage'
import NavBar from './Components/NavBar';
import AvailableGigsPage from './Components/Pages/AvailableGigsPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from './Components/PrivateRoutes';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/welcome-page" element={<SignInPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>

        </Routes>
        <PrivateRoutes path="/" component={<ProfilePage/>} />

      </Router>
    </div>
  );
}

export default App;
