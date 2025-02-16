import { useState } from "react";

function HabitTracker() {
    const [habits,setHabits]=useState([]);
    const [habitName,setHabitName]=useState('');
    const addHabit =()=>{
        setHabits([...habits,{id:Date.now(),name:habitName,completed: false}])
        setHabitName("")
    }
    const changeStatus=(id)=>{
        setHabits(habits.map(habit=>habit.id===id?{...habit,completed:!habit.completed}:habit))
    }
    // Write logic for deleting button
    return ( 
        <div>
            <h2>Habit Tracker</h2>
            <input type="text" placeholder="Enter Your Habits" value={habitName}
            onChange={(e)=>setHabitName(e.target.value)} />
            <button onClick={addHabit}>Add Habit</button>
            <ul>
                {
                    habits.map(habit=>(
                        <li key={habit.id}>
                            <input type="checkbox" checked={habit.completed} 
                            onChange={()=>changeStatus(habit.id)} />
                            {habit.name} Status:{ habit.completed ? 'Completed':'Pending' }
                            {/* Create Delete button to delete habit */}
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}

export default HabitTracker;