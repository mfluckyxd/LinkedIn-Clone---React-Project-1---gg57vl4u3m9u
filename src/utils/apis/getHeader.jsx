const projectID = "gg57vl4u3m9u";
const authToken = sessionStorage.getItem("authToken");

console.log('while fetching', authToken);
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

export const headerWithJWT = ()=>{
  return {
    headers:{
      Authorization: `Bearer ${authToken}`,
      projectID: projectID,
      'Content-Type': "application/json"
      
    }
  }
}
