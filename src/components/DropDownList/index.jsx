import { DropDownItem } from '../';

export const DropDownList = ({ data }) => {

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