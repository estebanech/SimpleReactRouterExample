import logo from './logo.svg';
import './App.css';
import './ImageView.css';
import { NavLink } from "react-router-dom";
function ImageView() {
  return (
    <div className="container">
        <div id="page-head">
            <ul>
                <li className="main-item"><NavLink to="/">Esteban Echeverri</NavLink></li>
                <li className="last-item"><NavLink to="/">Home</NavLink></li>
                <li className="last-item"><NavLink to="/image">Meme</NavLink></li>
            </ul>
        </div>
        <div className="bg"></div>
        <footer>
            <a>2022 Esteban</a>
            <a className="last-item" href="#page-head"> <i className="material-icons">arrow_upward</i></a>
        </footer>
    </div>
  );
}

export default ImageView;

