
import React, { useEffect } from "react";
import './Multilayerparallax.css';

import hill1 from '../assets/images/hill1.png';
import hill2 from '../assets/images/hill2.png';
import hill3 from '../assets/images/hill3.png';
import hill4 from '../assets/images/hill4.png';
import hill5 from '../assets/images/hill5.png';
import tree from '../assets/images/tree.png';
import plant from '../assets/images/plant.png';
import leaf from '../assets/images/leaf.png';
import nature from '../assets/images/nature.jpg';
import grass from '../assets/images/grass.png';
import boat from '../assets/images/boat.png';


const Multilayerparallax = ()=> {
    useEffect(() => {
    const text = document.getElementById("text");
    const leaf = document.getElementById("leaf");
    const hill1 = document.getElementById("hill1");
    const hill4 = document.getElementById("hill4");
    const hill5 = document.getElementById("hill5");
    const boat = document.getElementById("boat");

    const handleScroll = () => {
      const value = window.scrollY;
      text.style.marginTop = value * 2.5 + "px";
      leaf.style.top = value * -1.5 + "px";
      hill5.style.left = value * 1.5 + "px";
      hill4.style.left = value * -1.5 + "px";
      hill1.style.top = value * 1 + "px";
      boat.style.right = value * 0.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return(

        <><section className="multiparallax">

            <img src={hill1} id="hill1" alt="hill1" />
            <img src={hill2} id="hill2" alt="hill2" />
            <img src={hill3} id="hill3" alt="hill3" />
            <img src={hill4} id="hill4" alt="hill4" />
            <img src={hill5} id="hill5" alt="hill5" />
            <img src={tree} id="tree" alt="tree" />
            <h1 id="text">Multilayer parallax</h1>
            <img src={plant} id="plant" alt="plant" />
            <img src={leaf} id="leaf" alt="leaf" />
        
        </section>

        <section className="down">

            <img src={nature} id="nature" alt="nature" />
            <img src={grass} id="grass" alt="grass" />
            <img src={boat} id="boat" alt="boat" />
                
        </section></>
    );
};
export default Multilayerparallax;