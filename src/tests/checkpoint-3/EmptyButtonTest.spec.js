import React from 'react';
import {getAllByTestId, render,cleanup, getByTestId, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmptyButton from '../../EmptyButton.js'
import {jest} from '@jest/globals'

afterEach(cleanup);

describe("working of empty button",()=>{
    it("is not disabled", () =>{
        
        const {getByTestId} = render(<EmptyButton />)

        expect(getByTestId("EmptyButton")).not.toBeDisabled();
    })
})

test("it clears list",async () => {
        
    const mockCallback = jest.fn(() => {});

    const {getByTestId} = render(<EmptyButton onClick={mockCallback}/>)

    fireEvent.click(getByTestId("EmptyButton"))

    expect(mockCallback.mock.calls.length).toBe(1);

})