import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../../actions';
import styles from './BooksForm.module.css';

const {
  flex,
  newBookDiv,
  titleInput,
  categoryInput,
  submitBtn,
  fieldSize,
} = styles;

const BooksForm = props => {
  const { categories, submitBookDetails } = props;

  const initialState = {
    title: '',
    category: 'Category',
  };

  const [bookDetails, setBookDetails] = useState(initialState);

  const { title, category } = bookDetails;

  const handleChange = e => {
    setBookDetails(prevDetails => {
      const newDetails = { ...prevDetails };
      newDetails[e.target.id] = e.target.value;
      return newDetails;
    });
  };

  const handleSubmit = () => {
    submitBookDetails(bookDetails);
    setBookDetails(initialState);
  };

  return (
    <div className={newBookDiv}>
      <h3>ADD NEW BOOK</h3>
      <div className={flex}>
        <input
          className={[titleInput, fieldSize].join(' ')}
          value={title}
          placeholder="Book title"
          type="text"
          id="title"
          onChange={handleChange}
        />
        <select
          className={[categoryInput, fieldSize].join(' ')}
          placeholder="category"
          id="category"
          value={category}
          onChange={handleChange}
        >
          <option disabled selected>
            Category
          </option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button
          className={[submitBtn, fieldSize].join(' ')}
          type="submit"
          onClick={handleSubmit}
        >
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

BooksForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitBookDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  submitBookDetails: createBook,
};

export default connect(null, mapDispatchToProps)(BooksForm);
