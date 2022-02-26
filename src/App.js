import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NavbarComp from './components/navbar';
import Home from './pages/home';
import Posts from './pages/posts';
import PostDetails from './pages/post-details';
import Favourites from './pages/favourites';
import Profile from './pages/profile';
function App() {
  return (
    <div className='App'>
      <NavbarComp/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/posts" element = {<Posts/>}/>
        <Route path = "/posts/:postId" element = {<PostDetails/>}/>
        <Route path = "/favourites" element = {<Favourites/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
      </Routes>
    </div>
  );
}
export default App;
