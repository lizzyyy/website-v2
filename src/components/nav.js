import React, { useState } from "react"
import { Link } from "gatsby";

import * as navStyles from "../styles/nav.module.css"
import * as defaultStyles from "../styles/default.module.css"
import resume from '../static/LizzyWang_Resume.pdf'

const Nav = ({activePage}) => {

  const [shown, setShown] = useState(false);

  return (
    <section>
        <div className={navStyles.navBar}>

            <Link to="/home/">
                <div className={activePage=="home" ? navStyles.active : navStyles.item}>home</div>
            </Link>
            <Link to="/about/">
                <div className={activePage=="about" ? navStyles.active : navStyles.item}>about</div>
            </Link>
            <Link to="/work/">
                <div className={activePage=="work" ? navStyles.active : navStyles.item}>work</div>
            </Link>
            <Link to="/projects/">
                <div className={activePage=="projects" ? navStyles.active : navStyles.item}>projects</div>
            </Link>
            {/* <Link to="/more/">
                <div className={activePage=="more" ? navStyles.active : navStyles.item}>more</div>
            </Link> */}
            <a href={resume} target="_blank">
                <div className={navStyles.item}>resume</div>
            </a>

        </div>

        <div className={navStyles.navBarSmallWrapper}>
            <div className={navStyles.navBarSmall}>

            <div className={navStyles.smallNavButtonOutline} onClick={() => setShown(!shown)}>
                <div className={navStyles.smallNavButton}>
                <h1>...</h1>
                </div>
            </div>

            </div>

            {shown ? 
                <div className={navStyles.navList}>
                    <Link to="/home/">
                        <div className={activePage=="home" ? navStyles.active : navStyles.item}>home</div>
                    </Link>
                    <Link to="/about/">
                        <div className={activePage=="about" ? navStyles.active : navStyles.item}>about</div>
                    </Link>
                    <Link to="/work/">
                        <div className={activePage=="work" ? navStyles.active : navStyles.item}>work</div>
                    </Link>
                    <Link to="/projects/">
                        <div className={activePage=="projects" ? navStyles.active : navStyles.item}>projects</div>
                    </Link>
                    <Link to="/more/">
                        <div className={activePage=="more" ? navStyles.active : navStyles.item}>more</div>
                    </Link>
                    <a href="https://discord.com/invite/GvGUUCN" target="_blank">
                        <div className={navStyles.item}>Resume</div>
                    </a>
                </div>
                :
                ""
            }
            
        </div>

    </section>
  )
}

export default Nav

export const Head = () => <title>Lizzy Wang</title>
