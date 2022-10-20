import React from 'react'
import User from './user';
import {Galeria } from './Estilizados';
function Dados({users}) {
  return (
   <>
    <Galeria>
      {users.map((user)=>
      <User
      
      user={user}
      key={user.id}
      />
      )}
    </Galeria>
   </>
  )
}

export default Dados