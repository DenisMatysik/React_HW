import React, { useState } from "react";

const INTERVAL = 100;



const LifeStyleComponent = () => {
    // const [value,setValue] = useState ("");
    const value = this.state.value
    return (<div>
      <p>Таймер:</p>
      <p>
        <span>{`${Math.round(value/INTERVAL/60/60)}`} : </span>
        <span>{`${Math.round(value/INTERVAL/60)}`} : </span>
        <span>{`${Math.round(value/INTERVAL)}`} . </span>
        <span>{`${value % INTERVAL}`}</span>
      </p>
    </div>);
  }

export default LifeStyleComponent
