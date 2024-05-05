import React from 'react';
import {getAllByTestId, render,cleanup, getByTestId, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RemoveButton from '../../RemoveButton.js'
import {jest} from '@jest/globals'
import TodoApp from '../../Todo-app.js';

describe("Testing Button" ,() => {

    it("Tests button" , () => {
        const {getByTestId} =  render(<RemoveButton />)

        expect(getByTestId('RemoveButton').textContent).toEqual("Remove")
    
        expect(getByTestId('RemoveButton')).not.toBeDisabled()
    })

    it("removes striked text" , () => {

    const component =  render(<TodoApp />)

    fireEvent.click(component.getAllByTestId('ToDoList')[0]) 

    fireEvent.click(component.getByTestId('RemoveButton'))

    expect(component.getAllByTestId('ToDoList')[0]).toHaveTextContent("Complete assignments");
    })

   
})
