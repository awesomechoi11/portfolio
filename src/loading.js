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
        anime.timeline({

        }).add({
            delay: 1000,
            targets: '#name-underline',
            easing: 'cubicBezier(.16,.69,.21,.99)',
            width: ['0vw', '46.77083vw'],
            duration: 1000
        }).add({
            targets: '#intropage-inner',
            easing: 'cubicBezier(.16,.69,.21,.99)',
            'padding-left': ['26.614585vw', '3.4375vw'],
            duration: 1000
        }).add({
            targets: '#scrollbar',
            easing: 'cubicBezier(.16,.69,.21,.99)',
            bottom: ['-80px', '0px'],
            duration: 1000
        })
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
                        return <div style={{ float: 'left' }} key={index}> &nbsp;</div>
                    }
                    return <div style={{ float: 'left' }} key={index}>{letter} </div>
                })}
            </div>
        );
    }
}