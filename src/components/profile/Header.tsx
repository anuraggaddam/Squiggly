import './Header.css'
import { HiLocationMarker } from 'react-icons/hi'
import { FaBirthdayCake } from 'react-icons/fa'
import { FaUniversity } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'


export default function Header() {

    return (

        <main className="HeaderBox">

            <div className='background'>
                <img className='backgroundformat' src="../images/background.jpg" alt="" />
            </div>
            <div className='mypicture'>
                <div className='profilepics'>
                    <img className='picformatorhead' src="../images/myself.jpg" alt="" />

                </div>
            </div>
            <div className='Name'>
                <p className='test'>
                    Shiven Gaddam
                </p>
            </div>
            <div className='information'>
                <div className='personalinfo'>
                    <div className='info'>
                        <HiLocationMarker /> Seattle, Washington
                    </div>
                    <div className='info'>
                        <FaBirthdayCake /> April 28
                    </div>
                    <div className='info'>
                        <FaUniversity /> University of Washington
                    </div>
                </div>
                <div className='linker'>
                    <p>
                        Software Developer
                    </p>
                    <p>
                        <a className='myLink' href="https://www.linkedin.com/in/shivengaddam/" target='_blank'><AiFillLinkedin /> LinkedIn</a>
                    </p>
                    <p>
                        <a className='myLink' href="https://github.com/anuraggaddam" target='_blank'><BsGithub /> Github</a>
                    </p>

                </div>
            </div>


        </main>


    )




}