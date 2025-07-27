import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import backgroundVideo from './assets/background.mp4';
function App() {
  const [num, setNum] = useState(0)

  return (
    <div className='app-container'>

      {/*display the background video*/}
      <video autoPlay muted loop className='background-video'>
        <source src={backgroundVideo} type='video/mp4'/>
        Your browser does not support video tag.
</video>

      {/*display the current value of the counter*/}
      <h1 className="counter-heading">Current number: {num}</h1>
      {/*Container for buttons, allows adding or subtracting 1*/}
      <div className="button-container">
       {/*Button to increment the 'num'*/}
        <button className="counter-button" onClick={() => setNum(num + 1)}>
          Add 1
        </button>
        {/*Button to decrement the 'num'*/}
        <button className="counter-button" onClick={() => setNum(num - 1)}>
          Subtract 1
        </button>
        </div>
        
        </div>
        
  );
}

export default App;
