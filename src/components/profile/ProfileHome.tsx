import Social from "./Social"
import './Profile.css'
import Interest from "./Interest"
import Header from "./Header"
import Side from "../side/Side"

export default function ProfileHome() {
    const posts = {
        one: ["../images/flower.JPG", "Random User", "Enjoying the flowers"],
        two: ["../images/bluide.png", "Shiven Gaddam", "My first version of Red Tornado"],
        three: ["../images/flowertwo.JPG", "Random User", "Enjoying the flowers part two"],
        four: ["../images/reddy.png", "Shiven Gaddam", "My final version "]

    }
    return (

        <main className="profileHome">

            <div className="social">
                <Social></Social>
                <div>
                    <Header></Header>
                </div>

                <Interest></Interest>

            </div>

            <div className="post">
                <Side photo={posts.four[0]} name={posts.four[1]} description={posts.four[2]} />
            </div>
            <div className="post">
                <Side photo={posts.two[0]} name={posts.two[1]} description={posts.two[2]} />
            </div>



        </main>

    )

}