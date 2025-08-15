'use client';
import React,  { useEffect, useRef, useState } from 'react';
import classes from "./Main4WhyChooseUs.module.css";

const Main4WhyChooseUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const imgRef = useRef(null)
    useEffect(() => {
        let animationFrameId
        const imgElement = imgRef.current

        const settings = {
            speed: 0.1,
            sensitivity: 0.3,
            maxOffset: 20
        }

        let pos = { x: 0, y: 0 }
        let target = { x: 0, y: 0 }

        const animate = () => {
            pos.x += (target.x - pos.x) * settings.speed
            pos.y += (target.y - pos.y) * settings.speed

            imgElement.style.transform = `translate(${pos.x}px, ${pos.y}px)`
            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e) => {
            const centerX = window.innerWidth / 2
            const centerY = window.innerHeight / 2

            let dx = (e.clientX - centerX) * settings.sensitivity
            let dy = (e.clientY - centerY) * settings.sensitivity

            const distance = Math.sqrt(dx*dx + dy*dy)
            if (distance > settings.maxOffset) {
                const ratio = settings.maxOffset / distance
                dx *= ratio
                dy *= ratio
            }

            target = { x: dx, y: dy }
        }

        animate()
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])
    return (
        <div className={classes.main4GlobalPosition}>
            <div className={classes.main4BlockPosition}>
                <p className={classes.main4Title}>WHY CHOOSE US</p>
                <p className={classes.main4Title2}>Why Choose Us for Your VR Needs</p>
                <span className={classes.main4Subtitle}
                      onClick={() => setIsOpen(!isOpen)}>Passionate and Experienced Team
                <img src="/arrowDown.svg" alt="стрелкаВниз"/></span>
                <p className={`${classes.slideText} ${isOpen ? classes.open : ""}`}>
                    We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
                    highest quality work. Our team consists of experienced VR developers, designers, and technicians who
                    have a proven track record of creating immersive and engaging VR experiences.
                </p>
                <span className={classes.main4Subtitle}
                      onClick={() => setIsOpen1(!isOpen1)}>Customized Solutions
                <img src="/arrowDown.svg" alt="стрелкаВниз"/></span>
                <p className={`${classes.slideText} ${isOpen1 ? classes.open : ""}`}>
                    We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
                    highest quality work. Our team consists of experienced VR developers, designers, and technicians who
                    have a proven track record of creating immersive and engaging VR experiences.
                </p>
                <span className={classes.main4Subtitle}
                      onClick={() => setIsOpen2(!isOpen2)}>Exceptional Customer Service
                <img src="/arrowDown.svg" alt="стрелкаВниз"/></span>
                <p className={`${classes.slideText} ${isOpen2 ? classes.open : ""}`}>
                    We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
                    highest quality work. Our team consists of experienced VR developers, designers, and technicians who
                    have a proven track record of creating immersive and engaging VR experiences.
                </p>
            </div>
            <div className={classes.main4RightBlockPosition}>
                <div className={classes.blur}></div>
                <div className={classes.blurBox}></div>
                <img ref={imgRef} className={classes.main4HumanImg} src="/main4Human.png" alt="челикс"/>
            </div>
        </div>
    );
};

export default Main4WhyChooseUs;