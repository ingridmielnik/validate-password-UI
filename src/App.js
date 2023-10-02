import './styles.css';
import React, {useState} from 'react';
import validaPassword from './validatePassword';

function App() {
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  async function btnClick(e){
    e.preventDefault()
    const result = await validaPassword(password)
    console.log(result)
    setResponse(result)
  }
  return (
    <div className="container">
      <div className="container-validator">
        <div className="wrap-validator">
          <form className="validator-form">
            <span className="response-message">{response != null ? response ? 'Valid password' : 'Invalid password' : null}</span>
            <span className="validator-form-title">Password Validator</span>
            <div className="wrap-input">
              <label for="password">Enter the password</label>
              <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="container-validator-form-btn">
              <button className="validator-form-btn" onClick={btnClick}>Validate</button>
            </div>
          </form>
        </div> 
      </div>
    </div> 
  );
}

export default App;