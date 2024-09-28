import React from 'react';
import ChevronBottom from '../../icons-v2/ChevronBottom';
import ReactPaginate from 'react-paginate';

const Pagination = ({ className, ...props }) => props.pageCount > 1 && (
    <div className={`d-flex ${className}`}>
        <ReactPaginate
            disableInitialCallback={true}
            containerClassName="list-unstyled d-flex gap-3 align-items-center me-auto"
            {...props}
            previousLabel={<button className='btn btn-icon'><ChevronBottom className='rotate-90' /></button>}
            nextLabel={<button className='btn btn-icon'><ChevronBottom className='rotate-270' /></button>}
            breakLabel={'..'}
            pageLinkClassName="btn btn-text text-normal"
            activeLinkClassName="active text-primary"
        />
    </div>
)

export default Pagination;