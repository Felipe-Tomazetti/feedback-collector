import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  const renderContent = () => {
    switch(props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Log in with Google</a></li>
        );
      default:
        return (
          <li><a href="/api/logout"> Logout </a></li>
        );
    }
  }
  return (
    <nav>
      <div className="nav-wrapper blue">
        <Link to={props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>

        <ul id="nav-mobile" className="right">
          {renderContent()}
        </ul>

      </div>
    </nav>
  )
};

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header);