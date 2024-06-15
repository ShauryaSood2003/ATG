

import CardsConatiner from "./components/CardsContainer";
import Header from "./components/Header";
import Options from "./components/Options";
import SignToggle from "./components/SignToggle";
import TopImage from "./components/TopImage";


function App() {
 
  return (
    <div className="position-relative">
      <SignToggle text="pen"/>
      <Header/>
      <TopImage/>
      <Options/>
      <CardsConatiner/>

    </div>
  )
}

export default App
