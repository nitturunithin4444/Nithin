import React from 'react';
//import './first.css';
//import {render} from '@testing.library/react';
import ExpenseEntryItem from './component';
import Counter from './second';
import Register from './registration';
import './third.css';
import UseEffect from './useEffect';
function Add()
{
    return(
        <div>
            <center><h1>Hello World</h1>
            <ExpenseEntryItem></ExpenseEntryItem>
            <Counter></Counter>
            <div class='main'>
            <fieldset>
            <Register></Register></fieldset></div>
            <UseEffect></UseEffect></center>
        </div>
    );
}
export default Add;