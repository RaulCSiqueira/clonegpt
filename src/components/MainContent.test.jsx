import React from 'react';
import {render, screen} from '@testing-library/react';
import MainContent from './MainContent';

describe('MainContent', () => {
  test('renders MainContent component', () => {
    render(<MainContent />);

    // Suponha que o MainContent renderize um elemento com o texto "Conteúdo Principal"
    expect(screen.getByText('Conteúdo Principal')).toBeInTheDocument();
  });
});
