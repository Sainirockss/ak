
import { useState } from 'react';
import './NewProduct.css';
function NewProduct(props){

        const[title,SetTitle] = useState(' ');
        const[date,SetDate] = useState(' ');

        function titlechangehandler(event){
            SetTitle(event.target.value);
            console.log(event.target.value);
        }
        function datechangehandler(event){
            SetDate(event.target.value);
            console.log(event.target.value);
        }

        function submithandler(event){
            event.preventDefault();
            
            const productdata = {
                newtitle:title,
                newdate:date

            }
            console.log(productdata);

            SetTitle('');
            SetDate(' ');

        }
    return(
        <>
        <form className="chetan" onSubmit={submithandler}>
            <div className="new-product_title">
                <label>title</label>
                <input type="text" value={title} onChange={titlechangehandler}></input>

            </div>

            <div className="new-product_date">
                <label>date</label>
                <input type="date" min='2023-01-01' max='2023-12-12' onChange={datechangehandler} value={date}></input>
            </div>

            <div className="new-product_button">
                <button type="submit">add product</button>
            </div>
        </form>



        </>
    )
}

export default NewProduct;