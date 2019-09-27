import React from 'react';
import {connect} from 'react-redux';
import {SearchNoData, CardList, Welcome} from '../../containers'
import { AppState } from '../../store/states';

const mapStateToProps = (state: AppState) => ({
    seachData: state.cardholder.searchCardReducer.Data,
    isSearchCard: state.cardholder.searchCardReducer.isSearchCard,
    authData: state.auth,
});
  
const mapDispatchToProps = {

};

type HomePageProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const HomePage: React.FC<HomePageProps> = ({...props}) => {

    const SearchWrapper = () => {
        if(props.isSearchCard){
            if(props.seachData.length){
                return <CardList />
            }else {
                return <SearchNoData />
            }
        }else{
            return <Welcome />;
        }
    }

    return (
        <div className="main-content-wrapper">
            <SearchWrapper />
        </div>
    );
};

HomePage.displayName = 'HomePage';

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
