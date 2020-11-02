import React from "react";
import map from "../assets/map-screenshot.png"
import pin from "../assets/pin.png"

export class Map extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {
        return <>
            <img src={map} style={{width: "100%"}}/>
            <img src={pin} style={{width: "75px", position: "absolute", top: 100, left: 1000}}/>
            <img src={pin} style={{width: "75px", position: "absolute", top: 800, left: 825}}/>
            <img src={pin} style={{width: "75px", position: "absolute", top: 796, left: 405}}/>
            <img src={pin} style={{width: "75px", position: "absolute", top: 675, left: 980}}/>
            <img src={pin} style={{width: "75px", position: "absolute", top: 282, left: 975}}/>
            <img src={pin} style={{width: "75px", position: "absolute", top: 587, left: 862}}/>
            <img src={pin} style={{width: "75px", position: "absolute", top: 24, left: 1300}}/>
        </>
    }
}