import { useState } from 'react';
import { useHistory } from 'react-router';

import { verifiedCode } from '../../../common/db/Users' 

function VerifiedCode() {

  const history = useHistory()

  const [code, setCode] = useState()
  const [errorCode, setErrorCode] = useState()

  const loginCode = () => {
    let user = verifiedCode(code)
    setErrorCode(!user)
    history.push('home')
  }

  return (
    <div>
      <h2>Te enviamos un código al teléfono</h2>
      <input type="number" placeholder="Código de verificación" onChange={(e) => setCode(e.target.value)} />
      {errorCode && <p>Código incorrecto</p>}
      <br />
      <button onClick={loginCode}>Verificar</button>
    </div>
  );
}

export default VerifiedCode;
