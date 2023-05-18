import React, { useState } from 'react';

const Dashboard = () => {
    const [y, sety] = useState(true);

    return (
        <div className='dashboard_container'>
        <div className='dashboard_menu' style={{ alignSelf: "flex-start", justifySelf: "flex-start" }}>
            
            {y ? (
                <>
                    <button className='button1' style={{ backgroundColor: "#005642" , color: "white"}} onClick={(y) => sety(true)}>
                        Live
                    </button>
                   
                </>) : (<><button className='button1'  onClick={(y) => { sety(true) }}>Live</button></>)}
            {y ? (<><button className='button2'  onClick={(y) => { sety(false) }}>Most Funded</button></>) : (<><button className='button2' style={{ backgroundColor: "#005642" , color: "white"}} >Most Funded</button></>)}
        </div>
        
        
    </div>
  )
}

export default Dashboard