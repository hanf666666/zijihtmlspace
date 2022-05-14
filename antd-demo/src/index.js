import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Switch, HashRouter as Router, Redirect } from 'react-router-dom';
import { commonrouters, privaterouters } from './routers';
import { login } from './views';
import '../src/css/index.css';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Router>
    <Switch>

      <Route path='/business' render={(rootprops) => {
        return (<App {...rootprops}></App>)//私有是登录后才能访问
      }} />


      {
        commonrouters.map((item, index) => {
          return (//公共路由配置
            <Route key={item.path} path={item.path} component={item.component} />
          )
        })
      }

      {/* 配置not found 和默认的/ */}
      <Redirect from='/' to='admin' exact></Redirect>
      <Redirect to='404' ></Redirect>

    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
