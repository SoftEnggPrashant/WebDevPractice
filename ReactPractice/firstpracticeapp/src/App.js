import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Counter from './components/Counter/Counter';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Testimonials from './components/Testimonials/Testimonials';
import TourComponent from './components/TourProjet/TourComponent';

function App() {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/couterapp' element={<Counter/>}/>
        <Route path='/tours' element={<TourComponent/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/testimonial' element={<Testimonials/>}/>
      </Routes>
    </Router>
  );
}

export default App;
