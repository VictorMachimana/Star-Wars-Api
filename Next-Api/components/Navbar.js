import Link from "next/link";

// the main navigation bar
// Logo Icon made by https://www.flaticon.com/authors/freepik from https://www.flaticon.com/
const Navbar = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto" style={{ fontSize: "20px" }}>
        <li class="nav-item">
          <Link href="/">
            <a
              class="nav-link fa fa-space-shuttle"
              style={{ fontSize: "28px" }}
            ></a>
          </Link>
        </li>
        <li class="nav-item">
          <Link href="/planets">
            <a class="nav-link">Planets</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link href="/people">
            <a class="nav-link">People</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link href="/species">
            <a class="nav-link">Species</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
