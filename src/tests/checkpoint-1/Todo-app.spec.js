import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {getAllByTestId, render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoApp from '../../Todo-app.js';

afterEach(cleanup);
//configure({adapter: new Adapter()});

it("diplays header" , ()=>{
    const {getByTestId} = render(<TodoApp />)

    expect(getByTestId('Header')).toHaveTextContent('TODO LIST');
 })

 