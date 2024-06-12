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

    // Lembre-se de remover o evento quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="menu" className="menu">
        <div id="menu_divtxt">
            <h1 id="txtprin">OPENHAIMER</h1>
        </div>

        <nav>
            <div id="nav_div">
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
            </ul>
        </div>
        </nav>    
    </header>
  )
}

export default Menu