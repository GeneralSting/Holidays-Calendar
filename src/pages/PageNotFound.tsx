import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page not found!</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="centered-div">
        <h1>page not found!</h1>
      </div>
    </>
  );
};

export default PageNotFound;
