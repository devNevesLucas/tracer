import React, { useState } from "react";
import './Form.css';

function Form() {


    const [monetaryValue, setMonetaryValue] = useState(0);
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [movementDate, setMovementDate] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(monetaryValue, type, description, movementDate);
    }
    
    return(
        <div className="Form">
            <form className="Formulario" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="row--group__config">
                        <label className="Form--monetaryValue">Value:</label>          
                        <input required
                            name="monetaryValue"
                            type="number"
                            onChange={(e: any) => setMonetaryValue(e.target.value)}
                        />
                    </div>
                    <div className="row--group__config">
                        <label className="Form--type">Type:</label>                     
                        <select required onChange={(e: any) => setType(e.target.value)}>
                            <option value="moneyIn">money In</option>
                            <option value="moneyOut">money Out</option>
                        </select>     
                    </div>
                    <div className="row--group__config">
                        <label className="Form--date">Date:</label>
                        <input required
                            name="movementDate"
                            type="date" 
                            onChange={(e: any) => setMovementDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <label className="Form--description">
                        Description:
                        <input required
                            name="descripton" 
                            type="text" 
                            onChange={(e: any) => setDescription(e.target.value)}
                            />
                    </label>
                    <input type="submit" value="submit"></input>
                </div>
            </form>
        </div>
    );
}


export default Form;