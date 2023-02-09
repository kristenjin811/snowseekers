import SkiResortList from "../components/SkiResortList"
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { getByTestId } from '@testing-library/dom'


afterEach(() => {
  cleanup()
})

describe('skiResortList', () => {
  it ('should render the title', () => {
    render(<BrowserRouter><SkiResortList /></BrowserRouter>)
    const title = screen.getByText('Ski Resorts')
    expect(title).toBeInTheDocument()
  })

  it('should render the empty list text when there are no ski resorts', () => {
    render(<BrowserRouter><SkiResortList /></BrowserRouter>);
    const emptyListText = screen.getByText("There's nothing on this page.");
    expect(emptyListText).toBeInTheDocument();
  });

})


const skiResorts = [
  { name: 'Vail', location: 'Colorado', skiRuns: 193 },
  { name: 'Aspen', location: 'Colorado', skiRuns: 76 },
  { name: 'Whistler Blackcomb', location: 'British Columbia', skiRuns: 8171 }
]

jest.spyOn(localStorage, 'getItem').mockImplementation(() => JSON.stringify(skiResorts));
jest.spyOn(localStorage, 'setItem');

test('deletes a ski resort', () => {
  const { getByTestId, getByText } = render(<BrowserRouter><SkiResortList /></BrowserRouter>);

  expect(getByTestId('number-of-ski-resorts').textContent).toBe('3 results found:');

  fireEvent.click(getByText('Delete'));

  expect(getByTestId('number-of-ski-resorts').textContent).toBe('2 results found:');
  expect(localStorage.setItem).toHaveBeenCalledWith('skiResorts', JSON.stringify([
    { name: 'Vail', location: 'Colorado', skiRuns: 193 },
    { name: 'Whistler Blackcomb', location: 'British Columbia', skiRuns: 8171 }
  ]));
});
