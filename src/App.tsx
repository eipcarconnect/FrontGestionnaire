import React, {useState} from 'react';
import logo from './assets/CarConnect.png';
import './App.css';
import { Vehicule } from './pages/Vehicule';
import {Map} from "./pages/Map";

function App() {
    let [page, setPage] = useState("Vehicules")
    let content
    switch (page) {
        case "Vehicules":
            content = <Vehicule />
            break
        case "Map":
            content = <Map />
            break
        case "Factures":
            content = <>
                <p>Factures</p>
            </>
            break
        default:
            content = <>
                <p>Unknown page</p>
            </>

    }

    return (
        <div className="App">
            <div className="Drawer">
                <div className="DHeader">
                    <img id="logo" src={logo} height={100}/>
                    <div className="HeaderInfos">
                        <p>USER</p>
                        <p>USER NAME</p>
                        <p>NB VEHICULE</p>
                    </div>
                </div>
                <div className="DrawerOptions">
                    <p onClick={()=>setPage("Vehicules")}>Vehicules</p>
                    <p onClick={()=>setPage("Map")}>Map</p>
                    <p onClick={()=>setPage("Factures")}>Factures</p>
                </div>
            </div>
            <div className="Content">
                {content}
            </div>
        </div>
    );
}

export default App;
