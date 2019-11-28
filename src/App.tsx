import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  iframeParam?: string,
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

const App: React.FC<AppProps> = () => {
  console.log(getParamValue('userToken'))
  const iframeParam= getParamValue('userToken');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Param: <code className="code">{iframeParam || 'nenhum parâmetro recebido'}</code>
        </p>
      </header>
    </div>
  );
}


export default App;
