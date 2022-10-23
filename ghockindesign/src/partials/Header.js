import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="App">
            {/* HEADER */}
            <div class="top-container">
                <div class="title-text">
                    <Link to='/'><a href="/"><h1>Gabe Hockin</h1></a></Link>
                </div>
                {/* <img class="Banner" src="/images/GabeHockinLogo.png" alt="banner-img"></img> */}
            </div>
        </div>
    );
}

export default Header;
