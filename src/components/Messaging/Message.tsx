import Boss from './Boss'
import Friend from './Friend'
import './Message.css'
import React, { useEffect, useState } from "react"


export default function Message() {

    const [convo, setConvo] = useState("Boss")
    return (

        <main className="portal">
            <div className='contacts'>
                <div className='contact' onClick={()=> setConvo("Boss")}>
                    Boss
                </div>
                <div className='contact'  onClick={()=> setConvo("Friend")}>
                    Friend
                </div>
            </div>
            <div className='message'>
              {convo === "Boss" && <Boss/>}
              {convo === "Friend" && <Friend/>}
            </div>


        </main>


    )




}