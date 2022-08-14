import React from 'react';

export default () => {
    return (
        <>
          <div class="container text-center" >
                <div class="row">
                    <div class="col-md">
                        <h3>This is cheese form</h3>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-md">
                        <label for="cheese">Do you like cheese?</label>
                        <input type="checkbox" name="cheese" id="cheese"/>
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
}