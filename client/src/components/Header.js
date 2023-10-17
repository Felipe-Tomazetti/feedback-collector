import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "./Payments";

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
        return [
          <li key={1}><Payment/></li>,
          <li key={2}><a href="/api/logout"> Logout </a></li>
        ];
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