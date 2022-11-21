import React from "react";
import Calendar from "./Calendar";
import Form from "./Form";
import Historic from "./Historic";
import Graph from "./Graph"
import './General.css';

function General() {

    return(
        <div className="General">
            <Form />
            <Historic />
            <Calendar />
            <Graph />
        </div>
    );

}

export default General;