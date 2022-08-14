import React from 'react';
import PersonalDetailsForm from '../../PersonalDetails/PersonalDetails.jsx'
import UnsualDialogWrapper from '../../UnusualDialogWrapper/UnusualDialogwrapper.jsx';
import useTimeout from '../../useTimeout/useTimeout.jsx';

export default () => {
    const [visible, setVisibility] = useTimeout(5);
    return (
        <>
            <h2>This is About page</h2>
            <UnsualDialogWrapper visible={visible} setVisibility={setVisibility} timeoutSeconds={5}>
                <PersonalDetailsForm/>
            </UnsualDialogWrapper>
        </>
    );
}