import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import Results from '../components/contentArea/Results'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/popo/i);
  expect(linkElement).toBeInTheDocument();
});

test('dynamically updates number', async () =>{
  const count = 82;
  const paypal = { 
    "Luke Skywalker": "is the best",
  }
  render (
    <Results results={paypal} count={count}/>
  )
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(1);
  expect(items[0]).toHaveTextContent('Luke Skywalker');
});