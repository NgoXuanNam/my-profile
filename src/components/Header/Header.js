import React from 'react';
import Introduce from './Introduce/Introduce';
import Navbar from './Navbar/Navbar';

export default function Header() {
    return (
        <div className="header">
            <Navbar />
            <hr />
            <Introduce />
        </div>
    );
}
