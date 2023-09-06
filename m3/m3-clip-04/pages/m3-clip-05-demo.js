import { useEffect, useState } from "react";
import DemoApp from "./m3-clip-05-demoApp";

let localStateValue = undefined;

export default function Demo() {
    function useMyState(initial){
        if(localStateValue === undefined) {
            localStateValue = initial;
        }
        const setValue = (value) => {
            localStateValue = value;
            reRenderMe();
        }

        const retVals = [ localStateValue, setValue]
        return retVals;
    }

    const [cnt, setCnt] = useState(0);
    useEffect(()=>{
        console.log("rendering");
    }, [cnt])
    
    function reRenderMe() {
        setCnt(cnt + 1);
        console.log("reRenderMe called....")
    }

    return <DemoApp useState={useMyState}/>
}