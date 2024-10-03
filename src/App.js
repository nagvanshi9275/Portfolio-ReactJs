import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card';
import Carousel from './components/Carousel';

function App() {
    return(
      <div className='app-container'>
        <Navbar/>
        <Card/>
        <div className='text1-container'><h1 className='text1'>Skills</h1></div>
        <Carousel/>
      </div>
    )
}

export default App;
