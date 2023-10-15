import { connect } from "react-redux";

const Header = (props) => {

  console.log(props)
  const renderContent = () => {
    switch(props.atuh) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Log in with Google</a></li>
        );
      default:
        return (
          <li><a href="#"> Logout </a></li>
        );
    }
  }
  return (
    <nav>
      <div className="nav-wrapper blue">
        <a href="#" className="left brand-logo">Emaily</a>

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