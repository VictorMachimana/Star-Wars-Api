import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

//Planets Page
const Planets = props => (
  <Layout>
    <div style={{ textAlign: "center" }}>
      {/* show case section */}
      <div className="box">
        <h1 className="planets">Planets</h1>
        <img
          src="../static/planet2.jpg"
          alt="planet"
          width="107.6%"
          height="320px"
        />
      </div>
      {/* Mapping the planets data */}
      <ul>
        {props.planets.results.map((result, id) => (
          <li key={result.name}>
            <Link href={`/post1?id=${id + 2}`}>
              <a>{result.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      {/* jsx styling */}
      <style jsx>{`
        .box {
          position: relative;
        }

        .planets {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 18px;
          color: white;
          font-size: 70px;
          font-weight: bold;
        }

        ul {
          font-size: 16px;
          font-weight: bold;
          position: relative;
          width: 450px;
          margin: 100px auto 0;
          padding: 10px;
          box-sizing: border-box;
        }

        ul li {
          display: flex;
          background: rgba(255, 255, 255, 0.1);
          padding: 10px 20px;
          color: #fff;
          margin: 5px 0;
          transition: 0.5s;
        }

        ul li:nth-child(1) {
          background: rgba(255, 255, 255, 0.5);
        }

        ul li:nth-child(2) {
          background: rgba(255, 255, 255, 0.5);
        }

        ul li:nth-child(3) {
          background: rgba(255, 255, 255, 0.4);
        }

        ul li:nth-child(4) {
          background: rgba(255, 255, 255, 0.4);
        }

        ul li:nth-child(5) {
          background: rgba(255, 255, 255, 0.3);
        }

        ul li:nth-child(6) {
          background: rgba(255, 255, 255, 0.3);
        }

        ul li:nth-child(7) {
          background: rgba(255, 255, 255, 0.2);
        }

        ul li:nth-child(8) {
          background: rgba(255, 255, 255, 0.2);
        }

        ul li:hover {
          transform: scale(1.06);
          background: #ba55d3;
        }
      `}</style>
    </div>
  </Layout>
);

//API Get request using getInitialProps
Planets.getInitialProps = async function() {
  const res = await fetch("https://swapi.co/api/planets");
  const data = await res.json();

  return {
    planets: data
  };
};

export default Planets;
