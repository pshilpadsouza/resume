import React, { Component } from 'react';
import Navbar from './navbar/Navbar.js'; // Check if Navbar.js exists in the 'navbar' directory
import Profile from './profile/Profile.js'; // Check if Profile.js exists in the 'profile' directory
import About from './about/About.js'; // Check if About.js exists in the 'about' directory
import Skills from './skills/Skills.js'; // Check if Skills.js exists in the 'skills' directory
import Experiences from './experiences/Experiences.js'; // Check if Experiences.js exists in the 'experiences' directory
import Educations from './educations/Educations.js'; // Check if Educations.js exists in the 'educations' directory
import Portfolios from './portfolios/Portfolios.js'; // Check if Portfolios.js exists in the 'portfolios' directory

export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m3'>
                            <Profile />
                        </div>
                        <div className='col s12 m9'>
                            <About/>
                            <Skills />
                            <Experiences />
                            <Educations />
                            <Portfolios />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
