import React from 'react';

const Dialog = (props) => {
    return (
        <>
        { props.visible ? 
            <div class="container text-center" >
                <div class="row align-items-center" style={{minHeight:"300px"}}>
                    <div class="col-md" style={{border:"solid", borderColor:"black"}}>
                        <div class="row">
                            <div class="col-sm">
                                <h2>
                                    <b>This Dialog is somewhat unusual</b>
                                </h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <h2>
                                    You've been inactive for {props.timeoutSeconds} seconds, have you?
                                </h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                Please press button below to go back to application.
                                Unless you want it to stay hidden this way.
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <button onClick={()=>{props.setVisibility(false);}}>Return to application</button>
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

export default Dialog;