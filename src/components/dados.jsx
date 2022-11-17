import React from 'react'
import User from './user';
import {Galeria } from './Estilizados';
function Dados({users, dadosDoInput}) {
console.log(dadosDoInput)
  return (
   <>
    <Galeria>
      {users.filter((user)=>
        user.name.first.toLowerCase().includes(dadosDoInput.nome.toLowerCase()) &&
        user.dob.age == dadosDoInput.idade &&
        user.nat.toUpperCase().includes(dadosDoInput.pais.toUpperCase())
      )
        
      
      .map((user,index)=>
      <User
      
      user={user}
      key={index}
      />
      )}
    </Galeria>
   </>
  )
}

export default Dados