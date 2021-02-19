import PropTypes from 'prop-types';
import styles from './Book.module.css';

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
  singleChart,
  circularChart,
  circleBg,
  circle,
} = styles;

const Book = props => {
  const { book, deleteBook } = props;
  const {
    title, category, totalChapters, finishedChapters,
  } = book;
  const percentProgress = ((finishedChapters * 100) / totalChapters).toFixed(0);

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
          <div className={singleChart}>
            <svg viewBox="0 0 36 36" className={circularChart}>
              <path
                className={circleBg}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={circle}
                strokeDasharray={`${percentProgress}, 100`}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
          <div>
            <p className={percentage}>{`${percentProgress}%`}</p>
            <p className={[author, completed].join(' ')}>Completed</p>
          </div>
        </div>
        <div>
          <p className={currentChapter}>CURRENT CHAPTER</p>
          <p className={[currentChapter, chapter].join(' ')}>
            {`Chapter ${finishedChapters}`}
          </p>
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
