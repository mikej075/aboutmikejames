import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";

export const Hero = () => {
    return ( <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Michael</h1>
            <div className={styles.titles}>
                <Typewriter
                options={{autoStart: true,
                loop: true,
            delay: 40,
        strings:["A summary about me!",
                ],
    }}/> 
            </div>
            <p className={styles.description}>An experienced Application Developer and Administrator with a proven track record in integrating custom solutions, managing large-scale systems, and enhancing network security for educational environments. Adept at supporting users with hands-on training, developing custom modules, and improving system reliability, all while safeguarding sensitive student and staff data. Passionate about optimizing IT workflows, automating processes, and ensuring seamless user experiences.</p>
            <a href='https://drive.google.com/file/d/1yYt4iIV5CVj3MQCl1eOhW8WbW6fz13HG/view?usp=sharing'  target="_blank" className={styles.contactBtn} download >Resume</a>
        </div>
        <img src={getImageUrl("hero/profilepic2.png")} alt="Her" className={styles.heroimg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>

    );       
};