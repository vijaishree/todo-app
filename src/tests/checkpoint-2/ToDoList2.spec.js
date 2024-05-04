import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import act from 'react';
import {getAllByTestId, render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from '../../ToDoList.js';

afterEach(cleanup);

it("diplays list" , async ()=>{
    const {getAllByTestId} = render(<ToDoList />)
    
    expect(getAllByTestId("ToDoList")[0].textContent).toEqual("Read SpringBoot");
    expect(getAllByTestId('ToDoList')[1].textContent).toEqual("Complete assignments");
    expect(getAllByTestId('ToDoList')[2].textContent).toEqual("Prepare breakfast");
    expect(getAllByTestId('ToDoList')[3].textContent).toEqual("Sleep for 2 hours");
    expect(getAllByTestId('ToDoList')[4].textContent).toEqual("Take a shower");
   
 })