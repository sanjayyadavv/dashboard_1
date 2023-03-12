import React,{useState,useEffect} from 'react';

function Count_Component(){
    const[count,setCount]= useState(0);

    useEffect(()=>{
    // document.title = 'You Clicked ${count} times';
});
return (
    <div> 
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count + 1)}>
            Click me
        </button>
    </div>
);
}

export default function Count_component_return(){
    return(
        <div>
            <Count_Component/>
        </div>
    );
}

