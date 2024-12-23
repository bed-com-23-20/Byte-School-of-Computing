import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componets/header/header';
import HomePage from './pages/homePage/homePage';
import CoursesPage from './pages/coursesPage/coursesPage';
import AboutUsPage from './pages/aboutUsPage/aboutUsPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>

       <Route path="/" element={<HomePage />}/>
        <Route path="coursesPage" element={<CoursesPage />}/>
        <Route path="aboutUsPage" element={<AboutUsPage />}/>

      </Routes>

      
     
    </div>
  );
}

export default App;
