import fetchData from './api/index';
import React, {useState, useEffect} from 'react';
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const [yearChart, setYearChart] = useState(2020);

  useEffect(()=> {
    let albums = fetchData().then((result) => {
      setYearChart(result.data);
    });
  })

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/home" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
