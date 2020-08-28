import React, { Fragment, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Content from './components/Content'
import './css/App.css'
import axios from 'axios'

const App = () => {

    const api = 'http://127.0.0.1:8000/api/task'
    const [tasks, setTasks] = useState([])
    const [data, setData] = useState({})

    const getTasks = async() => {
        try {
            const response = await axios.get(api);
            await setTasks(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTask = async(obTask) => {
        await axios.delete(`${api}/${obTask.id}`)
        getTasks()
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        let response;
        try {
            if(!data.id) {
                response = await axios.post(api, data);
            }else{
                response = await axios.put(`${api}/${data.id}`, data);
            }
            resetInput()
            getTasks()
        } catch (error) {
            console.log(error)
        }
    }

    const resetInput = () => {
        setData({})
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name] : e.target.value });
    }

    useEffect(() => {
        getTasks();
    }, [])

    return(
        <Fragment>
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <input type="text" hidden name="id" value={data.id || ''}/>
                <input
                    type="text"
                    name="content"
                    placeholder="Content"
                    className="form-control"
                    onChange={handleChange}
                    value={data.content || ''}
                />
                <input
                    type="text"
                    name="color"
                    placeholder="color"
                    className="form-control"
                    onChange={handleChange}
                    value={data.color || ''}
                />
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Contenido</td>
                        <td>Color</td>
                    <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => {
                        return(
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.content}</td>
                                <td bgcolor={task.color}>{task.color}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => setData(task)}>Editar</button>
                                    <button className="btn btn-danger" onClick={() => deleteTask(task)}>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </Fragment>
    )
}

export default App