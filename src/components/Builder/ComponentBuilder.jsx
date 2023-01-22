import React from 'react'
import './builder.css'
import UniLinares from '../../../public/unimarcLinares1.jpeg'
import Logo from '../../../public/unimarc-logo-data'

const ComponentBuilder = () => {
  return (
    <div className='builder-background'>
      <div className='popup-container'>
        <img className='LocalImage' src={UniLinares} alt="" />
        <div className="local-data">
          <div className="contenedor">
            <div className="data-header">
              <Logo className="back" />
              <div className="local-iden">
                <p>UNIMARC LINARES <b>#88</b></p>
                <p>MAIPU Nº 556, Linares, Maule - VII</p>
                <p>1266,8 m²</p>
              </div>
            </div>
            <div className="data-container">
              <p> - Tenemos </p>
              <p> - Cualquier</p>
              <p> - Datooooo</p>
              <p> - Oeeeeeeee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentBuilder