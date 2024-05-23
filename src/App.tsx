import React, {lazy} from 'react';
import './App.css';

const NavBar = lazy(() => import('./components/layout/nav.bar'))
const Home = lazy(() => import('./containers/home'))

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
    </div>
  );
}

export default App;
