import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {getAllByTestId, render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from '../../ToDoList.js';

afterEach(cleanup);

it("diplays list" , ()=>{
    const { getAllByTestId } = render(<ToDoList />)

    expect(getAllByTestId('ToDoList')).not.toBeNull();
 })