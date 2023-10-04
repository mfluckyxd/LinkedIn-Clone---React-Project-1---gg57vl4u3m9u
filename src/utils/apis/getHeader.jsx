const projectID = "gg57vl4u3m9u";

export const authHeader = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      projectID: projectID,
    },
  };
};

export const headerWithProjectIdOnly = () => {
  return {
    headers: {
      projectID: projectID,
    },
  };
};
