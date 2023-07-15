import React, { useState } from 'react';
import styles from './Styles/team.module.css';
import img1 from '../Images/pathak.png';
import img2 from '../Images/sparsh_lamba.png';
import img3 from '../Images/rishikaa.png';
import img4 from '../Images/shatakshi.png';
import img5 from '../Images/shivansh.png';
import img6 from '../Images/tanmay.png';
import img7 from '../Images/vibhu.png';
import img8 from '../Images/aditya_mehra.png';
function EBTeam() {

   const [isHovered1, setIsHovered1] = useState(false);
   const [isHovered2, setIsHovered2] = useState(false);
   const [isHovered3, setIsHovered3] = useState(false);
   const [isHovered4, setIsHovered4] = useState(false);
   const [isHovered5, setIsHovered5] = useState(false);
   const [isHovered6, setIsHovered6] = useState(false);
   const [isHovered7, setIsHovered7] = useState(false);
   const [isHovered8, setIsHovered8] = useState(false);

  const mouseHover1 = (e) => {
    if(isHovered1)
    setIsHovered1(false);
    else
    setIsHovered1(true); 
  }
  const mouseHover2 = (e) => {
    if(isHovered2)
    setIsHovered2(false);
    else
    setIsHovered2(true);
  }
  const mouseHover3 = (e) => {
    if(isHovered3)
    setIsHovered3(false);
    else
    setIsHovered3(true);
  }
  const mouseHover4 = (e) => {
    if(isHovered4)
    setIsHovered4(false);
    else
    setIsHovered4(true);
  }
  const mouseHover5 = (e) => {
    if(isHovered5)
    setIsHovered5(false);
    else
    setIsHovered5(true);
  }
  const mouseHover6 = (e) => {
    if(isHovered6)
    setIsHovered6(false);
    else
    setIsHovered6(true);
  }
  const mouseHover7 = (e) => {
    if(isHovered7)
    setIsHovered7(false);
    else
    setIsHovered7(true);
  }
  const mouseHover8 = (e) => {
    if(isHovered8)
    setIsHovered8(false);
    else
    setIsHovered8(true);
  }



    return (

        <div>
            <h1 className={styles.teamHeading}>EB Team</h1>
            <div className={styles.b}>
                <div className={styles.container}>
                    <div className={styles.icon}>
                        <div className={isHovered1?`${styles.imgBx} ${styles.active}`:`${styles.imgBx}`} style={{ '--i': 1 }} data-id={styles.content1} onClick={mouseHover1} >
                            <img src={img1} alt="img1" />
                        </div>
                        <div className={isHovered2?`${styles.imgBx} ${styles.active}`:`${styles.imgBx}`} style={{ '--i': 2 }} data-id={styles.content2} onClick={mouseHover2}  >
                            <img src={img2} alt="img2" />
                        </div>
                        <div className={isHovered3?`${styles.imgBx} ${styles.active}`:`${styles.imgBx}`} style={{ '--i': 3 }} data-id={styles.content3}  onClick={mouseHover3}>
                            <img src={img3} alt="img3" />
                        </div>
                        <div className={isHovered4?`${styles.imgBx} ${styles.active}`:`${styles.imgBx}`} style={{ '--i': 4 }} data-id={styles.content4}  onClick={mouseHover4}>
                            <img src={img4} alt="im4" />
                        </div>
                        <div className={isHovered5?`${styles.imgBx} ${styles.active}`:`${styles.imgBx}`} style={{ '--i': 5 }} data-id={styles.content5}  onClick={mouseHover5}>
                            <img src={img5} alt="im5" />
                        </div>
                        <div className={isHovered6?`${styles.imgBx} ${styles.active}`:`${styles.imgBx}`} style={{ '--i': 6 }} data-id={styles.content6}  onClick={mouseHover6}>
                            <img src={img6} alt="im6" />
                        </div>
                        <div className={isHovered7?`${styles.imgBx} ${styles.active}`:`${styles.imgBx}`} style={{ '--i': 7 }} data-id={styles.content7}  onClick={mouseHover7}>
                            <img src={img7} alt="im7" />
                        </div>
                        <div className={isHovered8?`${styles.imgBx} ${styles.active}`:`${styles.imgBx}`} style={{ '--i': 8 }} data-id={styles.content8}  onClick={mouseHover8}>
                            <img src={img8} alt="im8" />
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={isHovered1?`${styles.contentBx} ${styles.active}`:`${styles.contentBx}`} id={styles.content1}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src={img1} alt="img1" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Pathak<br /><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='/'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='/'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='/'><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={isHovered2?`${styles.contentBx} ${styles.active}`:`${styles.contentBx}`} id={styles.content2}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src={img2} alt="img2" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Sparsh Lamba<br /><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={isHovered3?`${styles.contentBx} ${styles.active}`:`${styles.contentBx}`} id={styles.content3}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src={img3} alt="img3" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Rishikaa<br /><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={isHovered4?`${styles.contentBx} ${styles.active}`:`${styles.contentBx}`} id={styles.content4}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src={img4} alt="img4" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Shatakshi<br /><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={isHovered5?`${styles.contentBx} ${styles.active}`:`${styles.contentBx}`} id={styles.content5}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src={img5} alt="img5" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Shivansh<br /><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={isHovered6?`${styles.contentBx} ${styles.active}`:`${styles.contentBx}`} id={styles.content6}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src={img6} alt="img6" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Tanmay<br /><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={isHovered7?`${styles.contentBx} ${styles.active}`:`${styles.contentBx}`} id={styles.content7}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src={img7} alt="img7" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Vibhu Khare<br /><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={isHovered8?`${styles.contentBx} ${styles.active}`:`${styles.contentBx}`} id={styles.content8}>
                            <div className={styles.card} >
                                <div className={styles.imgBx} >
                                    <img src={img8} alt="img8" />
                                </div>
                                <div className={styles.textBx} >
                                    <h2>Aditya Mehra<br /><span>Tech Core</span></h2>
                                    <ul className={styles.sci}>
                                        <li><a href='#'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                        <li><a href='#'><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
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

export default EBTeam;
