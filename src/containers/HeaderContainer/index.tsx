import React, {useState, useReducer} from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';
import skLogo  from '../../assets/images/sk-logo.svg';
import ListSearchGuild from '../ListSearchCriteria';
import { APP_CONSTANTS, APP_ROUTERS} from '../../constants';
import { cardHolderActions, authActions } from '../../store/actions';
import { AppState } from '../../store/states';
import LogoutButton from './Logout';
import { SearchState, initialSearch, SearchAction, Header as hd } from './constants';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

const SearchCardForm: React.FC<hd> = ({...props}) => {
    
    const [activeSearchClass, setActiveSearchClass] = useState('');

    const reducer = (state: SearchState, action: SearchAction): SearchState => {
        switch (action.type) {
            case 'RESET':
              return {searchInput: action.result };
            case 'CHANGE':
                return {searchInput: action.result };      
            default:
              throw new Error();
          }
    }

    const [{searchInput}, setSearchInput] = useReducer( reducer , {searchInput: initialSearch});

    const handleSearchInput =  (e: React.FormEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setSearchInput({type: 'CHANGE', result: { ...searchInput,[name]: value} });
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSearch(searchInput);
    };

    const handleFocusSearch = (): void  => {
        setActiveSearchClass('focus ');
    };

    const handleBlurSearch = (): void => {
        setActiveSearchClass('');
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <div className={cn("form-group form-group-sm with-button with-popover topless active", activeSearchClass)}>
                <input type="text" className="form-control" placeholder="Search for a cardholder" onFocus={handleFocusSearch} onChange={handleSearchInput} onBlur={(e) => {handleSearchInput(e); handleBlurSearch()}} value={searchInput.keySearch} name="keySearch"/>
                <button type="submit" className="btn-icon btn-icon-secondary">
                    <span className="icon-search"></span>
                </button>
                <div className="popover" x-placement="bottom-start">
                    <div className="arrow"></div>
                    <div className="popover-body">
                        <p>Search by any of the following:</p>
                        <ul className="list-grey mt-16">
                            <ListSearchGuild />
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    )
}

const mapStateToProps = (state: AppState) => ({
    loginData: state.auth
});
  
const mapDispatchToProps = {
    searchCard: cardHolderActions.searchCard,
    logout: authActions.logout,
};

type HeaderProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Header: React.FC<HeaderProps & RouteComponentProps<{}>> = ({...props}) => {

    const {name} = props.loginData;

    const handleSearch = (data: APP_CONSTANTS.SEARCH_PAYLOAD) => {
        props.searchCard(data);
        props.history.replace(APP_ROUTERS.HOME);
    }

    const handleLogout = (): void => {
        props.logout();
        //props.history.push(APP_ROUTERS.SIGN_IN);
        window.location.reload();
    }

    return (
        <header className="app-header-wrapper">
            <div className="app-header">
            <div className="app-branding-container">
                <Link to={APP_ROUTERS.HOME} className="app-branding">
                    <img src={skLogo} alt="SideKick" />
                </Link>
            </div>
            <div className="app-search-container">
                <SearchCardForm onSearch={handleSearch}/>
            </div>
            <div className="app-navigation-container">
                <nav className="app-navigation">
                    <a href="parameters.html"  className="app-navigation-item">Program Parameters</a>
                    <a href="https://www.firstdata.com/moneynetwork/locator/index.html"  className="app-navigation-item">MN Locator</a>
                </nav>
                </div>
            <div className="app-user-actions-container">
                <div className="row flex-nowrap">
                    <div className="col-auto d-flex align-items-center">
                        <div className="bubble bubble-color-5"><span>BP</span></div>
                        <span className="text-grey-d12 ml-8">{name}</span>
                    </div>
                    <div className="col-auto">
                        <LogoutButton onLogout={handleLogout}/>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
};

Header.displayName = 'Header';
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));