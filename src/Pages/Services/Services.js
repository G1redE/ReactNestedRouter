import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h2>Contact</h2>

      <Route path={path}>
        <ul>
          <li>
            <Link to={`${url}/Call`}>CallUs</Link>
          </li>
          <li>
            <Link to={`${url}/Email`}>Email Us</Link>
          </li>
        </ul>
      </Route>
      <Route path={`${path}/:id`} component={Service} />
    </div>
  );
};

export default Services;