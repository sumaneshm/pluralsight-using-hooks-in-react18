import { useState } from "react";

export default function demo(){
    const [cnt, setCnt] = useState(0);

    return <button onClick={e=>setCnt(cnt+1)}>{cnt}</button>
}