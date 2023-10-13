import React, { useState } from "react"
import { Link, Script } from "gatsby"
import * as s from "../styles/work.module.css"
import { Rotate, Fade } from "react-awesome-reveal"
import ScrollContainer from 'react-indiana-drag-scroll'

import Nav from "../components/nav";
import Footer from "../components/footer";

import window from "../images/window-tree.png"
import frame from "../images/window-tree-frame.png"
import sakura from "../images/sakura.png"
import arrow from "../images/arrow.png"
import arrowB from "../images/arrowB.png"
import duck from "../images/duck.gif"

import mouse from "../images/work/cursor.png"
import socket1 from "../images/work/socket1.png"
import socket2 from "../images/work/socket2.png"
import socket3 from "../images/work/socket3.png"
import circles1 from "../images/work/circles1.png"
import circles2 from "../images/work/circles2.png"

const WorkPage = () => {

  const [job1, setJob1] = useState(true);
  const [job2, setJob2] = useState(true);

  return (
    <main>
      <body>
        <Nav activePage="work"/>

        <div className={s.layout}>

          <div className={s.leftWrapper}>
            <div className={s.windowWrapper}>
                <img src={window} />
                <div className={s.sakura} style={{top: "15%", right: "49%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "32%", right: "72%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "24%", right: "52%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "35%", right: "51%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "27%", right: "42%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "22%", right: "37%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "24%", right: "62%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "18%", right: "44%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "11%", right: "41%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "10%", right: "33%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "12%", right: "47%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "14%", right: "35%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "16%", right: "31%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "21%", right: "54%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "26%", right: "39%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "24%", right: "32%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "11%", right: "54%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "40%", right: "30%"}}><img src={sakura}/></div>
                <div className={s.sakura} style={{top: "29%", right: "29%"}}><img src={sakura}/></div>
            </div>
            <div className={s.duckWrapper}>
              <div className={s.ducks}>
                <img src={duck} style={{marginTop: 15}}/>
                <img src={duck} style={{marginTop: 5}}/>
                <img src={duck} style={{marginTop: 10}}/>
                <img src={duck}/>
                <img src={duck} style={{marginTop: 7}}/>
              </div>
            </div>
          </div>

          <div className={s.rightWrapper}>
            <h1>where i've been.</h1>
            <div className={s.item}>
              <h2>Web Development Intern <span className={s.company}>@ <a href="https://www.socketmobile.com/">Socket Mobile Inc.</a></span></h2>
              <p><i>May 2023 - current</i></p>
              {
                job1 ? (
                  <p className={s.content}>
                    <ul>
                      <li>Led <mark>redesign of company site</mark> across 8 countries, implementing a modern, intuitive UI with <span>CSS, HTML, JavaScript, jQuery</span>, to manage data and facilitate seamless user interaction for less technical users.</li>
                      <li>Utilized <span>C# and ASP.NET</span> backend framework and caches to <mark>create and call APIs</mark>, implementing UX features like a feedback system with email notifications.</li>
                      <li>Revamped 10+ existing designs from scratch, improving readability by 40% and implementing <span>modern design principles</span>.</li>
                      <li>Actively participated in bi-weekly meetings and contributed ideas within a cross-functional team of 12 members.</li>
                      <li>Carried out <mark>large monthly deployments</mark> to development and production platforms with contractors.</li>
                    </ul>
                  </p>
                ) : (
                  <ScrollContainer className={s.images}>
                    <div className={s.i}>
                      <img src={socket1}/>
                      <a href='https://www.socketmobile.com/support/rma'>Product Return Portal</a>
                    </div>
                    <div className={s.i}>
                      <img src={socket2}/>
                      <a href='https://www.socketmobile.com/knowledge-center/product-features'>Dynamically Updated Data</a>
                    </div>
                    <div className={s.i}>
                      <img src={socket3}/>
                      <a href='https://www.socketmobile.com/partners/business-applications'>Modern Footer</a>
                    </div>
                  </ScrollContainer>
                )
              }
              <div className={s.screw} style={{left: 14, top: 14}}/>
              <div className={s.screw} style={{right: 14, top: 14}}/>
              {
                job1 ? (
                  <div className={s.screw} style={{left: 14, bottom: 14}}/>
                ) : (
                  <img src={arrowB} className={s.arrow} style={{left: 8, bottom: 6}} onClick={() => setJob1(true)}/>
                )
              }
              {
                job1 ? (
                  <img src={arrow} className={s.arrow} style={{right: 8, bottom: 6}} onClick={() => setJob1(false)}/>
                ) : (
                  <div className={s.screw} style={{right: 14, bottom: 14}}/>
                )
              }
            </div>

            <div className={s.item}>
              <h2>Software Engineering Intern <span className={s.company}>@ <a href="https://www.circles.life/sg/">Circles.Life</a></span></h2>
              <p>Web Frontend & UI/UX Design</p>
              <p><i>May 2022 - Aug 2022</i></p>
              {
                job2 ? (
                  <p className={s.content}>
                    <ul>
                      <li>Spearheaded the design and implementation of a business-facing <mark>Tableau-like UI</mark> for a data analytics dashboard that increased usability and intuitiveness by 40%.</li>
                      <li>Refactored sites using <span>React</span> components and libraries like <mark>charts, tables and maps</mark> to manage data from the <span>Snowflake Data Cloud</span> and <span>MongoDB databases</span> for user engagement, doubling clickthrough rate.</li>
                      <li>Designed a customer-facing B2B dashboard and delivery flow on Figma following <mark>research and User Testing</mark> with real clients that improved ease of use by 70%.</li>
                    </ul>
                  </p>
                ) : (
                  <div>
                    <ScrollContainer className={s.images}>
                      <div className={s.i}>
                        <img src={circles1}/>
                        <p>Figma Workflow</p>
                      </div>
                      <div className={s.i}>
                        <img src={circles2}/>
                        <p>Delivery Page Design</p>
                      </div>
                    </ScrollContainer>
                    <p className={s.desc}>Most of my work is not public.</p>
                  </div>
                )
              }
              <div className={s.screw} style={{left: 14, top: 14}}/>
              <div className={s.screw} style={{right: 14, top: 14}}/>
              {
                job2 ? (
                  <div className={s.screw} style={{left: 14, bottom: 14}}/>
                ) : (
                  <img src={arrowB} className={s.arrow} style={{left: 8, bottom: 6}} onClick={() => setJob2(true)}/>
                )
              }
              {
                job2 ? (
                  <img src={arrow} className={s.arrow} style={{right: 8, bottom: 6}} onClick={() => setJob2(false)}/>
                ) : (
                  <div className={s.screw} style={{right: 14, bottom: 14}}/>
                )
              }
              
            </div>
          
          
          </div>

        </div>
        <Footer />
      </body>
    </main>
  )
}

export default WorkPage

export const Head = () => <title>Lizzy Wang</title>
