import React from 'react';
import PersonalDetailsForm from '../PersonalDetails/PersonalDetails.jsx'
import DialogWrapper from '../DialogWrapper/DialogWrapper.jsx';

export default () => {
    return (
        <>
            <h2>This is About page</h2>
            <DialogWrapper>
                <PersonalDetailsForm/>
            </DialogWrapper>
        </>
    );
}