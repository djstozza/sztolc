import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import App from './App'

it('renders without crashing', async () => {
  render(<App />)

  expect(await screen.findByText('Daniel Sztolcman')).toBeInTheDocument()
})
