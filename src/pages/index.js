import React, { useState, useEffect } from "react"
import * as s from "../styles/index.module.css"
import { navigate } from "gatsby"

const IndexPage = () => {

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (loading) {
  //     var loadedBar = document.getElementById("loaded");
  //     loadedBar.style.transition = "width ease-in 5s";
  //     loadedBar.style.width = "100%";
  //   }
  // }, [loading]);

  useEffect(()=>{ 
      if (loading) {
        document.body.style.backgroundColor = "var(--white)";
        setTimeout(()=> navigate('/home/'),5000);  
      }
      else {
        document.body.style.backgroundColor = "var(--blue)";
      }
    },[loading])

  return (
    <main>
      <body style={{backgroundColor: "var(--blue)", margin: "0"}}>
        {
          !loading ?
          (
            <div className={s.door} onClick={() => setLoading(true)}>
              <div className={s.frame} />
              <div className={s.handle} />
            </div>
          )
          :
          (
            <div className={s.fullScreen}>
              <div className={s.loadWrapper}>
                <div className={s.loadBar}>
                  <div className={s.loaded} id="loaded" />
                </div>
                <p className={s.loadText}>
                  Loading...
                </p>
              </div>
            </div>
          )
        }
        
      </body>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Lizzy Wang</title>
