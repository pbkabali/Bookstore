import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <div>
      <BooksForm categories={categories} />
      <BooksList categories={categories} />
    </div>
  );
};

export default App;
