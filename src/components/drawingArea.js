import React from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useState, useRef } from 'react';

import BrushIcon from '@mui/icons-material/Brush';
import WidthWideIcon from '@mui/icons-material/WidthWide';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Tooltip from '@mui/material/Tooltip';


import * as s from "../styles/projects.module.css"

const DrawingArea = () => {

    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const isDrawing = React.useRef(false);

    const [start, setStart] = useState(true);
    const [draw, setDraw] = useState(false);
    const [erase, setErase] = useState(false);
    const [color, setColor] = useState("#3B3B3B");
    const [line, setLine] = useState(2);
    const canvas = React.useRef(null);

    const handleDraw = () => {
        if (start) {
            setStart(false);
        }
        setDraw(!draw);
        setErase(false);
        if (!draw) {
            setTool("pen");
        };
      }
    
      const handleErase = () => {
        setDraw(false);
        setErase(!erase);
        if (!erase) {
            setTool("eraser");
        };
      }
    
      const clearAll = () => {
        setLines([]);
      };
    
      const generate = () => {
        
      };
    
      const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { tool, points: [pos.x, pos.y] }]);
      };
    
      const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
          return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        // add point
        lastLine.points = lastLine.points.concat([point.x, point.y]);
    
        // replace last
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
      };
    
      const handleMouseUp = () => {
        isDrawing.current = false;
      };

    return (
        <section>
            <div className={s.drawButtons}>
                <Tooltip title={<span style={{color: "var(--blue)", fontSize: 16, fontFamily: "Lekton"}}>draw</span>} placement="top" className={draw ? s.activeDrawB : s.drawB} onClick={() => handleDraw()}><BrushIcon/></Tooltip>
                <Tooltip title={<span style={{color: "var(--blue)", fontSize: 16, fontFamily: "Lekton"}}>erase</span>} placement="top" className={erase ? s.activeDrawB : s.drawB} onClick={() => handleErase()}><WidthWideIcon/></Tooltip>
                <Tooltip title={<span style={{color: "var(--blue)", fontSize: 16, fontFamily: "Lekton"}}>clear all</span>} placement="top" className={s.drawB} onClick={() => clearAll()}><DeleteIcon/></Tooltip>
                <Tooltip title={<span style={{color: "var(--blue)", fontSize: 16, fontFamily: "Lekton"}}>coming soon!</span>} placement="top" className={s.drawSoon} onClick={() => generate()}><AutoFixHighIcon/></Tooltip>
            </div>

            <div className={s.canvas} ref={canvas} style={{pointerEvents: (draw | erase) ? "auto" : "none"}}>
                {
                    start ? (
                        <div className={s.b4draw}>
                            <p>Click <span className={s.drawSoon} style={{width: 24}}><BrushIcon/></span></p>
                            <p>to begin drawing!</p>
                        </div>
                    ) : (
                        <Stage
                        width={window.innerWidth}
                        height={window.innerHeight}
                        onMouseDown={handleMouseDown}
                        onMousemove={handleMouseMove}
                        onMouseup={handleMouseUp}
                    >
                        <Layer>
                            {lines.map((line, i) => (
                                <Line
                                key={i}
                                points={line.points}
                                stroke={color}
                                strokeWidth={5}
                                tension={0.5}
                                lineCap="round"
                                lineJoin="round"
                                globalCompositeOperation={
                                    line.tool === 'eraser' ? 'destination-out' : 'source-over'
                                }
                                />
                            ))}
                        </Layer>
                    </Stage>
                    )
                }

            </div>
        </section>
    )
}

export default DrawingArea