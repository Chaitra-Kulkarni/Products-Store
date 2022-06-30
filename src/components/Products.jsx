
const Products = (props) => {

  return (
    <div className="container-fluid">
      <div className="row">
        {props.productsList.map((product) => {
          return (
            <div
              className="col-9 bg-success bg-opacity-25 border border-dark m-1"
              style={{ width: "18rem" }}
              key={product.id}
            >
              <h6>{product.title}</h6>
              <img
                src={product.image}
                style={{ width: "10rem", height: "12rem" }}
              />
              <p style={{ fontWeight: "bold" }}>{`$ ${product.price}`}</p>
              <small className="bg-info p-1">{`Rate: ${product.rating.rate}`}</small>
              <button className="btn btn-dark">Add</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
