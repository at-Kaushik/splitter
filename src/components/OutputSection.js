import React from 'react';
import classes from './OutputSection.module.css';

const OutputSection = ({ calculatedTip, totalAmt }) => {

    const clickOnReset = (e) => {
      console.log(e)
    }
    return (
        <React.Fragment>
            <div className={classes['right-section']}>
              <form className={classes['form-inline']}>
                <div className={classes['mb-15']}>
                <label className={classes.whiteColor}>Tip Amount</label>
                <br/>
                <label>/ Person</label>
                <div className={classes.amt}>$ {(!calculatedTip) ? 0 : calculatedTip.toFixed(2)  }</div>
                </div>
                <label className={classes.whiteColor}>Total Amount</label>
                <br/>
                <label>/ Person</label>
                <div className={classes.amt}>$ {(!totalAmt) ? 0 : totalAmt.toFixed(2) }</div>
                <button className={classes['reset-btn']} onClick={clickOnReset}>Reset</button> 
              </form>
              
            </div>
        </React.Fragment>
    );
}

export default OutputSection;