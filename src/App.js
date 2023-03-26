import Navbar from './components/navbar/Navbar';
import TodoList from './components/todos/App';
import TodoForm from './components/todosform/App';
import React ,{useState,useEffect} from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import './App.css'

const { Content, Footer } = Layout;

const App = () => {

  const [task,setTask] = useState([]);

  useEffect(() => {
    axios.get("/api/todos/")
      .then((res) => {
        setTask(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])

  return (
    <Layout className="layout">
      <Navbar />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <center><h1 style={{
            backgroundColor:"whitesmoke",opacity:0.7
          }}>Todos App</h1></center>
        </div>
        <TodoForm todos={task} setTodos={setTask}/>
        <TodoList todos={task} setTodos={setTask}/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>FULLSTACK-Dev HRJ13 <a href='https://devhrj.onrender.com/'>connect</a></Footer>
    </Layout>
  );
};

export default App;
