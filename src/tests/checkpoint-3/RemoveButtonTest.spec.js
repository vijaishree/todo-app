import React from 'react';
import {getAllByTestId, render,cleanup, getByTestId, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RemoveButton from '../../Button/RemoveButton.js'
import {jest} from '@jest/globals'

afterEach(cleanup);

describe("working of empty button",()=>{
    it("is not disabled", () =>{
        
        const {getByTestId} = render(<RemoveButton />)

        expect(getByTestId("RemoveButton")).not.toBeDisabled();
    })
})

test("it clears list",async () => {
        
    const mockCallback = jest.fn(() => {});

    const {getByTestId} = render(<RemoveButton onClick={mockCallback}/>)

    fireEvent.click(getByTestId("RemoveButton"))

    expect(mockCallback.mock.calls.length).toBe(1);

})