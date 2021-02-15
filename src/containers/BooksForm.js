import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const BooksForm = props => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const { submitBookDetails } = props;

  const initialState = {
    title: '',
    category: categories[0],
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
    <div>
      <br />
      Add a book
      <br />
      <label htmlFor="title">
        Title:
        <input value={title} type="text" id="title" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="category">
        Select a Category:
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleChange}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <br />
      <br />
    </div>
  );
};

BooksForm.propTypes = {
  submitBookDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  submitBookDetails: createBook,
};

export default connect(null, mapDispatchToProps)(BooksForm);
