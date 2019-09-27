import React from 'react';
import sknNoData from '../../assets/images/sk-no-data-found.svg';
const SearchNoData: React.FC = () => {
    return (
        <React.Fragment>
            <div className="row justify-content-center mt-16">
                <div className="col-auto">
                    <img src={sknNoData} alt="No cardholders found." className="w-abs-640" />
                </div>
            </div>
            <div className="block mt-40 text-center">
                <h3>No Cardholders Found</h3>
                <p className="text-grey text-lg mt-8">Modify the search or try an alternative search criteria</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto w-max-100">
                    <div className="box-shadowed p-24 mt-24">
                        <div className="row flex-nowrap">
                            <div className="col-auto">
                                <ul className="list-grey">
                                <li>
                                    <span className="text-grey-d20 d-block">Social Security Number</span>
                                    <span className="d-block">Without hyphens or spaces</span>
                                </li>
                                <li>
                                    <span className="text-grey-d20 d-block">Mobile Phone</span>
                                    <span className="d-block">Without hyphens or spaces</span>
                                </li>
                                <li>
                                    <span className="text-grey-d20 d-block">Account Number</span>
                                    <span className="d-block">Without hyphens or spaces</span>
                                </li>
                                </ul>
                            </div>
                            <div className="col-auto">
                                <ul className="list-grey">
                                <li>
                                    <span className="text-grey-d20 d-block">Home Phone</span>
                                    <span className="d-block">Without hyphens or spaces</span>
                                </li>
                                <li>
                                    <span className="text-grey-d20 d-block">Date of Birthday</span>
                                    <span className="d-block">Format as MM/DD/YYYY</span>
                                </li>
                                <li>
                                    <span className="text-grey-d20 d-block">Card Number</span>
                                    <span className="d-block">Without hyphens or spaces</span>
                                </li>
                                </ul>
                            </div>
                            <div className="col-auto">
                                <ul className="list-grey">
                                    <li>
                                        <span className="text-grey-d20 d-block">Email Address</span>
                                        <span className="d-block">Format as email@example.com</span>
                                    </li>
                                    <li>
                                        <span className="text-grey-d20 d-block">First Name and Last Name</span>
                                        <span className="d-block">Format as "First Name: Last Name" <span className="d-inline-block">(Kim: Smith)</span></span>
                                    </li>
                                    <li>
                                        <span className="text-grey-d20 d-block">First Name, Last Name and optional Zip Code</span>
                                        <span className="d-block">Format as "First Name: Last Name Zip Code" <span className="d-inline-block">(Kim: Smith 55000)</span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

SearchNoData.displayName = 'SearchNoData';
export default SearchNoData;
