import React from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap';

    function Dropedowndata (props){
        
        return (
            <div>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                {
                    props.data.map(fund=>(
                        <>
                      <Dropdown.Item href="#/action-1" name={fund.Amount} onClick={props.ChangeHandler}>{fund.AcountNumber}</Dropdown.Item>
                       </>
               
                    ))
                 
                }
                </DropdownButton>
               <p>The Amount is {props.value}</p>
            </div>
        );
}

export default Dropedowndata;