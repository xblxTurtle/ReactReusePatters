import React from 'react';
import { useState, useEffect } from 'react';

export default function (DialogComponent){
    return (props) => {

        const [visible, setVisibility] = useState(false);
        let timeout;
        
        props.timeoutSeconds = props.timeoutSeconds || 10;

        useEffect(() => {
            if (!visible) {
    
                const resetTimer = () => {
                    clearTimeout(timeout);
                    timeout = setTimeout(()=>{
                        setVisibility(true);
                        document.removeEventListener('mousemove', resetTimer);
                    }, props.timeoutSeconds * 1000);
                   
                    setVisibility(false);
                };
    
                document.addEventListener('mousemove', resetTimer);
    
                timeout = setTimeout(()=> {
                    document.removeEventListener('mousemove', resetTimer);
                    setVisibility(true);
                }, props.timeoutSeconds * 1000);
    
                return () =>{
                    clearTimeout(timeout);
                    document.removeEventListener('mousemove', resetTimer);
                };
            }
        }, [visible]);

        return (<DialogComponent visible={visible} setVisibility={setVisibility} timeoutSeconds={props.timeoutSeconds}> {props.children} </DialogComponent>);
        
    };
}