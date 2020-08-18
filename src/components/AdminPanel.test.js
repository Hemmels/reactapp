import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import AdminPanel from './AdminPanel';
// Testing addons
import "@testing-library/jest-dom/extend-expect"
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// Server mocks requests
const server = setupServer(
	rest.get('/api/addendpoint', (req, res, ctx) => {
		// respond uwith a new id (assume we added ok)
		return res(2)
	})
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

test('Renders component', () => {
	render(<AdminPanel />)
	// Check page elements exist
	expect(screen.getByPlaceholderText('Add url to ping')).toBeTruthy();
	expect(screen.getByRole("button").textContent).toBe('Add')
})

test('User adds an endpoint', async () => {
	const { getByText } = render(<AdminPanel />)
	screen.getByPlaceholderText('Add url to ping').nodeValue = "sometest"
	fireEvent.click(getByText('Add'))
	// Ensure text value is cleared
	expect(screen.getByPlaceholderText('Add url to ping')).toHaveTextContent('')
})

test('500 error adding endpoint', async () => {
	server.use(
		// override the initial request handler
		// to return a 500 Server Error
		rest.get('/api/addendpoint', (req, res, ctx) => {
			return res(ctx.status(500))
		})
		// TODO What should the front end do here?
	)
})