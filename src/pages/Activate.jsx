import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const URL_BASE = 'http://localhost:8080';

function Activate() {
  const { token } = useParams();
  const navigate = useNavigate();
  console.log('token', token);

  const activate = async () => {
    const response = await fetch(`${URL_BASE}/auth/local/verify-account/${token}`);
    const data = await response.json();
    console.log('data', data);
    if (data.token) {
      localStorage.setItem('token', data.token);
      navigate('/');
    }
  };

  useEffect(() => {
    activate();
  }, []);

  // enviar el token al servidor para ser validado
  // 1. llamar al endpoiont atraves de fetch/axios
  // /auth/local/verify-account/10d55ffeeb9fe7c5a56fd311edabcbcc1a139aae17698862baa0460be05316b0
  // 2. Crear el endpoint en el backend al cual van a pedir la verifacion
  // ok -> redirect al home loggin
  // false -> mensaje diciendo el porque

  return (
    <div>
      <h1>Activate</h1>
    </div>
  );
}

export default Activate;
