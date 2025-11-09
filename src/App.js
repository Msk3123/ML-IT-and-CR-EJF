import './App.css';
import ProfileSection from './page/ProfileSection';
import appLogo from './assets/Лого-ІЯК.png';
import WhyEJF from "./page/WhyEJF";
import SkillPage from "./page/SkillPage";
import InteractivePage from "./page/interactivePage"; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={appLogo} alt="Logo" className="EJF-logo"/>
          <h1> Motivation Letter IT and CR</h1>
      </header>
        <div className="Whyme-page"> 
            <ProfileSection/>
            <WhyEJF/>
        </div>
        <div className="second-page">
            <SkillPage/>
        </div>
        <div className="question-page">
            <InteractivePage/>
        </div>
    </div>
  );
}

export default App;
