import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import act from 'react';
import {getAllByTestId, render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoApp from '../../main/org/example/ToDoApp/Todo-app.js';

afterEach(cleanup);

it("displays list" ,async ()=>{
    let list = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]
    const {getAllByTestId} = render(<TodoApp />)

    expect(getAllByTestId('ToDoList')).not.toBeNull();
    
 })