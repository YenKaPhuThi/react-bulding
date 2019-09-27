import React, { useState } from 'react';
import { TabStripTab, TabStrip } from '@progress/kendo-react-layout';

const AuthDialog: React.FC = ({...props}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
    <div id="authenticationTLAWindow">
        <div className="window-content-body">
            <div className="section section-bg-light on-top">
                <p>Caller authenticated at Basic Level.</p>
                <div className="row">
                    <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">CALLING FROM</span>
                        <span className="form-control-text">(469) 312-9951</span>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Calling In To</span>
                        <span className="form-control-text">Payroll Main (NPC International Inc)</span>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="form-group-static">
                        <span className="form-control-label">Full name</span>
                        <span className="form-control-text">Charles Xavier</span>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="form-group-static with-sensitive-data">
                        <input type="checkbox" />
                        <span className="form-control-label">Card Number</span>
                        <span className="form-control-text sd-masked">424020 • • • • • • 1920</span>
                        <span className="form-control-text sd-value">4240200000001920</span>
                    </div>
                    </div>
                </div>
                </div>
            <div id="tabStrip" className="tab-secondary mt-24">
                <TabStrip selected={selectedTab} onSelect={(e)=> { setSelectedTab(e.selected)}}>
                    <TabStripTab title="One Time Passcode (OTP)">
                        <div className="w-abs-max-880 mx-auto">
                            <div className="box p-24 mt-24">
                                <h4>One Time Passcode</h4>
                                <p className="text-grey mt-4">Please choose the method and click Generate Code and Send.</p>
                                <div className="row mt-24">
                                    <div className="col-6">
                                        <div className="form-group topless">
                                            <div className="form-control-label">Method</div>
                                            <input type="text" id="authMethodDropdown" data-role="dropdownlist" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group topless active">
                                            <div className="form-control-label">Email</div>
                                            <input type="text" className="form-control" value="black.panther@wakanda.org" onChange={()=>{}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-otp" id="blockOTP">
                                    <input type="text" id="otp" />
                                    <p id="otpMsg" className="text-grey mt-24 text-center invisible">A one time passcode has been sent to the cardholder's email.<br/>Please enter the passcode and verify.</p>
                                </div>
                                <div id="blockSuccessMsg" className="mt-60 text-center hide">
                                    <span className="img-check-ticked"></span>
                                    <p className="text-grey mt-24">The verification has been succeed.</p>
                                </div>
                                <div className="form-actions">
                                    <button className="btn btn-secondary btn-sm" id="btnGenerate">Generate Code and Send</button>
                                    <button className="btn btn-primary disabled btn-sm" id="btnVerify">Verify</button>
                                </div>
                            </div>
                        </div>
                    </TabStripTab>
                    <TabStripTab title="Dynamic Questions">
                        <div className="w-abs-max-880 mx-auto">
                            <div className="mt-24">
                                <h4>Questions</h4>
                                <p className="text-grey mt-4">Verify two of the following Dynamic Question categories.</p>
                                <div className="checkbox-list mt-16">
                                    <div className="checkbox-list--item disabled">
                                        <input type="checkbox" />
                                        <div className="item-content">
                                        <div className="d-flex"> 
                                            <p className="mr-8">1</p>
                                            <p><strong>ATM:</strong> What was the amount of your last ATM withdrawal, and where was that ATM located?</p>
                                        </div>
                                        </div>
                                        <div className="item-status"></div>
                                    </div>
                                    <div className="checkbox-list--item disabled">
                                        <input type="checkbox" />
                                        <div className="item-content">
                                        <div className="d-flex"> 
                                            <p className="mr-8">2</p>
                                            <p><strong>Transaction:</strong> When was your last bank transaction, and what was the amount of the transaction?</p>
                                        </div>
                                        </div>
                                        <div className="item-status"></div>
                                    </div>
                                    <div className="checkbox-list--item">
                                        <input type="checkbox" />
                                        <div className="item-content">
                                        <div className="d-flex">
                                            <p className="mr-8">3</p>
                                            <p><strong>Transaction:</strong> Recent large transactions</p>
                                        </div>
                                        <ul className="text-grey">
                                            <li>Who this transaction was with?</li>
                                            <li>How much the transaction was?</li>
                                            <li>What the date of the transaction was?</li>
                                        </ul>
                                        </div>
                                        <div className="item-status"></div>
                                    </div>
                                    <div className="checkbox-list--item disabled">
                                        <input type="checkbox" />
                                        <div className="item-content">
                                        <div className="d-flex">
                                            <p className="mr-8">4</p>
                                            <p><strong>Payment to a Selected Retailer:</strong> What is the amount and date of that transaction of a selected retailer?</p>
                                        </div>
                                        </div>
                                        <div className="item-status"></div>
                                    </div>
                                    <div className="checkbox-list--item disabled">
                                        <input type="checkbox" />
                                        <div className="item-content">
                                        <div className="d-flex">
                                            <p className="mr-8">5</p>
                                            <p><strong>Additional Dynamic Question Used:</strong> This option should be selected when there are only ATM, ACH, and/or Money Network check transactions on the account and you need a second option to complete authentication in Sidekick.</p>
                                        </div>
                                        </div>
                                        <div className="item-status"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-24">
                                <h4>Transactions</h4>
                                <p className="text-grey mt-4">Transactions for the past 30 days. Two transactions must be selected.</p>
                                <div className="grid-container mt-16">
                                <div id="last30TransactionsGrid"></div>
                                </div>
                            </div>
                        </div>
                    </TabStripTab>
                    <TabStripTab title="Deposit/Employee ID">
                    <div className="w-abs-max-880 mx-auto">
                        <div className="mt-24">
                            <h4>Questions</h4>
                            <p className="text-grey mt-4">Verify one of the following categories.</p>
                            <div className="checkbox-list mt-16">
                                <div className="checkbox-list--item">
                                <input type="checkbox" />
                                <div className="item-content">
                                <div className="d-flex">
                                    <p className="mr-8">1</p>
                                    <p>Exact last deposit amount, and who was the last deposit from?</p>
                                </div>
                                </div>
                                <div className="item-status"></div>
                            </div>
                                <div className="checkbox-list--item">
                                <input type="checkbox" />
                                <div className="item-content">
                                <div className="d-flex">
                                    <p className="mr-8">2</p>
                                    <p>Client-specific item</p>
                                </div>
                                <ul className="text-grey">
                                    <li>WalMart WIN: 7971776</li>
                                </ul>
                                </div>
                                <div className="item-status"></div>
                            </div>
                            </div>
                        </div>
                        <div className="mt-24">
                            <h4>Deposits</h4>
                            <p className="text-grey mt-4">Last five deposits. One deposit transaction must be selected when using question 1.</p>
                            <div className="grid-container mt-16">
                            <div id="last5DepositsGrid"></div>
                            </div>
                        </div>
                    </div>
                    </TabStripTab>
                    <TabStripTab title="Exception">
                    <div className="w-abs-max-880 mx-auto">
                        <div className="mt-24">
                            <h4>Exception</h4>
                            <p className="text-grey mt-4">Please acknowledge and document the approved exception used to authenticate cardholder.</p>
                            <div className="checkbox-list mt-16">
                            <div className="checkbox-list--item">
                                <input type="checkbox" />
                                <div className="item-content">
                                <div className="d-flex">
                                    <p>Cardholder verified via exception authorization method.</p>
                                </div>
                                </div>
                                <div className="item-status"></div>
                            </div>
                            </div>
                        </div>
                        <div className="mt-24">
                            <h5>Description<span className="required"></span></h5>
                            <p className="text-grey mt-4">Provide description for Exception.</p>
                            <div className="form-group">
                            <textarea className="form-control resize mb-0" placeholder="Enter description here..."></textarea>
                            </div>
                        </div>
                    </div>
                    </TabStripTab>
                </TabStrip>
            </div>
        </div>
        <div className="window-content-actions">
            <button className="btn btn-secondary" onClick={()=>{}}>Cancel</button>
            <button className="btn btn-secondary" onClick={()=>{}}>Cannot Authenticate</button>
            <button className="btn btn-primary disabled" id="btnViewAccount2">View Account</button>
        </div>
    </div>
    )
}

export default AuthDialog;