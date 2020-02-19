import React from "react";

const Detail = (props:any) =>{
    const {iteration, detail:{time, detailNumber}} = props
  return(
      <tr>
          <th>{iteration}</th>
          <th>{time}</th>
          <th>{detailNumber}</th>
      </tr>
  )
};

export default Detail