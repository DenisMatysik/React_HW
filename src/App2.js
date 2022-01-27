import Counter from './hw_lesson2/Counter';
import Footer from './hw_lesson2/Footer';
import Content from './hw_lesson2/Content';
import Sidebar from './hw_lesson2/Sidebar';
import Basement from './hw_lesson2/Basement';

const siteSample = {
    pading: "50px",
    display: "flex",
    flexDirection: "column"
  }
  
  const mainInf = {
    display: "flex"
  }

function App2() {
    return (
      <div className="App">
        <div style={siteSample}>
        <Footer/>
        <div style={mainInf}>
          <Sidebar/>
          <Content/>
        </div>
        <Basement/>
        </div>
      </div>
    );
  }
  
  export default App2;