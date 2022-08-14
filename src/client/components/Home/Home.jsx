import React, { useState, useEffect } from 'react';
import Cheese from '../Cheese/Cheese.jsx';
import DialogWrapper from '../DialogWrapper/DialogWrapper.jsx';

export default () => {
    return (
        <>
            <h2>This is Home Page</h2>
            <DialogWrapper>
                <Cheese/>
            </DialogWrapper>
        </>
    );
}