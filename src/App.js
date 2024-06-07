import logo from './logo.svg';
import './App.css';
import Item from './Item';
import ItemDate from './ItemDate';
import NewProduct from './NewProduct';



function App() {
  return (
  <div>
    <NewProduct/>
    <Item name = "nirma">
      i am the champ that runs the camp
    </Item>

    <ItemDate date= "12" month="12" year="2008"/>
    
    <Item name = "chamkila"/>
    <ItemDate date= "19" month="06" year="1992"/>
    
    <Item name = "chitkara"/>
    <ItemDate date= "99" month="34" year="2192"/>

   
    <div className='App'>
      hello world
    </div>
</div>
    
  );
}

export default App;
