import {useState,useEffect} from "react"
import Dados from "./components/dados";
import  Axios  from 'axios';
import "./App.css";
import { Fundo } from "./components/Estilizados";
function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    Axios.get("https://randomuser.me/api/?results=284")
      .then(res => setUsers(res.data.results))
      .catch(err => console.log("erro em pegaros usuarios" ,err))
  },[]
  
  )
  return (
    <>
    <Fundo>
      <Dados
        users={users}
      />
    </Fundo>
    </>
  );
}

export default App;
