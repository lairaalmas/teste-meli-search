import { Link, useRouteError } from "react-router-dom";

import "../../css/ErrorPage.min.css";

const ErrorPage = () => {
  const error = useRouteError();
  let message = "Something went wrong!";

  if (error && error.data && error.data.message) {
    message = error.data.message;
  }

  return (
    <main className="ErrorPage">
      <h1>{message}</h1>
      <p>
        Go back to <Link to="/">Home page</Link>
      </p>
    </main>
  );
};

export default ErrorPage;
