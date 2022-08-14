import React, {useState, useEffect} from 'react';

export default (timeoutSeconds) => {

    const [visible, setVisibility] = useState(false);
        let timeout;
        
        const timeoutMs = (timeoutSeconds || 10) * 1000;

        useEffect(() => {
            if (!visible) {
    
                const resetTimer = () => {
                    clearTimeout(timeout);
                    timeout = setTimeout(()=>{
                        setVisibility(true);
                        document.removeEventListener('mousemove', resetTimer);
                    }, timeoutMs);
                   
                    setVisibility(false);
                };
    
                document.addEventListener('mousemove', resetTimer);
    
                timeout = setTimeout(()=> {
                    document.removeEventListener('mousemove', resetTimer);
                    setVisibility(true);
                }, timeoutMs);
    
                return () =>{
                    clearTimeout(timeout);
                    document.removeEventListener('mousemove', resetTimer);
                };
            }
        }, [visible]);

    return [visible, setVisibility];
};