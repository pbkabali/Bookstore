import PropTypes from 'prop-types';

const Book = props => {
  const { book: { id, title, category } = undefined } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
