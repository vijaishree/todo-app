import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {getAllByTestId, render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from '../../ToDoList.js';

afterEach(cleanup);

it("diplays list" , ()=>{
    const { getByTestId } = render(<ToDoList />)

    expect(getByTestId('ToDoList')).toHaveTextContent("Nothing to do buddy. Sleep!!");
 })