import { useState } from "react"
import { useHistory } from 'react-router';

import { login } from '../../../common/db/Users'

function Login() {
  
  const history = useHistory()

  const [phone, setPhone] = useState()
  const [error, setError] = useState()

  const submit = () => {
    let user = login(phone)
    setError(!user)
    history.push('/verified-code')
  }

  return (
    <div>
      <input type="number" placeholder="(000) 000-00000" onChange={(e) => setPhone(e.target.value)} />
      {error && <p>El usuario no existe</p>}
      <br />
      <button onClick={submit}>Iniciar sesión</button>
    </div>
  )
}

export default Login;