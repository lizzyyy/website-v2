import React, { useState } from "react"

import * as s from "../styles/nav.module.css"
import resume from '../static/LizzyWang_Resume.pdf'

import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const Footer = () => {

  return (
    <section>
        <div className={s.footer}>
            <a href="mailto:yuchen.w@berkeley.edu" target="_blank" className={s.footerIcon}>
                <MailIcon />
            </a>
            <div className={s.footerRow}>
                <a href="https://github.com/lizzyyy" target="_blank" className={s.footerIcon}>
                    <GitHubIcon />
                </a>
                <a href={resume} target="_blank" className={s.footerIcon}>
                    <DescriptionIcon />
                </a>
            </div>

        </div>

    </section>
  )
}

export default Footer

export const Head = () => <title>Lizzy Wang</title>
