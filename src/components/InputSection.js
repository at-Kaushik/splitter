import React, { useState, useEffect } from 'react';
import PersonIcon from '../assets/icon-person.svg';
import Dollar from '../assets/icon-dollar.svg';
import classes from './InputSection.module.css';

const InputSection = ({acb}) => {

  const [bill, setBillAmount] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [person, setPerson] = useState('');
  const [fixedTip, setFixedTip] = useState('');

  useEffect(() => {
    calculateTip();
  }, [ person, bill, customTip, fixedTip ]);

  const dollarHandler = (e) => {
    setBillAmount(parseInt(e.target.value) || 0);
  }

  const customBillHandler = (e) => {
    setCustomTip(parseInt(e.target.value) || 0);
  }

  const setPersonHandler = (e) => {
    setPerson(parseInt(e.target.value) || 0);
  }

  const calculateTip = () => {
    let a = (fixedTip) ? fixedTip : customTip;
    let tip = ((bill*(a/100))/person);
    let totalAmt = (tip+bill)/person;
    acb(tip, totalAmt)
  }

  const getCustomTip = (e) => {
    let value = e.target.getAttribute('value');
    setFixedTip(value)
  }

  return (
    <React.Fragment>
    <div className={classes['left-section']}>
      <div className={classes['input-container']}>
        <label>Bill</label><br/>
        <img src={ Dollar } alt="$" className={classes['dollar-icon']}/>
        <input className={classes['dollar-input']} type="text" value={ bill } onChange={dollarHandler}/>
      </div>
      <div className={classes['selectTip']}>Select Tip %</div>
      <div className={classes['tip-container']}>
        <div className={classes['hard-tip']} value="0.05" tabIndex="1" onClick={getCustomTip} >5%</div>
        <div className={classes['hard-tip']} value="0.1" tabIndex="2" onClick={getCustomTip} >10%</div>
        <div className={classes['hard-tip']}value="0.15" tabIndex="3" onClick={getCustomTip} >15%</div>
        <div className={classes['hard-tip']} value="0.25" tabIndex="4" onClick={getCustomTip} >25%</div>
        <div className={classes['hard-tip']} value="0.5" tabIndex="5" onClick={getCustomTip} >50%</div>
        <input className={classes['custom-tip']} type="text" placeholder="Custom" value={ customTip } onChange={customBillHandler}/>
      </div>
      <div className={`${classes['input-container']} ${classes['number-of-people']}`}>
        <label>Number of People</label><br/>
        <img src={ PersonIcon } alt="$" className={classes['dollar-icon']}/>
        <input className={classes['dollar-input']} type="text" value={ person } onChange={setPersonHandler}/>
      </div>
    </div>
</React.Fragment>
  );
}

export default InputSection;