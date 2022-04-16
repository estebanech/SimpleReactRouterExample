import logo from './logo.svg';
import './App.css';
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div id="page-head">
            <ul className='nav'>
                <li className="main-item"><NavLink to="/">Esteban Echeverri</NavLink></li>
                <li className="last-item"><NavLink to="/">Home</NavLink></li>
                <li className="last-item"><NavLink to="/image">Meme</NavLink></li>
            </ul>
        </div>
        <div className="general-content">
            <div className="profile-container">
                <img className="profile-picture" 
                src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/192897109_4156335234453191_4486007512046353640_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vYAYKJPKsRAAX9iNO_6&_nc_ht=scontent-ort2-2.xx&oh=00_AT-0LhSggnTCc8jkCzm0Uk0_T895dUdS6DnEa4uK3jML2g&oe=627DE33D"/>
                <aside>
                    <p>Fullname: Esteban Echeverri Jaramillo</p>
                    <p>Age: 24</p>
                    <p>Institution: GVSU</p>
                    <p>Department: ACI</p>
                    <p>Degree: M.S. Applied Computer Science</p>
                    <p className="quote">"No man chooses evil because it is evil; he only mistakes it for happiness" Mary Wollstonecraft</p>
                </aside>
            </div>
        </div>
        <br/>
        <br/>
        <table>
            <thead>
                <tr>
                    <th colspan="2">
                        <a href="https://top40weekly.com/top-100-best-selling-albums-bases-on-riaa-certified-units-sold/">
                        Top 15 Best selling albums
                        </a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="table-main">Artist</td>
                    <td className="table-main">Album</td>
                </tr>
                <tr>
                    <td>EAGLES</td>
                    <td>EAGLES/THEIR GREATEST HITS 1971 - 1975</td>
                </tr>
                <tr>
                    <td>MICHAEL JACKSON</td>
                    <td>THRILLER</td>
                </tr>
                <tr>
                    <td>EAGLES</td>
                    <td>HOTEL CALIFORNIA</td>
                </tr>
                <tr>
                    <td>AC/DC</td>
                    <td>BACK IN BLACK</td>
                </tr>
                <tr>
                    <td>LED ZEPPELIN</td>
                    <td>LED ZEPPELIN IV</td>
                </tr>
                <tr>
                    <td>THE BEATLES</td>
                    <td>THE BEATLES</td>
                </tr>
                <tr>
                    <td>BILLY JOEL</td>
                    <td>GREATEST HITS VOLUME I & VOLUME II</td>
                </tr>
                <tr>
                    <td>PINK FLOYD</td>
                    <td>THE WALL</td>
                </tr>
                <tr>
                    <td>GARTH BROOKS</td>
                    <td>DOUBLE LIVE</td>
                </tr>
                <tr>
                    <td>HOOTIE & THE BLOWFISH</td>
                    <td>CRACKED REAR VIEW</td>
                </tr>
                <tr>
                    <td>FLEETWOOD MAC</td>
                    <td>RUMOURS</td>
                </tr>
                <tr>
                    <td>SHANIA TWAIN</td>
                    <td>COME ON OVER</td>
                </tr>
                <tr>
                    <td>GARTH BROOKS</td>
                    <td>NO FENCES</td>
                </tr>
                <tr>
                    <td>GUNS N ROSES</td>
                    <td>APPETITE FOR DESTRUCTION</td>
                </tr>
                <tr>
                    <td>WHITNEY HOUSTON</td>
                    <td>THE BODYGUARD (SOUNDTRACK)</td>
                </tr>
            </tbody>
        </table>
        <footer>
            <a>2022 Esteban</a>
            <a className="last-item" href="#page-head"> <i className="material-icons">arrow_upward</i></a>
        </footer>
    </div>
  );
}

export default App;
