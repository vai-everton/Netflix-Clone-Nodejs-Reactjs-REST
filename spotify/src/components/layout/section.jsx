import React from 'react';
import './css/Section.css'

export default props =>
    <div>
        <table>
        <div>
            <h3>{props.titulo}</h3>
        </div>
        <div className="line-content">
            {props.children}
        </div>
        
        </table>
        
    </div>