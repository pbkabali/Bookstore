import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BooksList = (props) => {
  const { books } = props;
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map((book) => (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.category}</td>
        </tr>
      ))}
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
