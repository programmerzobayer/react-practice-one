//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const persons= [
    {name:'Elon Mask', made:'Tesla'},
    {name:'Mark juckerberg', made:'Facebook'},
    {name:'Bill gets', made:'Microsoft'},
    {name:'Jack ma', made:'Alibaba'},
    {name:'Larry page', made:'Google'},
  ]
  return (
    <div className="App">
      <header className="App-header">
      <User></User>
       {
        persons.map(per => <Person name={per.name} made={per.made}></Person>)
       }
       <Movie></Movie>
      </header>
    </div>
  );
}
function User (){
  const [user ,setUser]= useState([]);
  useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUser(data))
  },[]);
const uStyle={
  backgroundColor:'salmon',
  margin:'10px 0',
 borderRadius:'8px',
 padding:'20px'
}

  return(
  <div style={{backgroundColor:'#55efc4', padding:'20px', margin:'20px 0', borderRadius:'8px'}}>
    <h4>Total User: {user.length}</h4>
    {
      user.map(ur => <h4 style={uStyle}>{ur.name}</h4>)
    }
  </div>
  );
}

function Person (props){
  const style ={
    backgroundColor: 'lightsalmon',
    margin:'10px 0',
    padding:'20px',
    borderRadius:'8px',
    width:'300px',
    height:'200px',
  }
  return(
    <div style={style}>
      <h3>I am  {props.name}</h3>
      <p>I am Made by  {props.made}</p>
    </div>
  )
}

function Movie (){
  const [count , setMovies] = useState(0);
  const click= () => setMovies(count + 1);
  const btnStyle={
    backgroundColor:'lightgreen',
    padding:'8px  20px',
    border:'none',
    borderRadius:'4px'
  }
  const movSt={
    backgroundColor:'salmon',
     margin:'10px 0',
    borderRadius:'8px',
    padding:'20px'
  }
  return(
    <div style={movSt}>
      <button onClick={click} style={btnStyle}>Add Movie Count </button>
      <h2>Today view {count} Movie</h2>
      <Totalmovie count={count + 10}></Totalmovie>
    </div>
  );
}
function Totalmovie (props){
return(
  <h3>Total view: {props.count} Movies</h3>
)
}

export default App;
