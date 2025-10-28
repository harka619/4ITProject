import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { YourContextProvider } from './context'; // Adjust the import based on your context file location
import Routes from './pages'; // Import the main routes from pages

const App: React.FC = () => {
    return (
        <YourContextProvider>
            <Router>
                <Routes />
            </Router>
        </YourContextProvider>
    );
};

export default App;