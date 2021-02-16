import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header/Header';

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
      <Header />
      <BooksList categories={categories} />
      <BooksForm categories={categories} />
    </div>
  );
};

export default App;
