import React from 'react'
import './pagination.css'

export default function pagination({ programsPerPage, totalPrograms, paginate }) {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPrograms / programsPerPage); i++){
        pageNumber.push(i);
    }
    return (
        <div>
            <ul className="page-list-container">
                {pageNumber.map(number => (
                    <li key={number} className="page-list" onClick={() => paginate(number)}>
                        <a>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
