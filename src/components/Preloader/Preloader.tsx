import preloader from "./../../assets/image/preloader.svg"
import React from "react";
import style from './Preloader.module.scss'

 const Preloader:React.FC = (props:any)=>{
  return(
      <div className={style.preloader}>
          <img src={preloader}/>
          </div>
  );
};

export default Preloader;