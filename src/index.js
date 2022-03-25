import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function Page(props) {
  return ( 
    <>
      <Header/>
      <Content/>
    </>
   );
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
)

