import React from 'react';

const FilterProducts = ({manufacturers, filterItems}) => {

    return (
        <div className="btn-container">
{manufacturers.map((manufacturer,index)=> {
    return <button type="button" className="filter-btn" key={index} onClick={()=> filterItems(manufacturer)} >{manufacturer}</button>
})}
        </div>
    )

};

export default FilterProducts;