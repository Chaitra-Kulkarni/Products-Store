const Header = (props) => {

  return (
    <div className="d-flex justify-content-around bg-success">
    <label className="bg-dark text-white fs-5 p-2 m-2 border border-2 border-warning rounded-pill">Shopping Adda</label>
      <input
        type="search"
        placeholder="Search"
        className="border border-light border-2 rounded-2 align-self-center"
      />
      <label className="text-white align-self-center fs-5">
        Total Items:
      </label>
    </div>
  );
};

export default Header;
