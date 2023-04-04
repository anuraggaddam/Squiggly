import Nav from './components/Nav'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileHome from './components/profile/ProfileHome';
import Message from './components/Messaging/Message';
import Side from './components/side/Side.jsx'




function App() {
  const posts = {
    one: ["../images/flower.JPG","Random User","Enjoying the flowers"],
    two: ["../images/bluide.png","Shiven Gaddam","My first version of Red Tornado"],
    three:["../images/flowertwo.JPG","Random User","Enjoying the flowers part two"],
    four:["../images/reddy.png","Shiven Gaddam","My final version "]
    
    }

  return (
    <Router>
      <Switch>
        <div className="Display">

          <Nav></Nav>
          <Route exact path="/">
            <div className='content'>
            <Side photo = {posts.four[0]} name = {posts.four[1]} description = {posts.four[2]}/>
            </div>
            <div className='content'>
            <Side photo = {posts.three[0]} name = {posts.three[1]} description = {posts.three[2]}/>
            </div>
            <div className='content'>
            <Side photo = {posts.two[0]} name = {posts.two[1]} description = {posts.two[2]}/>
            </div>
            <div className='content'>
              <Side photo = {posts.one[0]} name = {posts.one[1]} description = {posts.one[2]}/>
            </div>
          </Route>
          <Route exact path = "/profile">
            <ProfileHome></ProfileHome>
          </Route>
          <Route exact path = "/messages">
            <Message></Message>
          </Route>

        </div>
      </Switch>
    </Router>
  )
}

export default App
