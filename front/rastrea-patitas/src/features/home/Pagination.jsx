/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="flex justify-center mt-4">
            {pageNumbers.map((number) => (
                <li key={number} className="mx-2">
                    <button onClick={() => paginate(number)} className={`border w-9 px-3 py-1 rounded-lg ${currentPage === number ? 'bg-gray-300' : 'hover:bg-gray-300'}`}>{number}</button>
                </li>
            ))}
        </ul>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
};

export default Pagination;