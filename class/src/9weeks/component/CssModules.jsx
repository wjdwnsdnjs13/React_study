import React, { useEffect, useState } from 'react';
import classes from './CssModules.module.scss';

const CssModules = () => {
  const [cnt, setCnt] = useState(0);
  const ff = () => {
    setCnt(cnt + 1);
    // p1.style.backgroundColor = "pink";
  }
  useEffect(() => {
    if (cnt !== 0 && cnt % 2 == 0) {
      document.getElementById("div1").style.backgroundColor = "lightblue";
      document.title = "클릭 횟수 : " + cnt;
      document.getElementById("p1").textContent = "21960043";


    }
    else if (cnt % 2 == 1) {
      document.getElementById("div1").style.backgroundColor = "pink";
      document.title = "클릭 횟수 : " + cnt;
      document.getElementById("p1").textContent = "정준원" + cnt;

    }

  })
  return (
    <div className={classes.container} id="div1">
      <p className={classes.title} id="p1">CSS Modules입니다.</p>
      <button className={classes.button} onClick={() => ff()}>버튼</button>
    </div>
  )
}

export default CssModules