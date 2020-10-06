import React from 'react';


import './app.css'

import Banner from './components/layout/Banner.jsx'
import Section from './components/layout/section.jsx'
import Card from './components/layout/Card';
import MovieInput from './components/layout/MovieInput.jsx'


export default props =>

    <div className="App">

        <Banner titulo = "Dexter" description = "Dexter é um especialista forense que passa o dia solucionando crimes e a noite cometendo assassinatos. Inteligente e bonito, o assassino em série vive em conflito com seu instinto de matador e o desejo pela felicidade."/>

        <Section titulo="Continuar assistindo como Usuario">
            <Card />
            <Card />
            <Card />
            <Card />
        </Section>

        <Section titulo="Séries">
            <Card />
            <Card />
            <Card />
            <Card />
        </Section>
        
        <Section titulo="Filmes">
            <Card />
            <Card />
            <Card />
            <Card />
        </Section>

        <Section titulo="Mais recentes">
            <Card />
            <Card />
            <Card />
            <Card />
        </Section>

        <Section titulo="Minha lista">
            <Card />
            <Card />
            <Card />
            <Card />
        </Section>

        <MovieInput />
    </div>