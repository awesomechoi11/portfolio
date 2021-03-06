import './mobile-components.scss';
import React from 'react';
import ReactDOM from 'react-dom';



import sejivideo1 from '../seji/Zoomfeature-1.mp4'
import sejivideo2 from '../seji/Carousel-1.m4v'
import sejivideo3 from '../seji/Contact-1.mp4'

import nomi1 from '../nomina/nomi-para.m4v'
import nomi2 from '../nomina/nomi-hover.m4v'
import nomi3 from '../nomina/nomi-title.m4v'



import anime from 'animejs';




import resume from '../Resume.pdf'

export class IntroPage extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="intropage">
                <div className='intropage-inner'>

                    <span className="big-name">
                        Brandon Choi

                </span>
                    <div className='name-underline'>
                    </div>
                    <div className="desc">
                        I am a Front-end developer, looking for a full time position.
                </div>
                </div>
            </div>
        );
    }
}

export class AboutPage extends React.Component {


    render() {
        return (
            <div className="aboutpage">
                <div className='message'>

                    Hello!<br />
                    My name is Brandon Choi.<br />
                    I am a front-end developer currently looking for an internship.<br /><br />
                    take a peek at my &nbsp;
                    <span
                        onClick={() => {
                            window.open(window.location.origin + resume)
                        }}
                        className='resume'>
                        resume
                    </span>
                    &nbsp; or my &nbsp;
                    <span
                        onClick={() => {
                            window.open('https://github.com/awesomechoi11')
                        }}
                        className='resume'>
                        github!
                    </span>
                </div>



            </div>
        );
    }
}

export class SmallCard extends React.Component {

    constructor(props) {
        super(props)
        this.index = Number(this.props.index);
        //console.log(this.props)
        this.uwu = {}
        if (this.props.enabled == 'false') {

            this.uwu = { left: '0px' }
        }
        //console.log(this.uwu)
    }


    render() {
        return (
            <div className="small-card">
                <div className='card-inner'>

                    <div className="preview" onClick={() => {
                        //disable mwheel
                        let owo = this.props.enabled //if card is enabled
                        if (owo == 'true') {

                            ReactDOM.render(
                                <ProductPage index={this.index} preview={this.props['video-preview']}
                                    title={this.props.title}
                                    role={this.props.role}
                                    year={this.props.year}
                                    desc={this.props.desc}
                                />,
                                document.getElementById('product-wrapper')
                            );


                        }

                    }}>
                        <img
                            style={this.uwu}
                            src={this.props.preview}>
                        </img>

                    </div>
                    <div className="card-info">
                        <span className="card-header secular">
                            <span className='card-header-left'>
                                <span className="card-title">
                                    {this.props.title}
                                </span>
                                <span>
                                    •
                                </span>
                                <span className='card-role'>
                                    {this.props.role}
                                </span>
                            </span>
                            <span className='card-header-left card-year'>
                                {this.props.year}
                            </span>
                        </span>
                        <div className='card-desc'>
                            {this.props.desc}
                        </div>

                    </div>

                </div>

            </div >
        );
    }
}


export class Hamburger extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {

    }

    render() {

        return (
            <div className={this.props.children}>

            </div>
        );
    }
}

class ProductPage extends React.Component {

    constructor(props) {
        super(props)
        this.closeanim = this.closeanim.bind(this);
        //this.productname = this.props.productname;
        //console.log(this.props)
        const index = this.props.index;
        var name = 'productitems ';
        if (index == 0) {//seji
            name = 'productitems seji'
            this.content =
                <div preview={this.props.preview} className='seji-wrapper'>
                    <div className={name + 1}></div>
                    <div className={name + 2}></div>
                    <div className={name + 3}></div>
                    <div className={name + 4}
                        dangerouslySetInnerHTML={{
                            __html: `
                            <video    loop  muted  autoplay playsinline><source src="${sejivideo1}" type="video/mp4" />
                            </video>`
                        }}
                    >
                    </div>
                    <div className={name + 5}
                        dangerouslySetInnerHTML={{
                            __html: `
                            <video
                            loop
                            muted
                            autoplay
                            playsinline
                            >
                            <source src="${sejivideo2}" type="video/mp4" />
                            </video>`
                        }}
                    >
                    </div>
                    <div className={name + 6}
                        dangerouslySetInnerHTML={{
                            __html: `
                            <video
                            loop
                            muted
                            autoplay
                            playsinline
                            >
                            <source src="${sejivideo3}" type="video/mp4" />
                            </video>`
                        }}
                    >
                    </div>
                </div>
        } else if (index == 1) {//nominal
            name += 'nominal'
            this.content =
                <div preview={this.props.preview} className='nominal-wrapper'>
                    <div className={name + 1}></div>
                    <div className={name + 2}></div>
                    <div className={name + 3}></div>
                    <div className={name + 4}
                        dangerouslySetInnerHTML={{
                            __html: `  <video  loop  muted autoplay playsinline > <source src="${nomi2}" type="video/mp4" /> </video>`
                        }}
                    >
                    </div>
                    <div className={name + 5}
                        dangerouslySetInnerHTML={{
                            __html: `  <video  loop  muted autoplay playsinline > <source src="${nomi1}" type="video/mp4" /> </video>`
                        }}
                    >
                    </div>
                    <div className={name + 6}
                        dangerouslySetInnerHTML={{
                            __html: `  <video  loop  muted autoplay playsinline > <source src="${nomi3}" type="video/mp4" /> </video>`
                        }}
                    >
                    </div>
                </div>
        } else if (index == 2) {//drop bot
            name += 'drop'
            this.content =
                <div preview={this.props.preview} className='seji-wrapper'>
                    <div className={name + 1}></div>
                    <div className={name + 2}></div>
                    <div className={name + 3}></div>
                    <div className={name + 4}>
                        dangerouslySetInnerHTML={{
                            __html: `
                            <video
                            loop
                            muted
                            autoplay
                            playsinline
                            >
                            <source src="${sejivideo1}" type="video/mp4" />
                            </video>`
                        }}
                    </div>
                    <div className={name + 5}>
                        <video src={sejivideo2} playsinline />
                    </div>
                    <div className={name + 6}>
                        <video src={sejivideo3} playsinline />
                    </div>
                </div>
        } else if (index == 3) {//misc

        }

    }

    componentDidMount() {



        anime.timeline({

        }).add({
            targets: '.cls-1',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 300,
            direction: 'alternate',
            loop: true

        }).add({
            targets: '#product-wrapper',
            easing: 'easeInOutSine',
            duration: 300,
            opacity: [0, 1],

        }, 0)
    }


    closeanim() {

        var container = document.getElementById('product-wrapper');

        anime.timeline({
            easing: 'cubicBezier(.16,.69,.21,.99)',
            duration: 500
        }).add({
            targets: container,
            top: window.innerHeight,
            opacity: [1, 0],
            complete: function (anim) {
                ReactDOM.unmountComponentAtNode(container)
            }
        })

    }

    render() {

        return (
            <div id='productpage' className='product-page'>

                <div className='product-controls'>
                    <div
                        onClick={this.closeanim}
                        className='close'>
                        <svg id="close-button" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51"

                        >
                            <title>close1</title>
                            <polyline className="cls-1" points="25.5 25.5 0.5 50.5 0.5 0.5" />
                            <polyline className="cls-1" points="25.5 25.5 0.5 0.5 50.5 0.5" />
                            <polyline className="cls-1" points="25.5 25.5 50.5 0.5 50.5 50.5" />
                            <polyline className="cls-1" points="25.5 25.5 50.5 50.5 0.5 50.5" />
                        </svg>

                    </div>
                    <div className='previous'>

                    </div>
                    <div className='next'>

                    </div>
                </div>
                <div id='product-inner' className='product-inner' >
                    <div className='product-preview'>

                        <div className='product-preview-inner'
                            dangerouslySetInnerHTML={{
                                __html: `  <video  loop  muted autoplay playsinline > <source src="${this.props.preview}" type="video/mp4" /> </video>`
                            }}
                        >


                        </div>
                    </div>

                    <div className='product-info'>
                        <div className='product-header'>
                            <span className='product-header-left'>

                                <span className="product-title">
                                    {this.props.title}
                                </span>

                                <span>
                                    •
                                </span>

                                <span className='product-role'>
                                    {this.props.role}
                                </span>
                            </span>
                            <span className='product-header-left product-year'>
                                {this.props.year}
                            </span>
                        </div>
                    </div>
                    <div className='product-gallery'>
                        {this.content}
                    </div>
                </div>

            </div>
        )
    }


}



/*
export class Indletters extends React.Component {
                        constructor(props) {
                        super(props)
        console.log(this.props.children.split(''))
    }
    componentDidMount() {

                    }

    render() {

        return (
            <div className={this.props.children}>
                        {this.props.children.split('').map((letter, index) => (
                            <span key={index}>{letter} </span>
                        ))}
                    </div>
        );
    }
}

export class Filler extends React.Component {
                        constructor() {
                        super()
        this.hexCode = "0123456789ABCDEF";
        this.color = "#";
        for (let i = 0; i < 6; i++)
            this.color += this.hexCode[Math.floor(Math.random() * 16)];
    }
    render() {

        return (
            <div
                        style={{ background: this.color }}
                        className="filler">
                    </div>
        );
    }
}

*/