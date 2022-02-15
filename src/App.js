
import "./App.css";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate(); // old analog == useHistory()
  //console.log(navigate);

  const handleClickBack = () => {
    navigate(-1); // navigate(-1) === history.goBack()
  };
  const handleAboutClick = (location) => {
    navigate(`about/${location}`); // navigate(-1) === history.goBack()
  };

  let location = useLocation();

  const eloquentJavascript = "Eloquent Javascript";
  const learningReact = "Learning React";

  const atAboutPage = location.pathname.includes("/about");
  return (
    <div className="App">
      <div>
        <header>
          <h1>l10, задание 2: routing / return</h1>
          <p>react router v6, see README</p>
          <p>
            <Link to="/" disabled>
              Home
            </Link>{" "}
            <Link to={`/about/${eloquentJavascript}`}>{eloquentJavascript}</Link>{" "}
            <Link to={`/about/${learningReact}`}>{learningReact}</Link> 
          </p>

          {atAboutPage ? (
            <button onClick={handleClickBack}>Back</button>
          ) : (
            <>
              <button onClick={() => handleAboutClick(eloquentJavascript)}>
                {eloquentJavascript}
              </button>
              <button onClick={() => handleAboutClick(learningReact)}>
                {learningReact}
              </button>
            </>
          )}
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
