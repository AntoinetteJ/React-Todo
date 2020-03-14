import React from "react";

const TodoForm = props = {
   
const handleChange = e => {
this.ListeningStateChangedEvent({ tasks: e.target.value})
}
   
        return(
            <div>
                <form>
                    <label>Task</label>
                    <input
                    type="text"
                    name="task"
                    placeholder="task"
                    onChange={handleChange}
                    />
                </form>

            </div>
        )
   
}
export default TodoForm;