import React from 'react'
import './intro.css';
import Img from '../../img/logo.png'

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
        <div className="i-left-wrapper">
           
            <h2 className="i-intro">My name is</h2>
            <h1 className="i-name">Swarup Seethala</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Student</div>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Enthusiastic coder</div>
                   
                    <div className="i-title-item">VolleyBall player</div>
                </div>
            </div>
            <p className="i-desc">
                I am a developer intrested in learning new technologies and play with them .
                I'm currently pursuing my B.Tech  at Vishnu Institute of Technology in CSE department.

            </p>
        </div>

        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Img} alt="image" className='i-img' />


        </div>

    </div>
  )
}

export default Intro
