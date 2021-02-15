import PropTypes from 'prop-types';

const Book = props => {
  const { book, deleteBook } = props;
  const { id, title, category } = book;

  const handleRemoveBook = () => {
    deleteBook(book);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={handleRemoveBook}>
          Remove Book
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
