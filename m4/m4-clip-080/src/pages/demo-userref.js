import { useRef, useState } from "react";

export default function Demo(){
    const imgRef = useRef();
    const mouseOverCnt = useRef(0);
    const [cnt, setCnt] = useState(0);

    return (
        <div className="container">
            <img src="/images/Speaker-1124.jpg" 
                ref={imgRef} 
                style={{filter:"grayscale(100%)"}}
                onMouseOver={ () => {
                    imgRef.current.style.filter = "grayscale(0%)";
                    mouseOverCnt.current++;
                }}
                onMouseOut={ () => {
                    imgRef.current.style.filter = "grayscale(100%)";
                }} 
                />
            <hr/>
            <button onClick={()=>alert("Registered! mouseOverCnt :" + mouseOverCnt.current)}>Registered</button>
       </div>
    )
}