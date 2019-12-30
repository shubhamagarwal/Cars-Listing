import React from 'react'
import {render, screen} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import Error from './Error';

describe('Error', () => {
    it('Error text should exist', () => {
        render(<Router><Error /></Router>);
        expect(screen.getByText('404 Not Found')).toBeInTheDocument()
    });
});
