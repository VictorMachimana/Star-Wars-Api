import Head from "next/head";
import Navbar from "./Navbar";

// The main layout for my app
const Layout = props => (
  <html>
    {/* header section */}
    <Head>
      <title>Portfolio</title>
      {/* import bootswatch cdn link */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.3.1/lux/bootstrap.css"
      />
      {/* import font-awesome cdn link */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
    {/* body section */}
    <body>
      <Navbar />
      <div
        className="container"
        style={{
          margin: "0",
          padding: "0",
          width: "100%",
          paddingBottom: "300px"
        }}
      >
        {props.children}
      </div>
    </body>
    <style jsx>{`
      body {
        background-image: url(../static/space3.png);
        background-size: cover;
      }
    `}</style>
  </html>
);
export default Layout;
