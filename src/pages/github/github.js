import React, { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import "./style.css";

export const GitHubData = ({ username }) => {
  const [user, setUser] = useState([]);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const octokit = new Octokit({
      auth: process.env.auth,
    });

    octokit.rest.users
      .getByUsername({
        username: username,
      })
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);

  useEffect(() => {
    const octokit = new Octokit({
      auth: process.env.auth,
    });

    octokit.rest.repos
      .listForUser({
        username: username,
      })
      .then(({ data }) => {
        setRepo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);

  return (
    <div>
      <img src={user.avatar_url} alt={user.name} />
      <h1>Name: {user.name}</h1>
      <p>Username: {user.login}</p>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
      <p>
        Website: <a href={user.blog}>{user.blog}</a>
      </p>
      <div className='repo'>
        <h1>Repositories Section</h1>
        {repo.map((r) => {
            return (
              <div key={r.id}>
                <h2>{r.name}</h2>
                <p>{r.description}</p>
              </div>
            );
        })}
      </div>
    </div>
  );
};
