import React from 'react';
import Paginate from 'react-paginate';

const Pagination = ({ className, length, page=10, ...props }) => props.pageCount > 1 && (
    <div className={`d-flex ${className}`}>
        <Paginate
            disableInitialCallback={true}
            containerClassName=""
            {...props}
            pageCount={Math.ceil(length / page)}
            // previousLabel={<button className='btn btn-icon'><ChevronBottom className='rotate-90' /></button>}
            // nextLabel={<button className='btn btn-icon'><ChevronBottom className='rotate-270' /></button>}
            breakLabel={'..'}
            pageLinkClassName="btn btn-text text-dark-0"
            activeLinkClassName="active text-primary"
        />
    </div>
)

export default Pagination;