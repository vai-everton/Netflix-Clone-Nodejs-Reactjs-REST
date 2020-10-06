import React from 'react';

import './css/Header.css'

export default props =>
    <>
    <div className="center">
        <div class="Header">
            <div class="header-left">
                <a href="#default" class = "logo">NETFLIX</a>
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
    </div>
    </>