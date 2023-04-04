
import "./Nav.css"

export default function Nav() {

    return (


        <main className="navDisplay">

            <div className="sitename">
                <h1>
                    Squiggly
                </h1>
            </div>
            <div className="links">
                <a className="link" href="/">Home</a>
                <a  className="link" href="/profile">Profile</a>
                <a className="link" href="/messages">Messages</a>
            </div>
            <div className="userInfo">
                <h3 className="username">
                    Shiven Gaddam
                </h3>
                <div className="pictureframe">
                    <img className="pictureformater" src="../images/myself.jpg" alt="" />
                </div>
                
            </div>

          
        </main>



    )

}