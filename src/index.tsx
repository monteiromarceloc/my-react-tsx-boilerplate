import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

type AppProps = {
    iframeParam: string,
}

// GET IFRAME PARAM
let getParamValue = function(paramName: string)
{
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++) 
    {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] === paramName) 
            console.log(pArr[1]);
            return pArr[1]; //return value
    }
}

const userToken = getParamValue('userToken');

ReactDOM.render(<App iframeParam={userToken} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
