import React, { useState, useEffect } from 'react';
import Cheese from '../../Cheese/Cheese.jsx';
import RegularDialogWrapper from '../../RegularDialogWrapper/RegularDialogWrapper.jsx';
import TimeoutProvider from '../../TimeoutProvider/TimeoutProvider.jsx';
export default () => {
    return (
        <>
            <h2>This is Home Page</h2>
            <TimeoutProvider timeoutSeconds={10} renderProp={(visible, setVisibility, timeoutSeconds) => (
                <RegularDialogWrapper visible={visible} timeoutSeconds={timeoutSeconds} setVisibility={setVisibility}>
                    <Cheese/>
                </RegularDialogWrapper>
            )}/>
        </>
    );
}