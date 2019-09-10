import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";

//Receiving Props from People Page
const Post2 = props => (
  <Layout>
    {/* Card and layout */}
    <div style={{ alignContent: "center", margin: "150px 0 0 300px" }}>
      <div class="list-group" style={{ width: "30rem" }}>
        <img
          style={{ height: "200px", width: "100%", display: "block" }}
          src="../static/people2.jpg"
          alt="Card image"
        ></img>
        <h1 class="list-group-item list-group-item-action active">
          NAME: {props.title.name}
        </h1>
        <p class="list-group-item list-group-item-action">
          HEIGHT: {props.title.height}
        </p>
        <p class="list-group-item list-group-item-action">
          MASS: {props.title.mass}
        </p>
        <p class="list-group-item list-group-item-action">
          HAIR COLOR: {props.title.hair_color}
        </p>
        <p class="list-group-item list-group-item-action">
          SKIN COLOR: {props.title.skin_color}
        </p>
        <p class="list-group-item list-group-item-action">
          EYE COLOR: {props.title.eye_color}
        </p>
        <p class="list-group-item list-group-item-action">
          BIRTH YEAR: {props.title.birth_year}
        </p>
        <p class="list-group-item list-group-item-action">
          GENDER: {props.title.gender}
        </p>
      </div>
    </div>
  </Layout>
);

//Get forwarded data by id
Post2.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/people/${id}`);
  const title = await res.json();

  console.log(`Fetched title: ${title.name}`);

  return { title };
};

export default Post2;
