import PropTypes from 'prop-types';

const CategoryFilter = ({ categories }) => (
  <label htmlFor="category">
    Filter:
    <select>
      <option>All</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </label>
);

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoryFilter;
