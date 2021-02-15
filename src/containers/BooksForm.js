import { useState } from 'react';

import { useState } from 'react';

const BooksForm = () => {
  const [bookDetails, setBookDetails] = useState({ title: '', category: '' });

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
    <form>
      <br />
      Add a book
      <br />
      <label htmlFor="title">
        Title:
        <input type="text" id="title" />
      </label>
      <br />
      <label htmlFor="category">
        Select a Category:
        <select name="category" id="category">
          {categories.map((category) => (
            <option key={category} value="volvo">
              {category}
            </option>
          ))}
        </select>
      </label>
      <br />
      <input type="submit" />
      <br />
      <br />
    </form>
  );
};

export default BooksForm;
