import axios from "axios";
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdEdit,
  MdDelete,
  MdCopyAll,
} from "react-icons/md";

export default function TodoList({ todos = [], setTodos }) {


  const handleUpdate = async (id,value)=>{
    return axios.patch(`/api/todos/${id}/`,value)
            .then((res)=>{
              const {data}  = res;
              const newTodos = todos.map(task=>{
                if (task.id === id){
                  return data;
                }
                return task;
              })
              setTodos(newTodos);
            }).catch(()=>{
              alert("failed to update");
            })
  }

  const RenderListGroupItems = (item) => {
    return (
      <ListGroup.Item
        key={item.id}
        className="d-flex justify-content-between
                          align-items-center"
      >
        <div className="d-flex justify-content-center">
          <span
            style={{
              marginRight: "12px",
              cursor: "pointer",
            }}

            onClick={()=>{

              handleUpdate(item.id,{
                
                completed:!item.completed

              })
            }}
          >
            {item.completed === true ? (
              <MdCheckBox />
            ) : (
              <MdCheckBoxOutlineBlank />
            )}
          </span>
          <span>
            <MdCopyAll style={{cursor:"pointer",
                    marginRight:"12px"
                }}/>
          </span>
        </div>
        <div>
          <span>{item.name}</span>
        </div>
        <div>
          <MdEdit style={{
            cursor:"pointer",
            marginRight:"12px"
          }}/>
          <MdDelete style={{
            cursor:"pointer"
          }}/>
        </div>
      </ListGroup.Item>
    );
  };
  return (
    <div>
      <ListGroup>{todos.map(RenderListGroupItems)}</ListGroup>
    </div>
  );
}
