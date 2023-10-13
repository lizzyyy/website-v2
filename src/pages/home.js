import React, { useState, useEffect, useRef, ReactDOM } from "react"
import { Link } from "gatsby"
import { Bounce, Fade, AttentionSeeker } from "react-awesome-reveal"
import ReactTypingEffect from 'react-typing-effect';
import * as s from "../styles/home.module.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import 'animate.css';

import Nav from "../components/nav";
import Footer from "../components/footer";

import sun from "../images/sun.png"
import moon from "../images/moon.png"
import windows from "../images/window-bare.png"
import grills from "../images/window-grills.png"
import cloud1 from "../images/cloud1.png"
import cloud2 from "../images/cloud2.png"
import cloud3 from "../images/cloud3.png"
import playButton from "../images/play.png"
import arrow from "../images/arrow.png"
import shelf from "../images/shelf.png"
import candles from "../images/candles.png"
import plantImg from "../images/plant.png"

const HomePage = () => {

  const windRef = useRef(null);
  const [grillsWidth, setWidth] = useState("100%");
  const [grillsHeight, setHeight] = useState("100%");
  const [blinds, setBlinds] = useState(150);
  const [light, setLight] = useState(false);
  const [play, setPlay] = useState(true);
  const [next, setNext] = useState(false);
  const [music, setMusic] = useState(false);
  const [plant, setPlant] = useState(false);

  // useEffect(() => {
  //   setWidth(windRef.current.offsetWidth - 100);
  //   setHeight(windRef.current.offsetHeight - 100);
  //   console.log(grillsWidth);
  // });

  useEffect(() => {
    setTimeout(() => {
      setWidth(windRef.current.offsetWidth);
      setHeight(windRef.current.offsetHeight - 83);
    }, 500);
    console.log(grillsWidth);
  });

  const handleResize = () => {
    setWidth(windRef.current.offsetWidth - 100);
    setHeight(windRef.current.offsetHeight - 83);
    console.log(grillsWidth);
  };
 
  useEffect(() => {
    window.addEventListener('resize', handleResize)
 
    return () => window.removeEventListener('resize', handleResize)
  });

  const openBlinds = () => {
    if (blinds != 150) {
      setBlinds(150);
    }
    else {
      setBlinds(0);
    }
  };

  useEffect(() => {
    if (!play) {
      setTimeout(() => setNext(true), 7500)
    }
  }, [play]);

  return (
    <main>
      <body>
        <Nav activePage="home"/>

        <div className={s.layout}>

          {/* lamp + switch */}
          <div className={s.leftWrapper}>
            <div className={plant ? ["animate__animated", "animate__swing", s.plant].join(' ') : s.plant} onMouseEnter={() => setPlant(true)} onMouseLeave={() => setPlant(false)}><img src={plantImg}/></div>
            <div className={s.lamp}>
              <div className={s.lampShade} />
              <div className={s.lampPole} />
            </div>
            <div className={s.switchWrapper}>
              <p className={s.soon}>coming soon!</p>
              <div className={s.switchh}>
                
              </div>
              <div className={s.switchIcons}>
                <img src={sun}/>
                <img src={moon}/>
              </div>
            </div>
          </div>

          {/* window + tv */}
          <div className={s.centerWrapper}>
            <div className={s.windowWrapper}>
              <img className={s.window} src={windows} ref={windRef}/>
              <div className={s.cloudWrapper}>
                <img className={s.clouds} src={cloud1} style={{left: "21%", top: "25%"}}/>
                <img className={s.clouds} src={cloud2} style={{left: "35%", top: "50%"}}/>
                <img className={s.clouds} src={cloud3} style={{left: "50%", top: "35%"}}/>
              </div>
              <div className={s.grillsWrapper}>
                <img className={s.grills} src={grills} style={{width: grillsWidth, height: grillsHeight}} />
              </div>
            </div>

            <div className={s.table}>
              <div className={s.speakers}>
                <div className={music ? s.musicOn : s.speaker} onClick={() => setMusic(!music)}>
                  <div className={s.circleTop} />
                  <div className={s.circleBot} />
                  <MusicNoteIcon className={s.music} style={{left: -50, top: -40, transform: "rotate(10deg)"}}/>
                  <MusicNoteIcon className={s.music} style={{left: -80, top: -60, transform: "rotate(-10deg)"}}/>
                </div>
                <div className={music ? s.musicOn : s.speaker} onClick={() => setMusic(!music)}>
                  <div className={s.circleTop} />
                  <div className={s.circleBot} />
                  <MusicNoteIcon className={s.music} style={{right: -50, top: -40, transform: "rotate(-10deg)"}}/>
                  <MusicNoteIcon className={s.music} style={{right: -90, top: -60, transform: "rotate(10deg)"}}/>
                </div>
              </div>
            <div className={s.tv}>
              {
                play ? 
                (<div className={s.tvScreen}>
                    <img src={playButton} onClick={() => setPlay(!play)}/>
                    <div className={s.colors} />
                    <p className={s.playText} onClick={() => setPlay(!play)}>click to start</p>
                  </div>)
                :
                (<div className={s.tvScreen}>
                    <ReactTypingEffect className={s.tvText} style={{fontSize: 32}}
                      text={["hi."]}
                      speed={80}
                      cursor={" "}
                      typingDelay={400}
                      eraseDelay={10000000}
                    />
                    <ReactTypingEffect className={s.tvText}
                      text={["my name is lizzy wang."]}
                      speed={80}
                      cursor={" "}
                      typingDelay={1100}
                      eraseDelay={10000000}
                    />
                    <ReactTypingEffect className={s.tvText}
                      text={["i make websites."]}
                      speed={80}
                      cursor={" "}
                      typingDelay={3500}
                      eraseDelay={10000000}
                    />
                    <ReactTypingEffect className={s.tvText}
                      text={["welcome to my home :)"]}
                      speed={80}
                      cursor={" "}
                      typingDelay={5500}
                      eraseDelay={10000000}
                    />
                  </div>)
              }
              <div className={s.tvStand} />
            </div>
              <div className={s.tableTop} />
              <div className={s.tableLegs}>
                <div className={s.tableLeg} />
                <div className={s.tableLeg} />
              </div>
            </div>
          </div>

          {/* right */}
          <div className={s.rightWrapper}>
            <div className={s.shelfWrapper}>
              <div className={s.candleWrapper}>
                <div className={s.flame} style={{top: 24, right: 41, opacity: light ? 1 : 0}}/>
                <div className={s.flame} style={{top: -11, right: 23, opacity: light ? 1 : 0}}/>
                <div className={s.flame} style={{top: 12, right: 4, opacity: light ? 1 : 0}}/>
                <img src={candles} onClick={() => setLight(!light)}/>
              </div>
              <img src={shelf} />
            </div>
            { next ?
              <Bounce className={s.arrow}><Link to="/about/"><img src={arrow} /></Link></Bounce>
              : ""
            }
          </div>

        </div>

        <Footer />
      </body>
    </main>
  )
}

export default HomePage

export const Head = () => <title>Lizzy Wang</title>
