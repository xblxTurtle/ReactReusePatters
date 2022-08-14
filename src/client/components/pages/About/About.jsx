import React from 'react';
import PersonalDetailsForm from '../../PersonalDetails/PersonalDetails.jsx'
import UnsualDialogWrapper from '../../UnusualDialogWrapper/UnusualDialogwrapper.jsx';
import TimeoutProvider from '../../TimeoutProvider/TimeoutProvider.jsx';

export default () => {
    return (
        <>
            <h2>This is About page</h2>
            <TimeoutProvider timeoutSeconds={5} renderProp={ (visible, setVisibility) => (
                <UnsualDialogWrapper visible={visible} setVisibility={setVisibility}>
                    <PersonalDetailsForm/>
                </UnsualDialogWrapper>)
            }/>
            
        </>
    );
}