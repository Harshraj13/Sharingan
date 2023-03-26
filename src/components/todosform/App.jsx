import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";


function TodoForm(){

    const [mission,setMission] = useState("")

    const handleChange = event =>{
        setMission(event.target.value);
    }

    return(
        <Form>
            <InputGroup>
                <FormControl
                className="mb-4"
                placeholder="Enter your mission!"
                    onChange={handleChange}
                    value={mission}
                />
                <Button
                className="mb-4"
                type="submit">
                    Add
                </Button>
            </InputGroup>
        </Form>
    )
}
export default TodoForm;