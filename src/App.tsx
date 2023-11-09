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
    const checkEndpoints = async () => {
      try {
        const response = await axios.head('http://localhost:4000/teste-wms');
        if (response.status === 200) {
          console.log('Retorna 200');
        } else {
          const secondResponse = await axios.head('http://localhost:4000/teste-wms-ip');
          if (secondResponse.status === 200) {
            console.log('Retorna 200');
          } else {
            console.log('Ambos os endpoints não retornaram 200');
          }
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    };
    checkEndpoints();
  }, []);

  return (
    <>
      <div>
        <C.StyledCard>
          <img src={logo} alt="" />
          <C.Typography variant="h3">Ambiente</C.Typography>
          <C.StyledBtn className='m-2'>HOMOLOGAÇÃO</C.StyledBtn>
          <C.StyledBtn className='m-2'>PRODUÇÃO</C.StyledBtn>
        </C.StyledCard>
      </div>
    </>
  );
}

export default App;
