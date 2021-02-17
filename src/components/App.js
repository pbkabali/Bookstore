import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BookForm/BooksForm';
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
      <div className="side-padding">
        <BooksForm categories={categories} />
      </div>
    </div>
  );
};

export default App;
