import React from 'react';
import {getAllByTestId, render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import Header from '../../Header/Header.js';

afterEach(cleanup);


it("diplays header" , ()=>{
    const {getByTestId} = render(<Header />)

    expect(getByTestId('Header')).toHaveTextContent('TODO LIST');
 })

 