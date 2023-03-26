import  axios  from "axios";
import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";


function TodoForm({todos ,setTodos}){

    const [mission,setMission] = useState("")

    const handleChange = event =>{
        setMission(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault()

        if (!mission){
            alert("Please check input provided for the Mission")
            return;
        }
        axios.post("/api/todos/",{
            
            "name": mission
        }).then((res)=>{
            setMission("");
            const {data} = res;
            setTodos({
                ...todos,
                data
            }).catch(()=>{
                alert("failed adding mission")
            })
        })
    }

    return(
        <Form onSubmit={handleSubmit}>
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