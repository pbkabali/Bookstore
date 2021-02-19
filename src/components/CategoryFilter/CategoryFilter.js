import PropTypes from 'prop-types';
import styles from './CategoryFilter.module.css';

const { filter } = styles;

const CategoryFilter = ({ categories, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <label htmlFor="category">
      Filter by category:
      <select className={filter} onChange={handleChange}>
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
