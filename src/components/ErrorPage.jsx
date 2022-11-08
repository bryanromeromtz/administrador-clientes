import { Link, useRouteError } from "react-router-dom";
import "../error-page.css";

export const Error404 = () => {
  return (
    <div
      className="error404"
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      <div className="code-area">
        <span style={{ color: "#777", fontStyle: "italic" }}>
          404 page not found.
        </span>
        <span>
          <span style={{ color: "#d65562" }}>if</span>(
          <span style={{ color: "#4ca8ef" }}>!</span>
          <span style={{ fontStyle: "italic", color: "#bdbdbd" }}>
            found
          </span>) {"{"}
        </span>
        <span>
          <span style={{ paddingLeft: "15px", color: "#2796ec" }}>
            <i style={{ width: "10px", display: "inline-block" }}></i>throw
          </span>
          <span>
            (<span style={{ color: "#a6a61f" }}>"(╯°□°)╯︵ ┻━┻"</span>);
          </span>
          <span style={{ display: "block" }}>{"}"}</span>
          <span style={{ color: " #777", fontStyle: "italic" }}>
            // <Link to="/">Go back</Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-5"
      role="alert"
    >
      <p className="font-bold">Error</p>
      <p>{error.status && error.status}</p>
      <p>{error.statusText && error.statusText}</p>
      <p>{error.message && error.message}</p>
    </div>
  );
};
