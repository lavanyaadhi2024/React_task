// src/App.jsx
import { useState } from 'react'
import Header from './component/Header';
import Userdetails from './component/Userdetails';
import Footer from './component/Footer';
//import React from 'react';

//import Parallax from './component/Parallax';
//import Multilayerparallax from './component/Multilayerparallax';
function App() {

  const [userdata,setuserdata]=useState({
    fullname:'',
    email:'',
    phone:'',
    dob:'',
    gender:''
  });
  
  return (

    <div>
        <Header />
        <Userdetails giveinput={setuserdata}/>
        <Footer datafromuser={userdata}/>
      </div>

    
   // <div>
    //  <Multilayerparallax />
    // <Parallax/>
     // </div>
       
  );
}

export default App;
