import React from 'react';

const ListFooter = ({itemsLeft}) => {

    return (
        <span className="list-group-item fs-5 text-muted">{`${itemsLeft} item${itemsLeft > 0 ? 's' : ''} left`}</span>
    );
};

export default ListFooter;