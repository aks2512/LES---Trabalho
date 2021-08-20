import searchIcon from '../assets/images/search-icon.png';

import '../styles/searchBar.scss';

export function SearhBar() {
    return(
        <div className="searchBar">
            <div className="container">
                <div className="searchBar__search col-md-8">
                    <input type="text" className="searchBar__search__input" />
                    <button className="searchBar__search__button"><img src={searchIcon} alt="" /></button>
                </div>
            </div>
        </div>
    );
}