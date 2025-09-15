import React from "react";


import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import One from './one';
import Onenote from "./onenotes";
import Rajitha from "./rajitha";

function Amarbar(){
    return (
        <nav style={{padding:'10px', background:'#eee'}}>
            <Link to="/" style={{ margin: '10px' }}>Home</Link>
            <link to="/" style={{margin:'10px'}}>One</link>
            <Link to="/" style={{margin:'10px'}}>Onenote</Link>
            <Link to ="/" style={{margin:'10px'}}>Rajitha</Link>

        </nav>

    );
}

// Dummy Components
function Home() { return <h2>Amar Page</h2>; }

function Amarapp(){

    return(
        <Router>
            <Amarbar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/One" element={<One/>}/>
                <Route path="/Onenote" element={<Onenote/>}/>
                <Route path="/Rajitha" element={<Rajitha/>}/>

            </Routes>

        </Router>

    );

}
export default Amarapp;
