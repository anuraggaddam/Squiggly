import './Social.css'

export default function Social() {


    return (

        <main>

            <div className='socialbox'>

                <div className='title'>
                    <h1>
                        My Friends
                    </h1>
                </div>


                <div className='friendList'>
                    <div className='profilepic'>
                        <img className='picFormat' src="../images/one.jpg" alt="" />
                    </div>
                    <h3 className='name'>
                        Shiven
                    </h3>
                    <div className='offline'>

                    </div>
                </div>


                <div className='friendList'>
                    <div className='profilepic'>
                        <img className='picFormat' src="../images/two.jpg" alt="" />
                    </div>
                    <h3 className='name'>
                        Shiven
                    </h3>
                    <div className='offline'>

                    </div>
                </div>


                <div className='friendList'>
                    <div className='profilepic'>
                        <img className='picFormat' src="../images/three.jpg" alt="" />
                    </div>
                    <h3 className='name'>
                        Shiven
                    </h3>
                    <div className='online'>

                    </div>
                </div>



                <div className='friendList'>
                    <div className='profilepic'>
                        <img className='picFormat' src="../images/four.jpg" alt="" />
                    </div>
                    <h3 className='name'>
                        Shiven
                    </h3>
                    <div className='online'>

                    </div>
                </div>



            </div>

        </main>
    )



}