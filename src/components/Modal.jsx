import React from 'react'
import "./Modal.css"
import { ModalBackground } from '../components/Estilizados.jsx'
function Modal({user,setShowModal}) {
  console.log(user)
  return (
    <div className='modalBackground'>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={ ()=>setShowModal(false)}
          >
            Sair
          </button>
          <div>
            <div>  1' 
              <img src={user.pictures.large} alt="" />
            </div>
            <div>
              <texto>
              {user.name.fist+''+ user.name.last} 
              </texto>
            <text>
              {user.location.country}
            </text>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal