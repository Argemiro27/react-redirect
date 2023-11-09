import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as C from './components';
import logo from './assets/logo.png';

function App() {
  const [responseStatus, setResponseStatus] = useState<number | null>(null);


  useEffect(() => {
    const checkEndpoint = () => {
      axios.head('https://google.com', {
        headers: {
          'Access-Control-Allow-Origin': 'https://google.com', // Define o domínio permitido
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS' // Define os métodos permitidos
          // Outros cabeçalhos podem ser adicionados aqui, se necessário
        }
      })
        .then(response => {
          setResponseStatus(response.status);
        })
        .catch(error => {
          setResponseStatus(null); // Lida com o erro conforme necessário
        });
    };

    checkEndpoint();
  }, []);

  return (
    <>
      <div>
        <C.StyledCard>
          <img src={logo} alt="" />
          <C.Typography variant="h3">Ambiente</C.Typography>
          <C.StyledBtn className='m-2'>HOMOLOGAÇÃO</C.StyledBtn>
          <C.StyledBtn className='m-2'>PRODUÇÃO</C.StyledBtn>
          {responseStatus !== null ? (
            <p>Resposta do endpoint: {responseStatus === 200 ? 'OK' : 'Não OK'}</p>
          ) : (
            <p>Verificando...</p>
          )}
        </C.StyledCard>
      </div>
    </>
  );
}

export default App;
