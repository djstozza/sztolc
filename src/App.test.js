import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { act } from 'react-dom/test-utils'

it('renders without crashing', () => {
    act(async () => {
        const div = document.createElement('div')
        render(<App />, div)
    })
});