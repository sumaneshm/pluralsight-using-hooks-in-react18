import { useEffect, useState } from "react";

const trackChanges = true;

export default function Demo() {
    const [text1, setText1] = useState("First");
    
    if (trackChanges){
        useEffect(()=>
        {   return () => {
                document.title=`${text1.length}`;
            }
        }, [text1]);
    }
    return (
        <div>
            <input onChange={e=>setText1(e.target.value)} value={text1}/>
            <br/>
        </div>
    )
}