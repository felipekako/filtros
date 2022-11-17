import {useState,useEffect} from "react"
import Dados from "./components/dados";
import  Axios  from 'axios';
import "./App.css";
import { Fundo } from "./components/Estilizados";
import Filtros from "./components/Filtros";
function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    Axios.get("https://randomuser.me/api/?results=284")
      .then(res => setUsers(res.data.results))
      .catch(err => console.log("erro em pegaros usuarios" ,err))
  },[])

  const [dadosDoInput,setDadosDoInput] = useState({})

  function SalvarDados(dados) {
   setDadosDoInput(dados) 
   console.log("Dados da função SalvarDados" + dados)
  }
  return (
    <>
    <Fundo>
      <Filtros
        EnvioEstados={SalvarDados}
      />
      <Dados
      dadosDoInput={dadosDoInput}
        users={users}
      />
    </Fundo>
    </>
  );
}

export default App;
