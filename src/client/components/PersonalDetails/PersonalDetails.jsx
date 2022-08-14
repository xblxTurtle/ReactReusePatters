import React from 'react';

export default () => {
    return (
        <>
          <div class="container text-center" >
                <div class="row">
                    <div class="col-md">
                        <h3>This is personal details form</h3>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-md">
                        <label for="name">What is your name (4 to 8 characters):</label>
                        <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"/>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-md">
                        <label for="age">What is your age (1-3 characters):</label>
                        <input type="text" id="age" name="age" required minlength="1" maxlength="3" size="4"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <button>Just a buttton without any functionality</button>
                    </div>
                </div>
            </div>
        </>
    );
};