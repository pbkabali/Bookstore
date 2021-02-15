import { useState } from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const [bookDetails, setBookDetails] = useState({
    title: '',
    category: categories[0],
  });

  const { title, category } = bookDetails;

  const handleChange = e => {
    setBookDetails(prevDetails => {
      const newDetails = { ...prevDetails };
      newDetails[e.target.id] = e.target.value;
      return newDetails;
    });
  };

  return (
    <form>
      <br />
      Add a book
      <br />
      <label htmlFor="title">
        Title:
        <input value={title} type="text" id="title" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="category">
        Select a Category:
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleChange}
        >
          {categories.map(category => (
            <option key={category} value={category}>
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
