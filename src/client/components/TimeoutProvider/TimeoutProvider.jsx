import React, {useState, useEffect} from 'react';

export default (props) => {

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

    return (
        <>
            {props.renderProp(visible, setVisibility, props.timeoutSeconds)}
        </>
    );
};