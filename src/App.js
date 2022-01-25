import logo from './logo.svg';
import './App.css';
import UserList from './hw_lesson1,2/UserList';
import ComposableUser from './hw_lesson1,2/ComposableUser';
import Counter from './hw_lesson3,4/Counter';
import Footer from './hw_lesson3,4/Footer';
import Content from './hw_lesson3,4/Content';
import Sidebar from './hw_lesson3,4/Sidebar';
import Basement from './hw_lesson3,4/Basement';

const siteSample = {
  pading: "50px",
  display: "flex",
  flexDirection: "column"
}

const mainInf = {
  display: "flex"
}

function App() {
  return (
    <div className="App">
      {/* <div>DZ1 
    <UserList/>
    <div>
      ---------------------------------------------
    </div>
    <ComposableUser/>
    <Counter/> 
      </div> */}
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

export default App;
