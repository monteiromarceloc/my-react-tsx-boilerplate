import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  iframeParam?: string,
}

const App: React.FC<AppProps> = (props) => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Param: <code className="code">{props.iframeParam || 'nenhum parâmetro recebido'}</code>
        </p>
      </header>
    </div>
  );
}


export default App;
