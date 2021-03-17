import Landing from "./pages/Landing"
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    return (
        // Navigation Bar Component
        <Router>
            <div>
                <Route path="/" component={Landing} />
            </div>
        </Router>
    );
}

export default App;
