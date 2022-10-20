import React from 'react'
import { Quadro } from './Estilizados'
import {Foto} from './Estilizados'
import { TextoPerfil } from './Estilizados'
function User(props) {
  let nome= props.user.name.first
  let sobrenome= props.user.name.last
  let titulo= props.user.name.title
  let imagem= props.user.picture.large
  let idade= props.user.dob.age
  let telefone= props.user.cell
  let pais= props.user.location.country

  return (
    <> 
    <Quadro>
      <TextoPerfil> {titulo} {nome} {sobrenome}</TextoPerfil>
      <Foto src={imagem}  alt=""/>
      <TextoPerfil>{idade}anos {telefone} {pais} </TextoPerfil>
    </Quadro>
    </>

  )
}

export default User