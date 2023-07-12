import React from 'react'
import styles from './Styles/team.module.css';
function Team() {
    return (

        <div>
            <h1 className={styles.teamHeading}>Team</h1>
            <div className={styles.b}>
                <div className={styles.container}>
                <div className={styles.icon}>
                    <div className={`${styles.imgBx} ${styles.active}`} style={{'--i':1}}>
                        <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img1"/>
                    </div>
                    <div className={styles.imgBx}  style={{'--i':2}}>
                        <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img2"/>
                    </div>
                    <div className={styles.imgBx}  style={{'--i':3}}>
                        <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img3"/>
                    </div>
                    <div className={styles.imgBx}  style={{'--i':4}}>
                        <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im4"/>
                    </div>
                    <div className={styles.imgBx}  style={{'--i':5}}>
                        <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im5"/>
                    </div>
                    <div className={styles.imgBx} style={{'--i':6}}>
                        <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im6"/>
                    </div>
                    <div className={styles.imgBx}  style={{'--i':7}}>
                        <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im7"/>
                    </div>
                    <div className={styles.imgBx}  style={{'--i':8}}>
                        <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im8"/>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
};

export default Team;
