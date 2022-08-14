import React, { useState, useEffect } from 'react';
import Cheese from '../../Cheese/Cheese.jsx';
import RegularDialogWrapper from '../../RegularDialogWrapper/RegularDialogWrapper.jsx';
import useTimeout from '../../useTimeout/useTimeout.jsx';

export default () => {
    const [visible, setVisibility] = useTimeout(10);
    return (
        <>
            <h2>This is Home Page</h2>
            <RegularDialogWrapper visible={visible} timeoutSeconds={10} setVisibility={setVisibility}>
                <Cheese/>
            </RegularDialogWrapper>
        </>
    );
}