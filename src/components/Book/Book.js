import PropTypes from 'prop-types';
import styles from './Book.module.css';
import img from '../../images/progressBar.png';

const {
  flex,
  bookCard,
  categoryLabel,
  titleLabel,
  author,
  action,
  actionsDiv,
  separator,
  currentChapter,
  chapter,
  updateBtn,
  progressDiv,
  loadingDiv,
  completed,
  percentage,
} = styles;

const Book = props => {
  const { book, deleteBook } = props;
  const { title, category } = book;

  const handleRemoveBook = () => {
    deleteBook(book);
  };
  return (
    <div className={[flex, bookCard].join(' ')}>
      <div>
        <p className={categoryLabel}>{category}</p>
        <p className={titleLabel}>{title}</p>
        <p className={author}>Author</p>
        <div className={[flex, actionsDiv].join(' ')}>
          <button type="button" className={action}>
            Comments
          </button>
          <span className={separator}>|</span>
          <button type="button" className={action} onClick={handleRemoveBook}>
            Remove
          </button>
          <span className={separator}>|</span>
          <button type="button" className={action}>
            Edit
          </button>
        </div>
      </div>
      <div className={[flex, progressDiv].join(' ')}>
        <div className={[flex, loadingDiv].join(' ')}>
          <img alt="Progress icon" src={img} />
          <div>
            <p className={percentage}>64%</p>
            <p className={[author, completed].join(' ')}>Completed</p>
          </div>
        </div>
        <div>
          <p className={currentChapter}>CURRENT CHAPTER</p>
          <p className={[currentChapter, chapter].join(' ')}>Chapter 07</p>
          <button className={updateBtn} type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
