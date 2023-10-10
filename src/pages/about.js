import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import * as s from "../styles/about.module.css"

import Nav from "../components/nav";
import Footer from "../components/footer";

import about1 from "../images/about.jpg"
import about2 from "../images/aboutH.png"
import about3 from "../images/aboutV.png"

const AboutPage = () => {

  const [edu, setEdu] = useState(false);
  const [tech, setTech] = useState(false);
  const [design, setDesign] = useState(false);
  const bottom = useRef(null);

  const scrollDown = () => {
    console.log("scroll");
    setTimeout(() => {
      bottom.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }, 100);
  };

  return (
    <main>
      <body>
        <Nav activePage="about"/>

        <div className={s.layout}>

          <div className={s.leftWrapper}>
            <div className={s.leftImgs}>
                <div className={s.img1}>
                    <img src={about1}/>
                </div>
                <div className={s.img2}>
                    <img src={about2}/>
                </div>
            </div>
            <div className={s.img3}>
                <img src={about3}/>
            </div>
          </div>

          <div className={s.rightWrapper}>
            <h1>about me.</h1>
            <p>Hi! My name is Lizzy. I'm a <mark>designer, developer, creator</mark>. I love computer science for its ability to create. It gives me the freedom to do so much more, inspiring the part of me that loves problem solving, that loves challenges.
            </p>
            <br/>
            <p>
                Outside of school and work, I like to dabble in all sorts of <Link to="/more/">craft and design</Link> - 
                I couldn't help but incorporate it into my work. A few years back, I discovered the wonderful world of <mark>web design and development</mark>, and have been honing my skills since. 
                From researching UI/UX, to refactoring code, to finally creating my own websites - I've finally found an area that encompasses all I have to offer.
                And I'm still learning more every day.
            </p>
            <br/>
            <p>
                Currently, I'm in my last semester of my <mark>Electical Engineering and Computer Sciences</mark> degree at my dream school, UC Berkeley, and I can't wait to see what's next. This website 
                is a passion project of mine, a <span className={s.playground}>playground with no set rules</span>, no client guidelines, to see what I can build and what I learn along the way. I hope you enjoy your stay!
            </p>
            <br/>
            <p>See my <mark>other, most recent project</mark> - an official website for a university organization I co-lead: <a href="https://xr.berkeley.edu" target="_blank">XR @ Berkeley</a></p>
            <br/><br/>
          
            <Accordion className={s.item} disableGutters={true} elevation={0} onChange={() => scrollDown()}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={s.header}
                onClick={() => setEdu(true)}
              >
                <h2>Education</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p className={s.content}>
                  <ul>
                    <li>BSc with a 3.97 GPA in <span>Electrical Engineering and Computer Sciences</span> from <mark>Univeristy of California, Berkeley</mark> (May 2020 - Dec 2023)</li>
                    <li>Awarded the <span>Berkeley Certificate in Design Innovation</span> </li>
                    <li><mark>Relevant Coursework:</mark> Design of Computer Programmes, Data Structures and Algorithms, Operating Systems, Efficient Algorithms and Intractable Problems, Intro to AI & ML, Full Stack Web Dev, Database Systems, Computer Architecture, Data Science</li>
                    <li>Part of the <span>UC Berkeley National Engineering and Computer Science Honor Society</span>, and the <span>Engineering Honor Society</span> (2021, 2022, 2023)</li>
                  </ul>
                </p>
              </AccordionDetails>
              <div className={s.screw} style={{left: 16, top: 25}}/>
              <div className={s.screw} style={{right: 16, top: 25}}/>
            </Accordion>

            <Accordion className={s.item} disableGutters={true} elevation={0} onChange={() => scrollDown()}>
              <AccordionSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={s.header}
                onClick={() => setTech(true)}
              >
                <h2>Tech Stack</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p className={s.content}>
                  <ul>
                    <li><mark>Web development</mark> (full stack): HTML, CSS, JavaScript, jQuery, React (+ frameworks), Node.js, ASP.NET, database operations</li>
                    <li><span>Other programming languages:</span> Python, Java, C, C#, SQL</li>
                    <li>Explore my <Link to="/work/">work</Link> and my <Link to="/projects/">projects</Link></li>
                  </ul>
                </p>
              </AccordionDetails>
              <div className={s.screw} style={{left: 16, top: 25}}/>
              <div className={s.screw} style={{right: 16, top: 25}}/>
            </Accordion>

            <Accordion className={s.item} disableGutters={true} elevation={0} onChange={() => scrollDown()}>
              <AccordionSummary
                aria-controls="panel3a-content"
                id="panel3a-header"
                className={s.header}
              >
                <h2>Design Skills</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p className={s.content}>
                  <ul>
                    <li><mark>UI/UX:</mark> Figma, wireframing, prototyping</li>
                    <li><span>Graphic Design:</span> Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro)</li>
                    <li>Explore my <Link to="/projects/">design projects</Link></li>
                  </ul>
                </p>
              </AccordionDetails>
              <div className={s.screw} style={{left: 16, top: 25}}/>
              <div className={s.screw} style={{right: 16, top: 25}}/>
            </Accordion>

            <div ref={bottom}/>
          
          </div>

        </div>
        <Footer /> 
      </body>
    </main>
  )
}

export default AboutPage

export const Head = () => <title>Lizzy Wang</title>
