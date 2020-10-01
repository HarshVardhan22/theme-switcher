import React from "react";
import './ListItem.css';


const ListItem = ({items,deleteItem}) => {
    const listItems = items.map(item=>{
        return (
          <div className="list" key={item.key}>
            <p>
              {item.text}
              <button className="delete" onClick={()=> deleteItem(item.key)}>X</button>
            </p>
          </div>
        );
    })
    return (
        <div>{listItems}</div>
    )
}

export default ListItem;