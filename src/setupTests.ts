import { vi } from 'vitest'
import '@testing-library/jest-dom'

// jsdom doesn't implement IntersectionObserver (used by the Scrollspy nav)
class MockIntersectionObserver {
  observe = () => {}
  unobserve = () => {}
  disconnect = () => {}
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
