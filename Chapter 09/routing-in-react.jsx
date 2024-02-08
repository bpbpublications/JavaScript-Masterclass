import { BrowserRouter as Router, Route, Link, NavLink, useHistory, useParams  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function MyComponent() {
  const history = useHistory();

  function handleClick() {
    history.push('/new-route');
  }

  return <button onClick={handleClick}>Go to New Route</button>;
}

function UserDetails() {
  const { id } = useParams();

  // Use the id parameter in your component
  // ...
}
