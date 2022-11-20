import React from "react";
import Calendar from "./Calendar";
import Form from "./Form";
import Historic from "./Historic";
import Graph from "./Graph"

function General() {

    return(
        <div>
            <Form />
            <Historic />
            <Calendar />
            <Graph />
        </div>
    );

}

export default General;