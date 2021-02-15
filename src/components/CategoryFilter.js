import PropTypes from 'prop-types';

const CategoryFilter = ({ categories, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <label htmlFor="category">
      Filter:
      <select onChange={handleChange}>
        <option>All</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
