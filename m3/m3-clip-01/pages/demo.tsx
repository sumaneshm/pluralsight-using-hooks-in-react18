import { useEffect, useState } from "react";

let trackChanges = true;

export default function Demo() {
    const [text1, setText1] = useState("First");
    // function onText1Change(value:string){
    //     setText1(value);
    //     if (value.length > 8)
    //     {
    //         trackChanges = false;
    //     }
    //     else{
    //         trackChanges = true;
    //     }
    // }
    if (trackChanges){
        useEffect(()=>
        {   return () => {
                document.title=`${text1}`;
            }
        }, [text1]);
    }
    return (
        <div>
            <input onChange={e=>setText1(e.target.value)} value={text1}/>
            <br/>
            <button onClick={e=>trackChanges=!trackChanges} title="Click"/>
        </div>
    )
}