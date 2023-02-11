import { useState } from 'react';
import './App.css';

const App = () => {
  const [ buttonColor, setButtonColor ] = useState('red')
  const [ disabled, setDisabled ] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  const changeColor = () => {
    if(disabled) {
      setButtonColor(buttonColor)
    } else {
      setButtonColor('gray')
    }
  }
  return (
    <div>
      <button 
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
        >
          Change to {newButtonColor}
      </button>
        <input 
        type='checkbox' 
        id='disable-button-checkbox'
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)} 
        />
        <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default App;
