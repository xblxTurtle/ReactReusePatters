import React, { useState, useEffect } from 'react';

export default (props) => {
    const [visible, setVisible] = useState(false);
    let timeout;

    useEffect(() => {
        if (!visible) {

            const resetTimer = () => {
                clearTimeout(timeout);
                timeout = setTimeout(()=>{
                    setVisible(true);
                    document.removeEventListener('mousemove', resetTimer);
                }, 10000);
               
                setVisible(false);
            };

            document.addEventListener('mousemove', resetTimer);

            timeout = setTimeout(()=> {
                document.removeEventListener('mousemove', resetTimer);
                setVisible(true);
            }, 10000);

            return () =>{
                clearTimeout(timeout);
                document.removeEventListener('mousemove', resetTimer);
            };
        }
    }, [visible]);

    return (
        <>
        { visible ? 
            <div class="container text-center" >
                <div class="row align-items-center" style={{minHeight:"300px"}}>
                    <div class="col-md" style={{border:"solid", borderColor:"black"}}>
                        <div class="row">
                            <div class="col-sm">
                                <h2>
                                    You've been inactive for 10 seconds
                                </h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                Please press button below to go back to application
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <button onClick={()=>{setVisible(false);}}>Return to application</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : 
            <div>{props.children}</div>
            }
        </>
    );
};