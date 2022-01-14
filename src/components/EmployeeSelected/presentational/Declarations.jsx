import React from "react";
import Sites from "./presentational/Sites";
import { array } from "../../../../mock/mock";
import "./Declarations.scss"

const Declarations = ({declarations}) => {
    console.log(declarations)
  return (
    <div className="declarations-container">
      <h2>Declaration Sites</h2>
      {array.length == 0 ? 
      <h5 className="declarations-container__dontfound" >Dont found sites</h5>
      :
      array.map((el) => {
        return (
        <div className="declarations" > 
            <ul className="declarations-contractor">
                <li>{`Contract Name: ${el.contractor_name}`}</li>
                <li>{`Contract Code: ${el.contractor_code}`}</li>
            </ul>
            <Sites sites={el.sites}/>
        </div>
        );
      })
      
      
    
    }
    </div>
  );
};

export default Declarations;
