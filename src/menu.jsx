import React, { useEffect } from 'react';

function Menu() {
  useEffect(() => {
    const menu = document.getElementById('menu');

    const handleScroll = () => {
      if (window.scrollY > 100) { 
        menu.classList.add("Menu_active");
        // menu.style.backgroundColor = '#000'; // Altere a cor conforme desejado
      } else {
        menu.classList.remove("Menu_active");
        // menu.style.backgroundColor = '#333';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="menu" className="menu">
        <div id="menu_divtxt">
            <h1 id="txtprin"><a href="/">OPPENHEIMER</a></h1>
        </div>

        <nav>
            <div id="nav_div">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/historia">Historia</a></li>
                <li><a href="/biografia">Biografia</a></li>
                <li><a href="/referencias">Referencias</a></li>
                <li><a href="/downloads">Downloads</a></li>
            </ul>
        </div>
        </nav>    
    </header>
  )
}

export default Menu