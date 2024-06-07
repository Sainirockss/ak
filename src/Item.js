import './Item.css';
function Item(props) {
    const name = props.name;
    return(
         <div className="Apps">
          <p>{name}</p>

          {/* // we we write anything in  */}
          {props.children}

        </div>
    )
    
}

export default Item;