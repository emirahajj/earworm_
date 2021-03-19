import Landing from "./pages/Landing"
import Home from "./pages/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
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
