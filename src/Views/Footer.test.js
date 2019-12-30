import React from 'react'
import {render, screen} from '@testing-library/react'
import Footer from './Footer';

describe('Footer', () => {
    it('footer text should exist', () => {
        render(<Footer />);
        expect(screen.getByText('AUTO1 Group 2019')).toBeInTheDocument()
    });
});
