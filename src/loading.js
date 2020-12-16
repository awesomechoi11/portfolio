import loadable from '@loadable/component'
//import { App, BottomScrollbar } from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './loading.scss';
import ReactFontLoader from 'react-font-loader'
import anime from 'animejs';




/*

App.load().then((args) => {
    console.log(args.App)
    ReactDOM.render(
        <React.StrictMode>
        <args.BottomScrollbar />
        </React.StrictMode>,
        document.getElementById('scrollbar')
        );
        ReactDOM.render(
            <React.StrictMode>
            <args.App />
            </React.StrictMode>,
            document.getElementById('root')
            );
        })
        */


export class Loading extends React.Component {

    constructor() {
        super()
        this.App = loadable(() => import('./App'))
        this.loadApp = function () {
            this.load().then((args) => {
                ReactDOM.render(
                    <React.StrictMode>
                        <args.BottomScrollbar />
                    </React.StrictMode>,
                    document.getElementById('scrollbar')
                );
                ReactDOM.render(
                    <React.StrictMode>
                        <args.App />
                    </React.StrictMode>,
                    document.getElementById('root')
                );
            })
        }.bind(this.App)
    }


    componentDidMount() {
        //setTimeout(this.loadApp, 1000)
        this.loadApp();
        const totaldur = 2000
        anime.timeline({

        }).add({
            delay: totaldur / 3,
            targets: '#name-underline',
            easing: 'cubicBezier(.16,.69,.21,.99)',
            //easing: 'linear',
            width: ['0vw', '46.77083vw'],
            duration: totaldur / 3
        }).add({
            targets: '.bchoiletter',
            easing: 'cubicBezier(.16,.69,.21,.99)',
            delay: anime.stagger(41),
            translateY: ['20vw', '0vw'],
            duration: totaldur / 3
        }, totaldur / 3).add({
            targets: '#intropage-inner',
            easing: 'cubicBezier(.16,.69,.21,.99)',
            'padding-left': ['26.614585vw', '3.80208vw'],
            duration: totaldur / 3
        }).add({
            targets: '#scrollbar',
            easing: 'cubicBezier(.16,.69,.21,.99)',
            bottom: ['-80px', '0px'],
            duration: totaldur / 3
        }).add({
            targets: '#loading',
            easing: 'cubicBezier(.16,.69,.21,.99)',
            opacity: [1, 0],
            duration: totaldur / 3,
            complete: function (anim) {
                document.getElementById('loading').style.pointerEvents = 'none'
            }
        }, '-=' + totaldur / 3)
    }

    render() {

        return (
            <div className='loading'>
                <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Scheherazade&family=Secular+One&family=Sen:wght@400;700&family=Staatliches&display=swap' />
                <div className="intropage">
                    <div id='intropage-inner'>

                        <span className="big-name">
                            <Indletters>
                                Brandon Choi
                           </Indletters>

                        </span>
                        <div id='name-underline'>
                        </div>
                        <div className="desc">
                            I am a Front-end developer, looking for a full time position.
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
class Indletters extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.children.split(''))
    }
    componentDidMount() {

    }

    render() {

        return (
            <div className={this.props.children}>
                {this.props.children.split('').map((letter, index) => {
                    if (letter == ' ') {
                        return <div style={{ float: 'left' }} key={index} className='bchoiletter'> &nbsp;</div>
                    }
                    return <div style={{ float: 'left' }} key={index} className='bchoiletter'>{letter} </div>
                })}
            </div>
        );
    }
}