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

  return (
    <form>
      <label htmlFor="title">Title:</label>
      <br />
      <input type="text" />
      <br />
      <label htmlFor="category">Select a Category:</label>
      <br />
      <select name="cars" id="cars">
        {categories.map((category, index) => (
          <option key={index} value="volvo">
            {category}
          </option>
        ))}
      </select>
      <input type="submit" />
    </form>
  );
};

export default BooksForm;
