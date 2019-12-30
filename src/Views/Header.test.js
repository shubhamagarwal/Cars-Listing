import React from 'react'
import {render, screen} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
    it('Header text should exist', () => {
        render(<Router><Header /></Router>);
        expect(screen.getByText('Sell')).toBeInTheDocument()
    });
});
