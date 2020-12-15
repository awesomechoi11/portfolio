import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import loadable from '@loadable/component'


import React from 'react';
import { IntroPage, SmallCard, AboutPage } from './components.js';
import throttle from 'lodash.throttle';


const OtherComponent = loadable(() => import('./OtherComponent'))

import preview1 from './previews/SIGN.jpg'
import preview2 from './previews/Seji-Preview-1.m4v'

import nomina1 from './previews/nomina-prev.jpg'
import nomina2 from './previews/nomina-prev.m4v'

import comingsoon from './comingsoon.jpg'

function lerp(xi, xf, a) {
  if (Math.abs(xf - xi) < 0.1) {
    return xf;
  }
  var maxspeed = 20;
  if (Math.abs(a * (xf - xi)) > maxspeed) {
    //console.log((xf - xi) / Math.abs(xf - xi))
    return ((xf - xi) / Math.abs(xf - xi)) * maxspeed + xi
  }
  return xi * (1 - a) + xf * a;
}

//handles sideways scrolling throttled
let posthrottle = throttle(function () {
  //length of the whole thing minus repeat fillers
  const smallcards = 4;
  const smallcardvw = 27;
  const smallcardpadding = 260;
  const aboutpagevw = 1500 / 19.2;
  const intropagevw = 90;
  const vwidth = (smallcardvw + smallcardpadding / 19.2) * smallcards + aboutpagevw + intropagevw;
  const whole = -vwidth / 100 * window.innerWidth

  var newpos = lerp(window.xpos, window.xdest, 0.05)

  if (newpos < whole) {
    newpos %= whole;// get new position on opposite side of window
    window.xdest %= whole;
  } else if (newpos > 0) {
    newpos = (newpos % whole) + whole;// get new position on opposite side of window
    window.xdest = (window.xdest % whole) + whole;
  }
  //smooth out position
  window.xpos = newpos
  document.getElementById('app').style.transform = 'translateX(' + window.xpos + 'px)'

  //these are vws
  const barlength = 93.125;
  const spacing = 3.4375;
  const tablength = 10000 / vwidth
  var left = (window.xpos / whole * barlength)
  var right = (left + tablength)
  if (right > barlength) {
    right = barlength;// prevent right side of bar exceeding the guide
    document.getElementById('scrollbar-tab').style.width = (barlength - left) + 'vw'

    //set the dummy bar
    document.getElementById('scrollbar-tab-dummy').style.width = (tablength - barlength + left) + 'vw'
  } else {
    document.getElementById('scrollbar-tab').style.width = tablength + 'vw'
    document.getElementById('scrollbar-tab-dummy').style.width = 0 + 'vw'

  }
  document.getElementById('scrollbar-tab').style.left = left + 'vw'


  posthrottle()
}, 10)



export class App extends React.Component {
  constructor() {
    super()
    window.xdest = 0;
    window.xpos = 0;
    window.mwheel = true;
  }


  componentDidMount() {
    window.appready = true
    if (window.scrollready) {

      requestAnimationFrame(posthrottle)
    }
    document.getElementById('root').addEventListener("wheel", event => {
      //if mousewheel is not disabled
      if (!window.mwheel) {
        return;
      }

      //positive = down = right
      const delta = Math.sign(event.deltaY);
      window.xdest += -delta * 100;
    });

  }

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




export class BottomScrollbar extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    window.scrollready = true
    if (window.appready) {
      requestAnimationFrame(posthrottle)

      //draggable scroll start *******************
      document.getElementById('scrollbar-tab').onmousedown = function (event) {
        const smallcards = 4;
        const smallcardvw = 27;
        const smallcardpadding = 260;
        const aboutpagevw = 1500 / 19.2;
        const intropagevw = 90;
        const vwidth = (smallcardvw + smallcardpadding / 19.2) * smallcards + aboutpagevw + intropagevw;
        const whole = -vwidth / 100 * window.innerWidth
        var initial = event.pageX
        var prev = event.pageX;
        function moveAt(pageX) {
          //change window xpos
          //console.log(initial - pageX, ' ', pageX - prev)
          window.xdest += ((pageX - prev) * 100 / 92 / window.innerWidth * whole)
          prev = pageX
        }
        function onMouseMove(event) {
          moveAt(event.pageX);
        }

        document.addEventListener('mousemove', onMouseMove);
        // (3) drop the ball, remove unneeded handlers
        document.onmouseup = function () {
          document.removeEventListener('mousemove', onMouseMove);
          document.getElementById('scrollbar-tab').onmouseup = null;
        };

      }
      document.getElementById('scrollbar-tab').ondragstart = function () {
        return false;
      };
      document.getElementById('scrollbar-tab-dummy').onmousedown = function (event) {
        const smallcards = 4;
        const smallcardvw = 27;
        const smallcardpadding = 260;
        const aboutpagevw = 1500 / 19.2;
        const intropagevw = 90;
        const vwidth = (smallcardvw + smallcardpadding / 19.2) * smallcards + aboutpagevw + intropagevw;
        const whole = -vwidth / 100 * window.innerWidth
        var initial = event.pageX
        var prev = event.pageX;
        function moveAt(pageX) {
          //change window xpos
          //console.log(initial - pageX, ' ', pageX - prev)
          window.xdest += ((pageX - prev) * 100 / 92 / window.innerWidth * whole)
          prev = pageX
        }
        function onMouseMove(event) {
          moveAt(event.pageX);
        }

        document.addEventListener('mousemove', onMouseMove);
        // (3) drop the ball, remove unneeded handlers
        document.onmouseup = function () {
          document.removeEventListener('mousemove', onMouseMove);
          document.getElementById('scrollbar-tab-dummy').onmouseup = null;
        };

      }
      document.getElementById('scrollbar-tab-dummy').ondragstart = function () {
        return false;
      };
      //draggable scroll end **********************
    }

  }
  left(index) {// calculates the left value for absolute positioning
    //relative to its index
    //console.log('index ', index)
    const smallcards = 4;
    const smallcardvw = 27;
    const smallcardpadding = 260;
    const aboutpagevw = 1500 / 19.2;
    const intropagevw = 90;
    const vwidth = (smallcardvw + smallcardpadding / 19.2) * smallcards + aboutpagevw + intropagevw;
    const whole = -vwidth / 100 * window.innerWidth
    const barlength = 93.125;
    const spacing = 3.4375;
    const tablength = 10000 / vwidth
    return ((-(90 + 13.5 - 50 + ((27 + (260 / 19.2)) * index)) / 100 * window.innerWidth) / whole * barlength) + (tablength / 2)
  }
  leftvw(vw) {// calculates the left value for absolute positioning
    //relative to its index
    const smallcards = 4;
    const smallcardvw = 27;
    const smallcardpadding = 260;
    const aboutpagevw = 1500 / 19.2;
    const intropagevw = 90;
    const vwidth = (smallcardvw + smallcardpadding / 19.2) * smallcards + aboutpagevw + intropagevw;
    const whole = -vwidth / 100 * window.innerWidth
    const barlength = 93.125;
    const spacing = 3.4375;
    const tablength = 10000 / vwidth
    return ((-(vw) / 100 * window.innerWidth) / whole * barlength) + (tablength / 2)
  }
  render() {
    const cardnames = ['seji', 'nomina', 'drop bot', 'misc'];

    return (
      <div className='scrollbar'>
        <div id='scrollbar-tab'>

        </div>
        <div id='scrollbar-tab-dummy'>

        </div>
        <div className='scrollbar-titles'>
          <span style={{ left: this.leftvw(0) + 'vw' }}>
            <span className='title-inner'
              onClick={() => {
                window.xdest = 0
              }}
            >
              home
              </span>
          </span>
          <span style={{ left: this.leftvw(222.83834614498173) + 'vw' }}>
            <span className='title-inner'
              onClick={() => {
                window.xdest = -222.83834614498173 / 100 * window.innerWidth
              }}
            >
              about
              </span>
          </span>
          {cardnames.map((name, index) =>
            <span key={index} left={this.left(index)} style={{ left: this.left(index) + 'vw' }}>
              <span className='title-inner'
                onClick={() => {
                  window.xdest = -(90 + 13.5 - 50 + ((27 + (260 / 19.2)) * index)) / 100 * window.innerWidth
                }}
              >
                {name}
              </span>
            </span>
          )}
        </div>
      </div>
    );
  }

}


