import {React} from 'react';

import { Link } from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.css';

export default function Tp5() {
return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
        <div className='collapse navbar-collapse'>
        <ul className="navbar-nav mr-auto">
            <li class="nav-item">
            <Link to='./CalcState' className='nav-link' >Calculatrice</Link>
            </li>
            <li className="nav-item">
            <Link to='./Slider'className='nav-link'>Slider</Link>
            </li>
            <li>
            <Link to='./Formtasks'className='nav-link'>To Do Tasks</Link>
            </li>
            <li className="nav-item">
            <Link to='./UseEffectTp' className='nav-link'>API</Link>
            </li>
        </ul>
        </div>
        </nav>
    </div>
)
}
