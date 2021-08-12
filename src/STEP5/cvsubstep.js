import{ FormGroup, Label, Input } from 'reactstrap';
import {useState} from 'react';
    function CVsubstep(props) {

        let title=props.text;
        let cvstep=props.value;
        //let statCan=props.autCan;
        let statTal=props.autAdv;
        const [statusCan,setStatusCan]=useState(props.autCan);
        const [statusTal,setStatusTal]=useState(props.autAdv);

        const changeHandlerCan=()=>{
            
            if(statusCan===true){
                setStatusCan(false);
                console.log(statusCan);  
            }
            else{
                setStatusCan(true);
                console.log(statusCan);  
            }
                    
        }
        const changeHandlerTal=()=>{
            statusTal=!statusTal;
            console.log(statTal); 
            //setStatusTal(statTal);
        }

    return (
        <div>
            <FormGroup check>
                <Label check>
                  <h2>Step {title}</h2>
                  <Input id="CVstep"type="number" value={cvstep} hidden />
                  <Input id="CVstepTal" checked={statusCan} type="checkbox" onChange={changeHandlerCan} />                  
                  Updated by candidate
                  <Input id="CVstepTal" checked={statusTal} type="checkbox" onChange={changeHandlerTal} />
                  Aproved by Talentum Team
                </Label>
            </FormGroup>
        </div>
    );
}

export default CVsubstep;