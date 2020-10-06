import React from 'react';
import './css/card.css'
import photo from '../../imgs/img-2.jpg'

export default props =>
    <div className="Card">
        <div className="Conteudo">
            <img src={photo} alt=""/>
        </div>
    </div>