import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import React from 'react';
import { IntroPage, SmallCard, AboutPage } from './components.js';
import throttle from 'lodash.throttle';


//const OtherComponent = loadable(() => import('./OtherComponent'))

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



//global variables for window scrolling
//calculated vw values
const smallcards = 4;
const smallcardvw = 27;
const smallcardpadding = 260 / 19.2;//260 px to vw
const aboutpagevw = 1500 / 19.2;
const intropagevw = 90;
const vwidth = (smallcardvw + smallcardpadding) * smallcards + aboutpagevw + intropagevw;
//const whole = -vwidth / 100 * window.innerWidth
//const barlength = 93.125;
//const spacing = 3.4375;
//const tablength = 10000 / vwidth

window.scrollvar = {
  smallcards: 4,//
  smallcardvw: 27,
  smallcardpadding: 260 / 19.2,
  aboutpagevw: 1500 / 19.2,
  intropagevw: 90,
  vwidth: (smallcardvw + smallcardpadding) * smallcards + aboutpagevw + intropagevw,
  whole: function () {//px value of vwdith
    return -window.scrollvar.vwidth / 100 * window.innerWidth
  },
  barlength: 93.125,
  spacing: 3.4375,
  tablength: 10000 / vwidth,
  pxtovw: function () {
    return 1;
  }
}

//handles sideways scrolling throttled
let posthrottle = throttle(function () {
  //length of the whole thing minus repeat fillers


  var newpos = lerp(window.xpos, window.xdest, 0.05)

  if (newpos < window.scrollvar.whole()) {
    newpos %= window.scrollvar.whole();// get new position on opposite side of window
    window.xdest %= window.scrollvar.whole();
  } else if (newpos > 0) {
    newpos = (newpos % window.scrollvar.whole()) + window.scrollvar.whole();// get new position on opposite side of window
    window.xdest = (window.xdest % window.scrollvar.whole()) + window.scrollvar.whole();
  }
  //smooth out position
  window.xpos = newpos
  document.getElementById('app').style.transform = 'translateX(' + window.xpos + 'px)'

  //these are vws
  var left = (window.xpos / window.scrollvar.whole() * window.scrollvar.barlength)
  var right = (left + window.scrollvar.tablength)
  if (right > window.scrollvar.barlength) {
    right = window.scrollvar.barlength;// prevent right side of bar exceeding the guide
    document.getElementById('scrollbar-tab').style.width = (window.scrollvar.barlength - left) + 'vw'

    //set the dummy bar
    document.getElementById('scrollbar-tab-dummy').style.width = (window.scrollvar.tablength - window.scrollvar.barlength + left) + 'vw'
  } else {
    document.getElementById('scrollbar-tab').style.width = window.scrollvar.tablength + 'vw'
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
      window.xdest -= delta * 70 * (window.innerWidth / 1000);//scrolling is now responsive
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
    this.mousedragevent = this.mousedragevent.bind(this)

  }


  //on drag of bottom white bar,
  // track and change window dest
  mousedragevent(event) {
    //need to track difference
    var initial = event.pageX
    var prev = event.pageX;


    //using let so it can be referenced to remove listener
    let onMouseMove = function onMouseMove(event) {
      window.xdest += ((event.pageX - prev) * 100 / 92 / window.innerWidth * window.scrollvar.whole())
      prev = event.pageX
    }

    document.addEventListener('mousemove', onMouseMove);
    // remove unneeded handlers
    function removeListeners() {
      document.removeEventListener('mousemove', onMouseMove);
      document.getElementById('scrollbar-tab').onmouseup = null;
    }
    //need to bind to remove specific function from listener
    document.onmouseup = removeListeners.bind(onMouseMove)

  }

  componentDidMount() {
    window.scrollready = true
    if (window.appready) {
      requestAnimationFrame(posthrottle)

      //draggable scroll start *******************
      document.getElementById('scrollbar-tab').onmousedown = this.mousedragevent
      document.getElementById('scrollbar-tab').ondragstart = function () {
        return false;
      };
      document.getElementById('scrollbar-tab-dummy').onmousedown = this.mousedragevent
      document.getElementById('scrollbar-tab-dummy').ondragstart = function () {
        return false;
      };
      //draggable scroll end **********************
    }

  }
  left(index) {// calculates the left value for absolute positioning
    //relative to its index
    //console.log('index ', index)

    return ((-(window.scrollvar.intropagevw + window.scrollvar.smallcardvw / 2 - 50 + ((window.scrollvar.smallcardvw + window.scrollvar.smallcardpadding) * index)) / 100 * window.innerWidth) / window.scrollvar.whole() * window.scrollvar.barlength)
      + (window.scrollvar.tablength / 2)

  }
  leftvw(vw) {// calculates the left value for absolute positioning
    //relative to its index

    return ((-(vw) / 100 * window.innerWidth) / window.scrollvar.whole() * window.scrollvar.barlength) + (window.scrollvar.tablength / 2)
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
                  window.xdest = -((window.scrollvar.intropagevw + window.scrollvar.smallcardvw / 2 - 50 + ((window.scrollvar.smallcardvw + window.scrollvar.smallcardpadding) * index)) / 100 * window.innerWidth)
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


