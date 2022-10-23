import React from 'react'
import { Link } from 'react-router-dom';
import gabeImage from '../images/GabeImage.png';
import surfImage from '../images/SurfingImage.png';

function Home() {
    return (
        <div class="middle-container">
            <div class="profile">
                <img class="ProfilePicture" src={gabeImage} alt="GabeHockin-profile-img"></img>
                <h2>Hello.</h2>
                <p class="intro">I am a Games Developer and Website Developer with a keen intrest in making any project with programming.</p>
            </div>
            <hr></hr>
            <div class="skills">
                <h2>My Skills.</h2>
                <div class="skill-row">
                    <h3>Design & Development</h3>
                    <p>
                        I started learning to code when I was 13 years old because I thought Call Of Duty could be designed
                        better. From that belief it has also pushed me to learn more about how Game development works and
                        how there is always alot more going on than people think.
                        Over the recent years I've decided to expand out and learn new technology such as Web development
                        and Computer Science.
                    </p>

                </div>
                <div class="skill-row">
                    <img class="hobby-img" src={surfImage} alt="Surfing-img"></img>

                    <h3>Hobbies</h3>
                    <p>I grew up in Cornwall, England by the coast which meant I learnt to enjoy alot of different sports
                        and activites. By the age of 8 years old I was surfing and playing Tennis for my county.
                        Tennis and Surfing have always been a big part of my life and are amazing hobbies to have that dont
                        include the need for computers.
                        I also have a massive passion for learning new skills and music is one of these skills that has
                        always intrested me. I have been learning Piano for over a decade and recently started to apply
                        this skill to sound design.
                    </p>

                </div>
            </div>
            <hr></hr>
            <div class="blog">
                <h2>Blog.</h2>
                <h3>What am I currently up to?</h3>
                <br></br>
                <Link to="/blog"><a class="btn" href="/blog">Blog</a></Link>
            </div>
            <hr></hr>
            <div class="contact-me">
                <h2>Get In Touch.</h2>
                <h3>If you love to create things!</h3>
                <p class="contact-message">If you love to create things! or just wanna talk to me about music or sports you
                    can contact me below. (or at ghockin.design@gmail.com)</p>
                <a class="btn" href="mailto:ghockin.design@gmail.com">CONTACT ME</a>
            </div>
        </div>
    )
}

export default Home