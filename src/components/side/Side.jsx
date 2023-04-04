import './Side.css'
import { BsBalloonHeartFill } from 'react-icons/bs'
import { FaCommentAlt } from 'react-icons/fa'
import { RiShareForwardFill } from 'react-icons/ri'
import React, { useEffect, useState } from "react"

export default function Side(props) {

    const [liked, setLike] = useState (false)

    return (

        <main>

            <div className='box'>
                <div className='linkdiv'>
                    <div className='postpic'>
                        <img className='postFormat' src = {props.photo} alt="" />
                    </div>
                    <div className='postname'>
                       {props.name}
                    </div>
                    <p className='postdescript'>
                    {props.description}
                    </p>
                </div>
                <div className='navigationButtons'>
                    <div className='hearty'>
                        <BsBalloonHeartFill color = "red" />
                    </div>
                    <div>
                        <FaCommentAlt color = "blue" />
                    </div>
                    <div className='shary'>
                        <RiShareForwardFill  color = "green"/>
                    </div>
                </div>


            </div>
        </main>



    )



}