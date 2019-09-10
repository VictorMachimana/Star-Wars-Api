import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

//Species Page
const Species = props => (
  <Layout>
    <div style={{ textAlign: "center" }}>
      <div className="box">
        <h1 className="species">species</h1>
        <img
          src="../static/species3.png"
          alt="species"
          width="107.6%"
          height="320px"
        />
      </div>
      {/* Mapping the peoples data */}
      <ul>
        {props.species.results.map((result, id) => (
          <li key={result.name}>
            <Link href={`/post3?id=${id + 2}`}>
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

        .species {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 18px;
          color: #ffd700;
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
Species.getInitialProps = async function() {
  const res = await fetch("https://swapi.co/api/species");
  const data = await res.json();

  return {
    species: data
  };
};

export default Species;
