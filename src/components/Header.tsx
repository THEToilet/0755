const Header = () => {
    return (
        <div className="header">
            <div className="header-back">
                <img className="logo" src={process.env.PUBLIC_URL + '0755.gif'} alt="logo"/>
            </div>
            <div className="header-bottom"/>
        </div>
    );
};

export default Header;