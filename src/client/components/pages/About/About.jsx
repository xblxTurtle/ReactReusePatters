import React from 'react';
import PersonalDetailsForm from '../../PersonalDetails/PersonalDetails.jsx'
import UnsualDialogWrapper from '../../UnusualDialogWrapper/UnusualDialogwrapper.jsx';

export default () => {
    return (
        <>
            <h2>This is About page</h2>
            <UnsualDialogWrapper timeoutSeconds={5}>
                <PersonalDetailsForm/>
            </UnsualDialogWrapper>
        </>
    );
}