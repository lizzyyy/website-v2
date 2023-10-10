import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"

import Slide from '@mui/material/Slide';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArchitectureIcon from '@mui/icons-material/Architecture';

import * as s from "../styles/projects.module.css"
import * as w from "../styles/work.module.css"

import Nav from "../components/nav";
import Footer from "../components/footer";
import DrawingArea from '../components/drawingArea';
import Aquarium from '../components/aquarium'

import easel from "../images/easel.png";

const ProjectsPage = () => {

  const [tech, setTech] = useState(false);
  
  const changePage = () => {
    setTech(!tech);
  };

  return (
    <main>
      <body>
        <Nav activePage="projects"/>

        <div className={s.selector}>
            <div className={tech ? s.wrapperActive : s.wrapper} onClick={() => changePage()}>
                <div className={tech ? s.triangleActive : s.triangle}/>
                <p className={tech ? s.active : s.none}>Web Development</p>
            </div>
            <div className={s.circle}/>
            <div className={tech ? s.wrapper : s.wrapperActive} onClick={() => changePage()}>
                <p className={tech ? s.none : s.active}>Software</p>
                <div className={tech ? s.triangle : s.triangleActiveR} style={{transform: "rotate(180deg)"}}/>
            </div>
        </div>

        <Slide direction="right" in={!tech} mountOnEnter unmountOnExit>
            <div className={s.layout}>
                <div className={s.leftWrapper}>
                    <div className={s.drawings}>
                        <img src={easel}/>
                        <DrawingArea />
                    </div>
                </div>
                <div className={s.rightWrapper}>
                    <h1>what i've done.</h1>


                    <div className={w.item}>
                        <div className={s.itemHead}>
                            <h2>Extended Reality @ Berkeley</h2>
                            <div href={"https://xr.berkeley.edu"} className={w.iconL}><LaunchIcon/></div>
                            <div href={"https://www.figma.com/file/uSjXaOgugnBphinDfjh7ZW/xr%40b-website-redesign?type=design&node-id=0%3A1&mode=design&t=mQsD50VTIwrpEerZ-1"} className={w.icon}><ArchitectureIcon/></div>
                            <div href={"https://github.com/lizzyyy/xratb-website"} className={w.icon}><GitHubIcon/></div>
                        </div>
                        <p><i>2021 - 2023 | Figma, HTML, CSS, JavaScript, React</i></p>
                        <p className={s.content}>
                        <ul>
                            <li>As the <mark>marketing and design lead</mark> on the executive board of the world's largest student-led XR (virtual and augmented reality) club, I orchestrated dynamic events for <span>50+ members and 600+ alumni</span> and fostered strategic alliances with industry giants like <span>Niantic and ByteDance</span> for lucrative sponsorships and enriching workshops.</li>
                            <li>Reimagined the club's image, <mark>breathing new life into branding</mark> through flyers and merchandise, based on the inclusive, creative, down-to-earth culture of the club.</li>
                            <li>Spearheaded a <mark>complete website overhaul</mark>, designed with a futurisic, cyberpunk UI in mind, ultimately leaving an indelible digital footprint.</li>
                        </ul>
                        </p>
                        <div className={w.screw} style={{left: 14, top: 14}}/>
                        <div className={w.screw} style={{right: 14, top: 14}}/>
                        <div className={w.screw} style={{left: 14, bottom: 14}}/>
                        <div className={w.screw} style={{right: 14, bottom: 14}}/>
                    </div>

                    <div className={w.item}>
                        <div className={s.itemHead}>
                            <h2>Innovative Design @ Berkeley</h2>
                            <div href={"https://www.figma.com/file/yJR0rmeYHZQFYnpi8sFQzC/InnoWeb%3A-SURG-Research-Team-Website!?type=design&node-id=1206%3A171&mode=design&t=0qp6MdoTLT9wUIZh-1"} className={w.iconL}><ArchitectureIcon/></div>
                            <div href={"https://github.com/sean-she/innod-tisr"} className={w.icon}><GitHubIcon/><p>&nbsp;tisr</p></div>
                            <div href={"https://www.figma.com/file/U3iU9go3K1hkqHLVbORSdr/InnoD-x-Berke1337-Master-Design-Doc?type=design&node-id=0%3A1&mode=design&t=2sMN5e74ZgnIOZ7F-1"} className={w.icon}><ArchitectureIcon/></div>
                            <div href={"https://github.com/lizzyyy/berke1337-x-innod"} className={w.icon}><GitHubIcon/><p>&nbsp;berke1337</p></div>
                        </div>
                        <p><i>2022 - 2023 | Figma, HTML, CSS, JavaScript, React</i></p>
                        <p className={s.content}>
                        <ul>
                            <li>2022 (tisr): Designed and developed a website for a <span>university-affliated research group</span>, emphasizing their ideas on consumer culture and climate change, as well as professionalism.</li>
                            <li>2023 (berke1337): Designed and developed website for a <span>competitive cybersecurity student organization</span>, playing on the sci-fi, "hacker" nature of the club.</li>
                            <li>Iterated on multiple versions of the product, actively communicating with clients to incorporate continuous improvements.</li>
                            <li>Enhanced <mark>readability and usability</mark> by 200% by refactoring wordy content and implementing graphics and animations.</li>
                            <li>Conducted a <mark>UI/UX and Design workshop</mark> for a club of approximately 100 students, as well as members of the public.</li>
                        </ul>
                        </p>
                        <div className={w.screw} style={{left: 14, top: 14}}/>
                        <div className={w.screw} style={{right: 14, top: 14}}/>
                        <div className={w.screw} style={{left: 14, bottom: 14}}/>
                        <div className={w.screw} style={{right: 14, bottom: 14}}/>
                    </div>

                    <h1>special mentions.</h1>

                    <div className={w.item} style={{outline: "4px solid var(--blue)"}}>
                        <div className={s.itemHead}>
                            <h2>Personal Website (this site!)</h2>
                            <a href={"https://www.figma.com/file/mv92XhIEjCGRQlJEeOu3vq/personal-website?type=design&node-id=26%3A8&mode=design&t=d7rSbuIY62R5ghfl-1"} className={w.iconL}><ArchitectureIcon/></a>
                            <a href={""} className={w.icon}><GitHubIcon/></a>
                            <a href={"https://github.com/lizzyyy/website"}className={w.icon}><GitHubIcon/><p>&nbsp;v1</p></a>
                        </div>
                        <p><i>2023 | Figma, HTML, CSS, JavaScript, React</i></p>
                        <p className={s.content}>
                        <ul>
                            <li>Fun project that emphasized <span>interactivity and engagement</span> rather than a standard, static site.</li>
                            <li>Drew ideas from sites I liked, as well as click-and-point games. Still a work in progress - continuously <mark>changing and improving</mark>.</li>
                        </ul>
                        </p>
                        <div className={w.screw} style={{left: 14, top: 14}}/>
                        <div className={w.screw} style={{right: 14, top: 14}}/>
                        <div className={w.screw} style={{left: 14, bottom: 14}}/>
                        <div className={w.screw} style={{right: 14, bottom: 14}}/>
                    </div>

                    <div className={w.item}>
                        <div className={s.itemHead}>
                            <h2>Antz - College Social Network Website</h2>
                            <a href={"https://docs.google.com/presentation/d/1NIls1GFzuIwPFcsL1ZiVYnmfmubnhJDeczwq9ue9BAU/edit#slide=id.g12290237168_0_194"} className={w.iconL}><LaunchIcon/></a>
                            <a href={"https://www.figma.com/file/CZ9qUTrLvQhgFpjiTp2xqZ/Full-Stack-Project?type=design&node-id=0%3A1&mode=design&t=AyavQKMqPu9YWkAl-1"}className={w.icon}><ArchitectureIcon/></a>
                            <a href={"https://github.com/emilyeholmes/group9-finalproject"}className={w.icon}><GitHubIcon/></a>
                        </div>
                        <p><i>2022 | Figma, HTML, CSS, JavaScript, React, MongoDB, Express, Node.js</i></p>
                        <p className={s.content}>
                        <ul>
                            <li>Concept for a <span>social networking site</span> with <mark>profile storage and messaging functions</mark> for college students to make finding connections and meeting like-minded people more easily.</li>
                        </ul>
                        </p>
                        <div className={w.screw} style={{left: 14, top: 14}}/>
                        <div className={w.screw} style={{right: 14, top: 14}}/>
                        <div className={w.screw} style={{left: 14, bottom: 14}}/>
                        <div className={w.screw} style={{right: 14, bottom: 14}}/>
                    </div>

                    <div className={w.item}>
                        <div className={s.itemHead}>
                            <h2>Gloucester Cheese Rolling (Concept)</h2>
                            <a href={"https://www.figma.com/file/i10yYrQaFIgwXWR4TjAcvH/chees?type=design&node-id=0%3A1&mode=design&t=IFi92ntU0oWNn1RU-1"}className={w.icon}><ArchitectureIcon/></a>
                        </div>
                        <p><i>2022 | Figma</i></p>
                        <p className={s.content}>
                        <ul>
                            <li>Concept for an <span>eye-catching, creative site</span> for the annual Gloucester Cheese Rolling competition to attract participants and audience.</li>
                        </ul>
                        </p>
                        <div className={w.screw} style={{left: 14, top: 14}}/>
                        <div className={w.screw} style={{right: 14, top: 14}}/>
                        <div className={w.screw} style={{left: 14, bottom: 14}}/>
                        <div className={w.screw} style={{right: 14, bottom: 14}}/>
                    </div>

                </div>
            </div>
        </Slide>

        <Slide direction="left" in={tech} mountOnEnter unmountOnExit>
            <div className={s.layout2}>
                <div className={s.rightWrapper}>
                    <h1>what (else) i've done.</h1>

                    <div className={w.item}>
                        <div className={s.itemHead}>
                            <h2>TutoriVR</h2>
                            <a href={"https://www.behance.net/gallery/132932115/TutoriVR"} className={w.iconL}><LaunchIcon/></a>
                            <a href={"https://www.figma.com/file/1BAET6ncDnTFVhvg3pXpeJ/tutoriVR-UI?type=design&node-id=0%3A1&mode=design&t=QFDds2djK0AxJHOY-1"}className={w.icon}><ArchitectureIcon/></a>
                            <a href={"https://github.com/tcdanielh/TutoriVR"}className={w.icon}><GitHubIcon/></a>
                        </div>
                        <p><i>2021 - 2023 | Unity (C#)</i></p>
                        <p className={s.content}>
                        <ul>
                            <li>Worked on the open source implementation of a research project under Professor Bjoern Hartmann and Professor Bala Kumaravel, designing a <mark>tutorial system for Google's <a href="https://www.tiltbrush.com/">TiltBrush</a> (and later, <a href="https://openbrush.app/">OpenBrush</a>)</mark> for beginner artists with full support for 3D reconstruction.</li>
                            <li>Integrated video, audio and movement capture to <span>reconstruct each brush stroke</span> through listeners, as well as an immersive <span>3D video player</span> within the VR environment.</li>
                            <li>Designed and incorporated <span>intuitive UI</span> and 3D widgets to elevate the look of the system.</li>
                        </ul>
                        </p>
                        <div className={w.screw} style={{left: 14, top: 14}}/>
                        <div className={w.screw} style={{right: 14, top: 14}}/>
                        <div className={w.screw} style={{left: 14, bottom: 14}}/>
                        <div className={w.screw} style={{right: 14, bottom: 14}}/>
                    </div>

                    <div className={w.item}>
                        <div className={s.itemHead}>
                            <h2>Pacman</h2>
                        </div>
                        <p><i>2022 | Python</i></p>
                        <p className={s.content}>
                        <ul>
                            <li>Designed search functions and game strategies for Pacman, modeled as an <mark>adversarial and stochastic search problem</mark>.</li>
                            <li>Utilized <span>consistent and admissible heuristics</span> to search 70% faster than a uniform cost search.</li>
                            <li>Incorporated higher order functions to create <span>complex game agents</span> with strategic evaluation functions to result in a 10/10 win rate with >1000 average score.</li>
                        </ul>
                        </p>
                        <div className={w.screw} style={{left: 14, top: 14}}/>
                        <div className={w.screw} style={{right: 14, top: 14}}/>
                        <div className={w.screw} style={{left: 14, bottom: 14}}/>
                        <div className={w.screw} style={{right: 14, bottom: 14}}/>
                    </div>

                    <div className={w.item}>
                        <div className={s.itemHead}>
                            <h2>Gitlet</h2>
                        </div>
                        <p><i>2021 | Java</i></p>
                        <p className={s.content}>
                        <ul>
                            <li>Developed a <mark>version control system</mark> that mimics Git, including init, add, remove, commit, branching, log, and merging functions.</li>
                            <li>Maintained a <span>repository</span> that stores serialized and encrypted files with SHA1 hashes to save and restore files, maintain backup histories, and merge branches.</li>
                            <li>Stored data in data structures such as Hashmaps and Hashtrees for fast <span>breadth-first traversals</span>, resulting in improved data processing times by up to 50% compared to previous implementations.</li>
                        </ul>
                        </p>
                        <div className={w.screw} style={{left: 14, top: 14}}/>
                        <div className={w.screw} style={{right: 14, top: 14}}/>
                        <div className={w.screw} style={{left: 14, bottom: 14}}/>
                        <div className={w.screw} style={{right: 14, bottom: 14}}/>
                    </div>

                </div>
                <div className={s.leftWrapper} style={{marginLeft: "15%"}}>
                    <Aquarium />
                    <div className={s.standTop} />
                    <div className={s.standLegs}>
                        <div className={s.standLeg} />
                        <div className={s.standLeg} />
                    </div>
                </div>
            </div>
        </Slide>
        <Footer />
      </body>
    </main>
  )
}

export default ProjectsPage

export const Head = () => <title>Lizzy Wang</title>
