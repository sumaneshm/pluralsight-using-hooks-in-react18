import { useEffect, useState } from "react";
import DemoApp from "./m3-clip-05-demoApp";

let localStateValues = [];
let localStateValueIndex = 0;

export default function Demo() {
    function useMyState(initial){
        const localStateValueIndexLocal = localStateValueIndex;

        if(localStateValues[localStateValueIndexLocal] === undefined) {
            localStateValues[localStateValueIndexLocal] = initial;
        }
        const setValue = (value) => {
            localStateValues[localStateValueIndexLocal] = value;
            reRenderMe();
        }

        localStateValueIndex++;

        const retVals = [ localStateValues[localStateValueIndexLocal], setValue]
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
    
    localStateValueIndex = 0;
    return <DemoApp useState={useMyState}/>
}