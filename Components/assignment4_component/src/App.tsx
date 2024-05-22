import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';

function App() {

  const [inputChange, setInputChange] = useState<any>('Initial Change');

  return (
    <div className="App">
      <p> {inputChange} </p>
      {/* <Input inputChange={() => console.log('change')} /> */}
      <Input placeholder="Enter Any Text Here..." inputChange={(e:any) => (setInputChange(e.target.value)
      )} />
      <Button btnName="Register" />
      <Button btnName="Login" />
      <Button btnName="Edit" />
      <Button className="btn btn-info ronded-0 m-1" btnName="View" />
      <Button className="btn btn-danger ronded-0 m-1" btnName="Delete" />
    </div>
  );
}

export default App;
