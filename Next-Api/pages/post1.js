import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";

//Receiving Props from Planets Page
const Post1 = props => (
  <Layout>
    {/* Card and layout */}
    <div style={{ alignContent: "center", margin: "150px 0 0 300px" }}>
      <div class="list-group" style={{ width: "36rem" }}>
        <img
          style={{ height: "200px", width: "100%", display: "block" }}
          src="../static/planet.jpg"
          alt="Card image"
        ></img>
        <h1 class="list-group-item list-group-item-action active">
          NAME: {props.title.name}
        </h1>

        <p class="list-group-item list-group-item-action">
          NAME: {props.title.name}
        </p>
        <p class="list-group-item list-group-item-action">
          CLIMATE: {props.title.climate}
        </p>
        <p class="list-group-item list-group-item-action">
          DIAMETER: {props.title.diameter}
        </p>
        <p class="list-group-item list-group-item-action">
          POPULATION: {props.title.population}
        </p>
        <p class="list-group-item list-group-item-action">
          ROTATION PERIOD: {props.title.rotation_period}
        </p>
      </div>
    </div>
  </Layout>
);

//Get forwarded data by id
Post1.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/planets/${id}`);
  const title = await res.json();

  console.log(`Fetched title: ${title.name}`);

  return { title };
};

export default Post1;
