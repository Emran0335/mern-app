import React from 'react'

const GoalItem = () => {
  return (
    <div className='goal'>
        <div>
            {new Date().toLocaleString('en-us')}
        </div>
        <h2>Goal Text</h2>
        <button className='close'>X</button>
    </div>
  )
}

export default GoalItem