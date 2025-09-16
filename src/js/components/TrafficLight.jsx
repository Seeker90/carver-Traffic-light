import "../../styles/trafficLight.css"
import { useState } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState('')
    return(
        <>
            <div className="traffic-light-stem "></div>
            <div className="traffic-light-body">
                <div 
                    className={`color ${color === "red" ? "light red selected" : "light red"}`}
                    onClick={() => setColor("red")}
                ></div>
                <div 
                    className={`color ${color === "yellow" ? "light yellow selected" : "light yellow"}`}
                    onClick={() => setColor("yellow")}
                ></div>
                <div 
                    className={`color ${color === "green" ? "light green selected" : "light green"}`}
                    onClick={() => setColor("green")}
                ></div>
            </div>
        </>
)
}
export default TrafficLight;