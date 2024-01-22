import BenefitLists from "./components/BenefitLists";
import CounterComponent from "./components/CounterComponent";
import Introduce from "./components/introduce";
import LikelionHeader from "./components/LikelionHeader";
import TrackInfo from "./components/TrackInfo";
import Activity from "./components/Activity";
import FAQ from "./components/FAQ";

function App() {
  return (
  <main>
  <LikelionHeader />
   <Introduce /> 
   <CounterComponent/>
  <TrackInfo/>
  <Activity/>
  <BenefitLists />
  <FAQ/>
  </main>
  );
  
}

export default App;
