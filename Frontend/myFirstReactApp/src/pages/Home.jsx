import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center text-primary">Welcome to Home Page!!!</h1>

          <p className="text-center mt-4">
            This is the home page of our application. You can explore our
            products and services by clicking the button below. We offer a wide
            range of products that cater to your needs. Feel free to browse
            through our collection and find exactly what you're looking for.
          </p>

          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-primary me-2"
              onClick={() => navigate("/product")}
            >
              Check our Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
