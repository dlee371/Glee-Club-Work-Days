import { useState } from 'react'


const AddJob = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [loc, setLoc] = useState('')
    const [peeps, setPeeps] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({ text, day, loc, peeps })

        setText('')
        setDay('')
        setLoc('')
        setPeeps(0)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder="Add Task"
                value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder="Add Day and Time"
                value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Location</label>
                <input type='text' placeholder="Add Location"
                value={loc} onChange={(e) => setLoc(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Num Peeps</label>
                <input type='number' 
                value={peeps} onChange={(e) => setPeeps(e.target.value)} />
            </div>

            <input type='submit' value='Save Task' 
            className='btn btn-block'/> 
        </form>
    )
}

export default AddJob