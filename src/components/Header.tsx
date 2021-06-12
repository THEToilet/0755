const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={process.env.PUBLIC_URL + '0755.gif'} alt="logo"/>
            <div className="header-back"/>
            <div className="header-bottom"/>
        </div>
    );
};

export default Header;