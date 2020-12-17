import './mobileapp.scss';
import React from 'react';
import { IntroPage, SmallCard, AboutPage } from './mobile.js';


import preview1 from '../previews/SIGN.jpg'
import preview2 from '../previews/Seji-Preview-1.m4v'
import nomina1 from '../previews/nomina-prev.jpg'
import nomina2 from '../previews/nomina-prev.m4v'
import comingsoon from '../comingsoon.jpg'



export class App extends React.Component {

    render() {

        return (
            <div
                id='app'
                className="App">

                <IntroPage></IntroPage>
                <SmallCard index='0' preview={preview1} video-preview={preview2}
                    enabled='true'
                    title="SEJI"
                    role="FRONT END"
                    desc="Seji is a digital media production company. I emulated a modern minimalist design to attract the most attention to their work. I made up Seji to test new designs and interactive components."
                    year="2020"
                ></SmallCard>
                <SmallCard index='1' preview={nomina1} video-preview={nomina2}
                    enabled='true'
                    title="NOMINA"
                    role="FRONT END"
                    desc="Nomina is a high end jewelry company. I incorporated elegent and simplistic animations and interactions."
                    year="2020"
                ></SmallCard>
                <SmallCard index='2' preview={comingsoon} video-preview={preview2}
                    enabled='false'
                    title="COMING SOON"
                    role="FRONT END + BACK END"
                    desc="I made a highly versatile clothing scalper of a popular clothng brand called Supreme. BTW i never used or lent it to anyone!"
                    year="2018"
                ></SmallCard>
                <SmallCard index='3' preview={comingsoon} video-preview={preview2}
                    enabled='false'
                    title="COMING SOON"
                    role="BACK END"
                    desc="Here are some miscellaneous goodies I made in highschool."
                    year="2018"
                ></SmallCard>
                <AboutPage></AboutPage>
                <IntroPage></IntroPage>
                <SmallCard index='0' preview={preview1} video-preview={preview2}
                    enabled='true'
                    title="SEJI"
                    role="FRONT END"
                    desc="Seji is a digital media production company. I emulated a modern minimalist design to attract the most attention to their work. I made up Seji to test new designs and interactive components."
                    year="2020"
                ></SmallCard>


            </div>
        );
    }
}
