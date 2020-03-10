import React, { useState, useEffect } from 'react';
import './ResultItem.css';


function ResultItem({result, onClick}) {

  return (
    <li className="ResultItem" onClick={onClick}>

      <p><b>{result.name}</b></p>
      <p>{result.address+' - '+result.city+' ('+result.province+') - '+result.zipCode}</p>
      <p>{result.phone}</p>

    </li>
  );

}//ResultItem

export default ResultItem;
