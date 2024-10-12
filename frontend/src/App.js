import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card';
import Carousel from './components/Carousel';
import Socialmediabox from './components/Soicalmediabox';
import FormComponent from './components/Feedback';
import Footer from './components/Footer';
import ThreeD from './components/ThreeD';

function App() {
    return (
      <div className='app-container'>
        <Navbar/>
        <Card/>
        <ThreeD/>
        <div className='text1-container'><h1 className='text1'>About me</h1></div>
        <div className="about-me">
        <p>I am a dedicated individual with a passion for technology and continuous growth,with skills in programming, web development, and software engineering, I also emphasize problem-solving, teamwork, and communication. I believe innovation thrives in collaborative environments and seek opportunities to contribute and lead. Beyond technical expertise, I’m eager to explore how technology can drive real-world impact, while staying adaptable and committed to self-improvement.</p>
        </div>
        <div className='text1-container'><h1 className='text1'>Tech Stack</h1></div>
        
        <Carousel 
          id="webSkillsCarousel" 
          value1="gifs\gifs\mongo_gif.gif" 
          value2="gifs\gifs\express_gif.gif" 
          value3="gifs\gifs\React_gif.gif" 
          value4="gifs\gifs\Node_gif.gif" 
          value5="gifs\gifs\MYSQL_GIF.gif"
        />
        <div className='text1-container'><h1 className='text1'>Programming Languages</h1></div>
        <Carousel 
          id="programmingLanguagesCarousel" 
          value1="gifs\gifs\C_gif.gif" 
          value2="gifs\gifs\c++_gif.gif" 
          value3="gifs\gifs\java_gif.gif" 
          value4="gifs\gifs\python_gif.gif" 
        />
        <div className='text1-container'><h1 className='text1'>Frameworks</h1></div>
        <Carousel 
          id="FrameworksCarousel" 
          value1="gifs\gifs\tailwind_gif.gif" 
          value2="gifs\gifs\bootstrap_gif.gif" 
        />
        <div className='text1-container'><h1 className='text1'>Contact me</h1></div>
        <Socialmediabox/>
        <div className='text1-container' id="feedback"><h1 className='text1'>Feedback</h1></div>
        <FormComponent/>
        <Footer/>
      </div>
    )
}

export default App;
