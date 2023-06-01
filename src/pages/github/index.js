import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// import { Link } from "react-router-dom";
import { GitHubData } from "./github";

export const GithubPageApi = () => {
  const [username, setUsername] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <HelmetProvider>
      <div id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> github api integration</title>
          <meta name="description" content="github api integration" />
        </Helmet>
        <div >
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <p className="mb-1x">
                  This section demonstrate integration to an APIs( GitHub API
                  Repository)
                </p>
                <div className="intro_btn-action pb-5">
                  <div>
                    <form onSubmit={handleSubmit}>
                      <label>
                        Type a Github Username:
                        <input
                          type="text"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                        />
                      </label>
                      {/* <button type="submit">Submit</button> */}
                    </form>
                    <GitHubData username={username} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

