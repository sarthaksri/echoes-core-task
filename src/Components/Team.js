import React, {useEffect} from 'react'
import styles from './Styles/team.module.css';
function Team() {

    function YourComponent() {
        useEffect(() => {
          const handleMouseOver = (event) => {
            const imgBx = document.querySelectorAll('.imgBx');
            const contentBx = document.querySelectorAll('.contentBx');
      
            for (let i = 0; i < contentBx.length; i++) {
              contentBx[i].classList.remove('active');
            }
            document.getElementById(event.target.dataset.id).classList.add('active');
      
            for (let i = 0; i < imgBx.length; i++) {
              imgBx[i].classList.remove('active');
            }
            event.target.classList.add('active');
          };
      
          document.addEventListener('mouseover', handleMouseOver);
        }, [])};
    return (

        <div>
            <h1 className={styles.teamHeading}>Team</h1>
            <div className={styles.b}>
                <div className={styles.container}>
                    <div className={styles.icon}>
                        <div className={`${styles.imgBx} ${styles.active}`} style={{ '--i': 1 }} data-id={styles.content1} >
                            <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img1" />
                        </div>
                        <div className={styles.imgBx} style={{ '--i': 2 }} data-id={styles.content2} >
                            <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img2" />
                        </div>
                        <div className={styles.imgBx} style={{ '--i': 3 }} data-id={styles.content3} >
                            <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img3" />
                        </div>
                        <div className={styles.imgBx} style={{ '--i': 4 }} data-id={styles.content4} >
                            <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im4" />
                        </div>
                        <div className={styles.imgBx} style={{ '--i': 5 }} data-id={styles.content5} >
                            <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im5" />
                        </div>
                        <div className={styles.imgBx} style={{ '--i': 6 }} data-id={styles.content6} >
                            <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im6" />
                        </div>
                        <div className={styles.imgBx} style={{ '--i': 7 }} data-id={styles.content7} >
                            <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im7" />
                        </div>
                        <div className={styles.imgBx} style={{ '--i': 8 }} data-id={styles.content8} >
                            <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="im8" />
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={`${styles.contentBx} ${styles.active}`} id={styles.content1}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img1" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Pathak<br/><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBx} id={styles.content2}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img2" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Pathak<br/><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBx} id={styles.content3}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img3" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Pathak<br/><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBx} id={styles.content4}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img4" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Pathak<br/><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBx} id={styles.content5}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img5" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Pathak<br/><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBx} id={styles.content6}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img6" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Pathak<br/><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBx} id={styles.content7}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img7" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Pathak<br/><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBx} id={styles.content8}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src="https://i.ibb.co/0jZ3qYH/IMG-20201120-162751.jpg" alt="img8" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Pathak<br/><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>

    )
    
};

export default Team;
