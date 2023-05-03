import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="main-container">
      <div className="container">
        <h1 className="title">Add data</h1>
        <button className="add-btn">ADD</button>
      </div>
      <form className="form-container">
        <div className="input-container">
          <label>Username</label>
          <input />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input />
        </div>
        <button className="submit-btn">submit</button>
        <button className="submit-btn">cancel</button>
      </form>

      <ul className="list-container">
        <li className="list-item">
          <div>
            <h1>Titan biswal</h1>
            <p>test@gmail.com</p>
          </div>
          <div>
            <button className="list-btn">update</button>
            <button className="list-btn">delete</button>
          </div>
        </li>
        <li className="list-item">
          <div>
            <h1>Titan biswal</h1>
            <p>test@gmail.com</p>
          </div>
          <div>
            <button className="list-btn">update</button>
            <button className="list-btn">delete</button>
          </div>
        </li>
        <li className="list-item">
          <div>
            <h1>Titan biswal</h1>
            <p>test@gmail.com</p>
          </div>
          <div>
            <button className="list-btn">update</button>
            <button className="list-btn">delete</button>
          </div>
        </li>
      </ul>
    </div>

  );
}

export default App;
