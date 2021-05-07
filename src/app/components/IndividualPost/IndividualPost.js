const IndividualPost = ({ match }) => {
  const id = match.params.id;
  return <h1>{id}</h1>;
};

export default IndividualPost;
