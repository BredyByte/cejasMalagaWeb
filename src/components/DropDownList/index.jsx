import { useState } from 'react';
import { DropDownItem } from '../';


export const DropDownList = ({ data }) => {
  const [isActiveId, setIsActiveId] = useState(-1);
  const toogleIsActive = (index) => {
    setIsActiveId(index);
  }

  return (
    <ul>
      {
        data.map((i,index) => (
          <li key={index}>
            <DropDownItem title={i.title} content={i.content} price={i.price}/>
          </li>
        ))
      }
    </ul>
  )
}