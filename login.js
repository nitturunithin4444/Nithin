import React from'react';
import {Outlet,Link} from 'react-router-dom';
const Form=()=>{
    return(
        <>
        <nav>
            <ol>
                <li>
                    <Link to ='/'>Register</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/sign up'>sign up</Link>
                            </li>
            </ol>
        </nav>
    </>
    );
}
export default Form;