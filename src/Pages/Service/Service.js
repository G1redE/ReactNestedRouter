import React from "react";
import { useParams } from "react-router-dom";

const Service = () => {
  const { id } = useParams();
  const data = {
    "Call": {
      title: "Phone",
      description: "Call us At 1234566778",
    },
    "Email": {
      title: "Email",
      description: "Email us at xyz@abc.com",
    },
  };

  return (
    <div>
      <h2>{data[id].title}</h2>
      <p>{data[id].description}</p>
    </div>
  );
};

export default Service;