const Operations = () => {
    return (
        <div className="operations">
            <img className="search" src={process.env.PUBLIC_URL + 'images/search_black_24dp.svg'} alt="search"/>
            <img className="sort" src={process.env.PUBLIC_URL + 'images/sort_black_24dp.svg'} alt="sort"/>
            <img className="list" src={process.env.PUBLIC_URL + 'images/view_list_black_24dp.svg'} alt="list"/>
        </div>
    );
}

export default Operations;