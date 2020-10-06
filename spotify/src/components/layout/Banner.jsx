import React from 'react';
import img from '../../imgs/banner.jpg';
import './css/Banner.css'

export default props =>
    <>
        <div className = "banner">
            <img src={img}/>
            <div class="Header">
                <a href="#default" class = "logo">NETFLIX</a>
                <div class="header-left">
                    <a href="#inicio">Início</a>
                    <a href="#series">Séries</a>
                    <a href="#filmes">Filmes</a>
                    <a href="#recentes">Mais Recentes</a>
                    <a href="#lista">Minha lista</a>
                </div>

                <div className="header-right">
                    <a href="#buscar">Buscar</a>
                    <a href="#infantil">INFANTIL</a>
                    <a href="#usuarios">Usuários</a>
                </div>
            </div>

            <div className="cont">
                <p className="titulo">{props.titulo}</p>
                <p>{props.description}</p>
                <p className="button-assistir">
                ▶️ Assistir
                </p>
                <p className="button-mais">
                ℹ  Mais informações</p>
            </div>
        </div>
    </>