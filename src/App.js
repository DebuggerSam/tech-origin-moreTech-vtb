import './App.css';
import SideBarEvents from "./components/SideBarEvents";
import Header from "./components/Header";
import Main from "./components/Main";
import SecondTabs from './components/SecondTabs'
import RightBlock from "./components/RightBlock";
// import BarInformation from "./components/BarInformation";

function App() {
  return (
    <div className="App">
      <SideBarEvents/>
        <Header/>
        <Main/>
      <RightBlock/>
    </div>
  );
}

export default App;
