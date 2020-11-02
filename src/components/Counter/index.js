import './style.scss';

import React, { useState } from 'react';

export default () => {
  const [result, handleResult] = useState(0);
  const [size, handleSize] = useState(14.4);
  const CL = 'counter';

  const handleInput = (e) => {
    const { value } = e.target;
    const inputResult = (Number(value)/size).toFixed(4);

    handleResult(inputResult);
    navigator.clipboard.writeText(`${inputResult}rem`);
  }

  const handleCustomSize = (e) => {
    const { value } = e.target;

    if (value) handleSize(Number(value)/100);
  }
  
  return (
    <div className={CL}>
      <input className={`${CL}__size`} placeholder='layout width' defaultValue={1440} onChange={handleCustomSize} type="text"/>
      <input className={`${CL}__value`} placeholder='value in px' onChange={handleInput} type="number"/>
      <div className={`${CL}__result`}>{`${result}rem`}</div>
    </div>
  );
}
