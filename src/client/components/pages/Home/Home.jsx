import React, { useState, useEffect } from 'react';
import Cheese from '../../Cheese/Cheese.jsx';
import RegularDialogWrapper from '../../RegularDialogWrapper/RegularDialogWrapper.jsx';

export default () => {
    return (
        <>
            <h2>This is Home Page</h2>
            <RegularDialogWrapper timeoutSeconds={10}>
                <Cheese/>
            </RegularDialogWrapper>
        </>
    );
}