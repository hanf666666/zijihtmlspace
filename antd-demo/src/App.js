import logo from './logo.svg';
import './App.css';
import { privaterouters } from './routers';
import { Route, Switch, HashRouter as Router, Redirect } from 'react-router-dom';
import FrameOut from './component/FrameOut';
function App() {
  return (
    <FrameOut>

      <Router>
        <Switch>

           {
            privaterouters.map((item, index) => {
              return (//私有路由配置
                <Route key={item.path} path={item.path} component={item.component} />
              )
            })
          } 

          {/* 配置not found 和默认的/ */}
           <Redirect from='/business' to={privaterouters[0].path} exact></Redirect>
          <Redirect to='404' ></Redirect> 

        </Switch>
      </Router>

    </FrameOut>

  );
}

export default App;
