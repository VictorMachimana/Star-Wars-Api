import Layout from "../components/Layout";
import Link from "next/link";

//extra styling
const box2 = {
  display: "flex",
  textAlign: "center",
  alignContent: "center",
  padding: "5px",
  margin: "150px"
};

const box3 = {
  textAlign: "center",
  alignContent: "center",
  padding: "5px",
  margin: "20px"
};

const opt = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  borderBottom: "1px solid white",
  cursor: "pointer"
};

const img = {
  height: "250px",
  width: "250px",
  border: "3px solid #ddd",
  cursor: "pointer"
};

//Home page
const Index = props => (
  <div>
    <Layout>
      <div className="box">
        {/* show case section, star wars welcome */}
        <h1 className="home">Welcome</h1>
        <img
          src="../static/star-wars.jpg"
          alt="planet"
          width="107.6%"
          height="380px"
        />
      </div>
      {/* Category and options, click to go to page */}
      <div style={box2}>
        <span style={box3}>
          <Link href="/planets">
            <img src="../static/planet2.jpg" alt="planet" style={img} />
          </Link>
          <Link href="/planets">
            <p style={opt}>PLANTE'S</p>
          </Link>
        </span>
        <span style={box3}>
          <Link href="/people">
            <img src="../static/the-force.jpg" alt="planet" style={img} />
          </Link>
          <Link href="/people">
            <p style={opt}>PEOPLE</p>
          </Link>
        </span>
        <span style={box3}>
          <Link href="/species">
            <img src="../static/species2.jpg" alt="planet" style={img} />
          </Link>
          <Link href="/species">
            <p style={opt}>SPECIES</p>
          </Link>
        </span>
      </div>
      {/* jsx styling */}
      <style jsx>{`
        .box {
          position: relative;
          border-top: 5px solid white;
          border-bottom: 5px solid white;
          width="107.6%"
        }

        .home {
          position: absolute;
          top: 40%;
          left: 54%;
          transform: translate(-50%, -50%);
          font-size: 18px;
          color: #ffd700;
          font-size: 71px;
          font-weight: bold;
        }
      `}</style>
    </Layout>
  </div>
);

export default Index;
