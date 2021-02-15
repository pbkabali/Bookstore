import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, removeBook } from '../actions';

const BooksList = props => {
  const {
    categories, books, removeBook, filter, changeFilter,
  } = props;

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  const filterBooks = (books, filter) => (filter === 'All' ? books : books.filter(book => book.category === filter));

  return (
    <div>
      <CategoryFilter categories={categories} onChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {filterBooks(books, filter).map(book => (
            <Book key={book.id} book={book} deleteBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = {
  removeBook,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
