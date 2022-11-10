import React from 'react'
import User from './user';
import {Galeria } from './Estilizados';
function Dados({users, dadosDoInput}) {
console.log(dadosDoInput)
  return (
   <>
    <Galeria>
      {users.map((user,index)=>
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