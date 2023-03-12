import React, {useState,useEffect} from 'react';

const Component_1 = () => {
    const [count,setCount] = useState(0);
    useEffect(() =>{
        const interval = setInterval(()=>{
            setCount(prevCount => prevCount + 1);
            console.log("::::"+count)
        },1000)
        return () => clearInterval(interval);

    },[]);
    return <h1> The Component has been rendered for {count} seconds</h1>
}



export default function Component_export() {
    return(
        <div><Component_1/></div>
    );
}