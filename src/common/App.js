import React, {useState , useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
// import { DisplayContext } from '../screens/home/DisplayImageList';

function App(props) {
    console.log("in App");
    console.log(props.moviesData);

    return(
        <Router>
            <Routes>
                <Route path ="/"  element = {<Home />} />
                <Route path ="/Details/:id" element = {<Details />} />
            </Routes>
    </Router>
    )
}
export default App;