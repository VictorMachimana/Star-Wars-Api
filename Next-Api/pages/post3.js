import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";

//Receiving Props from Species Page
const Post3 = props => (
  <Layout>
    {/* Card and layout */}
    <div style={{ alignContent: "center", margin: "150px 0 0 300px" }}>
      <div class="list-group" style={{ width: "30rem" }}>
        <img
          style={{ height: "200px", width: "100%", display: "block" }}
          src="../static/species.jpg"
          alt="Card image"
        ></img>
        <h1 class="list-group-item list-group-item-action active">
          NAME: {props.title.name}
        </h1>
        <p class="list-group-item list-group-item-action">
          CLASSIFICATION: {props.title.classification}
        </p>
        <p class="list-group-item list-group-item-action">
          DESIGNATION: {props.title.designation}
        </p>
        <p class="list-group-item list-group-item-action">
          AVERAGE HEIGHT: {props.title.average_height}
        </p>
        <p class="list-group-item list-group-item-action">
          SKIN COLOR: {props.title.skin_color}
        </p>
        <p class="list-group-item list-group-item-action">
          HAIR COLOR: {props.title.hair_color}
        </p>

        <p class="list-group-item list-group-item-action">
          EYE COLOR: {props.title.eye_color}
        </p>
        <p class="list-group-item list-group-item-action">
          AVERAGE LIFESPAN: {props.title.average_lifespan}
        </p>
        <p class="list-group-item list-group-item-action">
          HOME WORLD: {props.title.homeworld}
        </p>
        <p class="list-group-item list-group-item-action">
          LANGUAGE: {props.title.language}
        </p>
      </div>
    </div>
  </Layout>
);

//Get forwarded data by id
Post3.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/species/${id}`);
  const title = await res.json();

  console.log(`Fetched title: ${title.name}`);

  return { title };
};

export default Post3;
