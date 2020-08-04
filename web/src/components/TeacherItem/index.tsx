import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherItem: React.FC = ()=> {
    return (
        <article className="teacher-item">
        <header>
          <img src="https://avatars2.githubusercontent.com/u/53010824?s=400&u=40f41a9ce155fe1a214f422849ad88fd7f0b9710&v=4" alt="avatar" />
          <div>
            <strong>Willian</strong>
            <span>Química</span>
          </div>
        </header>
  
        <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br></br>
          Apaixonado por explodir coisas em laboratório e por mudar
          a vida 
        </p>
        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsAppIcon} alt="whatsapp"/>
              Entrar em contato
          </button>
        </footer>
      </article>
    )
}

export default TeacherItem