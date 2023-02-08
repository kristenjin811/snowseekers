import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SkiResortList from './components/SkiResortList';


describe('SkiResortList', () => {
  it('displays the number of ski resorts found', () => {
    const { getByText } = render(<SkiResortList />);
    expect(getByText({SkiResortList.length} + 'results found:')).toBeInTheDocument();
  });

  it('displays the ski resorts', () => {
    const { getByText } = render(<SkiResortList />);
    expect(getByText('Aspen Mountain')).toBeInTheDocument();
    expect(getByText('Vail Mountain')).toBeInTheDocument();
    expect(getByText('Breckenridge')).toBeInTheDocument();
  });

  it('deletes a ski resort', () => {
    const { getByText, queryByText } = render(<SkiResortList />);
    fireEvent.click(getByText('Delete'));
    expect(queryByText('Aspen Mountain')).toBeNull();
  });
});
