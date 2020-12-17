import reportWebVitals from './reportWebVitals';
import { Loading, LoadingMobile } from './loading';
import React from 'react';
import ReactDOM from 'react-dom';
import MobileDetect from 'mobile-detect';

//detect if mobile
//then load respective versions
var md = new MobileDetect(window.navigator.userAgent);
console.log(md.mobile())

//if (md.mobile()) {
if (true) {
  //if mobile
  //remove lower bar
  ReactDOM.render(
    <React.StrictMode>
      <LoadingMobile />
    </React.StrictMode>,
    document.getElementById('loading')
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Loading />
    </React.StrictMode>,
    document.getElementById('loading')
  );
}






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
