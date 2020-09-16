import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import Results from '../components/contentArea/Results'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/popo/i);
//   expect(linkElement).toBeInTheDocument();
// });

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