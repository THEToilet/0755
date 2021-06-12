const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={process.env.PUBLIC_URL + '0755.gif'} alt="logo"/>
            <div className="header-back"><h1></h1></div>
            <div className="header-bottom"></div>
        </div>
    );
};

export default Header;