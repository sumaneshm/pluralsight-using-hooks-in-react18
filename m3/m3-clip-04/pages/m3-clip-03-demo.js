import { useEffect, useState } from "react";

export default function Demo() {
    const [text1, setText1] = useState("First");
    
    useEffect(()=>
     {
        document.title=`${text1.length}`;
     }
    );
    const [text2, setText2] = useState("Last");
    return (
        <div>
            <input onChange={e=>setText1(e.target.value)} value={text1}/>
            <br/>
            <input onChange={e=>setText2(e.target.value)} value={text2}/>
            <hr/>
            <h2>
                <i>
                    {text1} {text2}
                </i>
            </h2>
        </div>
    )
}