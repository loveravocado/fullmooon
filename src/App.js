import background from "./img/Fullmooon_background01.png";
import fullmoon from "./img/Fullmooon_fullmoon.png";
import './App.css';

export default function App(){
  return(
    <>
    <div className="main">
      <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
      <img className="fullmoon" src={ fullmoon } />
    </div>
      
    </>
  )
}