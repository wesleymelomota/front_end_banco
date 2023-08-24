import { Component } from "react"
import Filter from "../filter/Filter"
import "./main.css"

export default class Main extends Component  {
    
    render(){

        return(
            <div className="main-content">
                
                <div className="d-flex flex-column justify-content-evenly">
                <Filter></Filter>
                
                </div>
            </div>
        )
    }
}