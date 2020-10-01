import React, { useState } from "react";
import ListItem from './ListItem';
import "./HeroSection.css";

const Form = () => {
    const [data, setData] = useState({
        text: "",
        key: ''
    })

    const [item, setItem] = useState([])


    const deleteItem = (key)=>{
        const filteredItems = item.filter(item => item.key!==key);
        setItem(filteredItems);
    }
   
    
    const HandleInput = (e) => {
        e.preventDefault();
        setData({
            text: e.target.value,
            key: Date.now()
        })
    }

    const AddItem = (e) => {
        e.preventDefault();
        const newItem = data;
        if(newItem.text!==""){
            const newItems = [...item, newItem];
            setItem(newItems);
            setData(
                {
                    text: ""
                }
            )
        }
    }
    
    
    console.log(item);
    return (
        <header>
        <form className="top">

            <input type="text" className="input" placeholder="Enter Task Here" value = {data.text} onChange={HandleInput} />

            <button className="addBtn" onClick={AddItem}> Add Task </button>

            <ListItem className="items" items={item} deleteItem={deleteItem} ></ListItem>

        </form>
        </header>

    )
}

export default Form;