import React from 'react';

const CategorySelector = ({ categories, onCategoryChange }) => {
  return (
    <div>
      {categories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            value={category}
            onChange={onCategoryChange}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default CategorySelector;
