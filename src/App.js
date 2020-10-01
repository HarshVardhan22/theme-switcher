import React, {useState} from 'react';
import ThemeContext from './Context/themeContext';
//import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";


const App = () => {
 const themeHook = useState("dark");
  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <HeroSection/>
      </div>
    </ThemeContext.Provider>
  )
}
export default App;
