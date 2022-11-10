import { useState,useEffect } from "react"

function Filtros(props) {
    const [EstadosInput,setEstadosInput] = useState({idade: 0,nome:'',pais:''})

    useEffect(()=>{
        props.EnvioEstados(EstadosInput)
    })

  return (
    <div>
        <input
            type= "number"
            placeholder="Escolha uma idade"
            onChange={(e)=> setEstadosInput({...EstadosInput,idade: e.target.value})}
            
            />
         <input
            type= "text"
            placeholder="Escolha uma nome"
            onChange={(e)=> setEstadosInput({...EstadosInput,nome: e.target.value})}
            
            />
             <input
            type= "text "
            placeholder="Escolha uma pais"
            onChange={(e)=> setEstadosInput({...EstadosInput,pais: e.target.value})}
            
            />
    </div>
  )
}

export default Filtros