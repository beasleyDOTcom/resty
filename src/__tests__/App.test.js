//rfc enter to make skeleton component

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';
import Results from '../components/contentArea/Results.js'
import {rest} from 'msw';
import {setupServer} from 'msw/node';


test('dynamically updates number', async () =>{
  const count = 82;
  const results = { 
    "name": "Luke Skywalker",
  }
  const headers = {
    "content-type": "application/json",
  }

  render (
    <Results count={count} results={results} headers={headers}/>
  )
  // const items = screen.getAllByRole('listitem');
  // expect(items).toHaveLength(1);
  expect(screen.getByText('"Luke Skywalker"')).toBeInTheDocument();
  // expect(screen.getByText('"Luke"')).toHaveTextContent('Luke Skywalker');
});

const server = setupServer(
  rest.get('*', (req, res, ctx) =>{
    return res(ctx.json({
      results:[
        {name: 'fools'},
        {name: 'rush in'}
      ]
    }))
  })
)

beforeAll(()=> server.listen());
afterEach(()=> server.resetHandlers());
afterAll(()=> server.close());

it('should load and display names', () => {
  render(<App/>);

  screen.getByText('ReSTy');

  const urlInput = screen.getByPlaceholderText('http://api.url.here');
  fireEvent.change(urlInput, {event:{target: 'https://swapi.dev/api/people/'}})

  fireEvent.click(screen.getByText('Go!'))

  screen.debug();
});