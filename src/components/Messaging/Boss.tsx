import './Boss.css'


export default function Boss() {

    return (

        <main>
            <div className='spacerB'>

            </div>

            <div className='conversationMe'>
                <div className='me'>
                    <h3 className='myConvo'>
                        Me
                    </h3>
                    <p className='myMessage'>
                        Sample Text Boss
                    </p>
                </div>
            </div>
            <div className='conversationthem'>
                <div className='them'>
                    <h3 className='theirName'>
                        Boss
                    </h3>
                    <p className='theirText'>
                        Sample Text Boss
                    </p>
                </div>
            </div>

            <div className='conversationMe'>
                <div className='me'>
                    <h3 className='myConvo'>
                        Me
                    </h3>
                    <p className='myMessage'>
                        Sample Text Boss
                    </p>
                </div>
            </div>

            <div className='centerthediv'>
                <input className='typing' placeholder="Send Message">
                 
                </input>
            </div>



        </main>



    )


}