import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { login, verifiedCode } from './Users'

function App() {

  const [phone, setPhone] = useState()
  const [code, setCode] = useState()
  const [error, setError] = useState()
  const [errorCode, setErrorCode] = useState()
  const [viewCode, setViewCode] = useState()
  const [viewHome, setViewHome] = useState()

  const submit = () => {
    let user = login(phone)
    setError(!user)
    setViewCode(user)
  }

  const loginCode = () => {
    let user = verifiedCode(code)
    console.log(user)
    setErrorCode(!user)
    setViewHome(user)
  }

  return (
    <div className="App">
      { !viewCode &&
        <div>
          <input type="number" placeholder="(000) 000-00000" onChange={(e) => setPhone(e.target.value)} />
          {error && <p>El usuario no existe</p>}
          <br />
          <button onClick={submit}>Iniciar sesión</button>
        </div>
      }

      { viewCode &&
        <div>
          <h2>Te enviamos un código al teléfono</h2>
          <input type="number" placeholder="Código de verificación" onChange={(e) => setCode(e.target.value)} />
          {errorCode && <p>Código incorrecto</p>}
          <br />
          <button onClick={loginCode}>Verificar</button>
        </div>
      }

      { viewHome && 
        <h1>Home</h1>
      }
    </div>
  );
}

export default App;
