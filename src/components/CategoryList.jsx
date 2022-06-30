const CategoryList = (props) => {
  console.log("categories: ", props);

  //getSelectedcatg = (e) => {
    const getSelectedCategory = (e) => {
      console.log(e.target.value);
      props.handleCategoryChange(e.target.value);
    }

  return (
    <div>
      <label>Filter :</label>
      {props.category && props.category.map((cat) => {
        return (
          <>
            <button className="btn btn-warning btn-sm m-2" href="#" value={cat} onClick={getSelectedCategory}>
              {cat}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default CategoryList;
