import React from "react"
import './Todo.css'


function Todo(){
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Todo App Using React JS</h4>
                        </div>
                    </div>
                    <form>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add todo</button>
                        </div>
                    </form>
    
                </div>
            </div>
        </div>
    )    
}

export default Todo;