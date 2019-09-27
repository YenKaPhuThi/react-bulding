import React from 'react';

interface CommentProps {
    data?: Array<any>,
}

const Comments: React.FC<CommentProps> = () => {
    return (
        <div className="comments-wrapper">
            <div id="commentsContainer" className="comments-container">
                <div className="comment-form" id="commentForm">
                    <div className="comment-form--guide" id="commentFormGuide">
                    <div className="bubble bubble-color-5"><span>PP</span></div>
                    <span className="guide-text">Enter your comment here</span>
                </div>
                    <div className="comment-form--body">
                        <div className="form-group topless">
                            <span className="form-control-label">Comment Type</span>
                            <input type="text" id="commentDropdown" data-role="dropdownlist" />
                        </div>
                        <div className="position-relative">
                            <div className="bubble bubble-color-5">
                                <span>PP</span>
                            </div>
                            <div className="form-group">
                                <textarea rows={3} className="form-control" placeholder="Enter your comment here"></textarea>
                            </div>
                            <p className="form-help-text">Maximum 500 characters</p>
                        </div>
                        <div className="row">
                        <div className="col"></div>
                            <div className="col-auto">
                                <div className="form-actions form-actions-sm">
                                    <button className="btn btn-secondary btn-sm" id="commentFormCancel">Cancel</button>
                                    <button className="btn btn-primary btn-sm" id="commentFormSubmit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-header">
                    <h4 className="section-title">Comments</h4>
                    <div className="form-actions topless">
                        <button id="btnRefreshComment" className="btn-icon btn-icon-secondary">
                            <span className="icon-refresh"></span></button>
                        <button id="btnSearchComment" className="btn-icon btn-icon-secondary">
                            <span className="icon-search"></span></button>
                        <button id="btnFilterComment" className="btn-icon btn-icon-secondary with-dot">
                            <span className="icon-filter"></span></button>
                        <button className="btn-icon btn-icon-secondary" id="btnExpandAllComments" data-role="btn-toggle-expand-collapse" aria-expanded="false">
                            <span className="icon-expand-all" data-role="icon-expand"></span>
                            <span className="icon-collapse-all" data-role="icon-collapse"></span>
                        </button>
                    </div>
                </div>
                <div className="row align-items-center mt-16">
                    <div className="col">
                        <p>Found 5 results</p>
                    </div>
                    <div className="col-auto">
                        <button className="btn-link btn-link-primary mri-8">Clear</button>
                    </div>
                </div>
                <div className="comment-group">
                    <h5>May 18, 2018</h5>
                    <div className="comment-list">
                    <div className="comment-item">
                        <div className="bubble bubble-color-5">
                        <span>PP</span>
                        </div>
                        <div className="comment-item--body" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="05/17/2018 02:35:20PM">
                        <div className="d-flex">
                            <span className="comment-item--author">Peter Parker</span>
                        </div>
                        <div className="comment-item--content" data-role="comment-content">
                            Auto Memo :- Account Maintenance
                        </div>
                        </div>
                    </div>
                    <div className="comment-item">
                        <div className="bubble bubble-color-5">
                        <span>PP</span>
                        </div>
                        <div className="comment-item--body" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="05/17/2018 02:35:20PM">
                        <div className="d-flex">
                            <span className="comment-item--author">Peter Parker</span>
                        </div>
                        <div className="comment-item--content" data-role="comment-content">
                            Auto Memo :- Activate Card
                        </div>
                        </div>
                    </div>
                    <div className="comment-item">
                        <div className="bubble bubble-color-5">
                        <span>PP</span>
                        </div>
                        <div className="comment-item--body" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="05/17/2018 02:35:20PM">
                        <div className="d-flex">
                            <span className="comment-item--author">Peter Parker</span>
                        </div>
                        <div className="comment-item--content" data-role="comment-content">
                            Auto Memo :- Force PIN Update
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="comment-group">
                    <h5>May 18, 2018</h5>
                    <div className="comment-list">
                        <div className="comment-item">
                            <div className="bubble bubble-color-5">
                            <span>PP</span>
                            </div>
                            <div className="comment-item--body" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="05/17/2018 02:35:20PM">
                            <div className="d-flex">
                                <span className="comment-item--author">Peter Parker</span>
                            </div>
                            <div className="comment-item--content" data-role="comment-content">
                                Auto Memo :- Put Account on Hold
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-group">
                    <h5>May 18, 2018</h5>
                    <div className="comment-list">
                        <div className="comment-item">
                        <div className="bubble bubble-color-5">
                        <span>PP</span>
                        </div>
                        <div className="comment-item--body" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="05/17/2018 02:35:20PM">
                        <div className="d-flex">
                            <span className="comment-item--author">Peter Parker</span>
                        </div>
                        <div className="comment-item--content" data-role="comment-content">
                            Auto Memo :- Caller from (469) 321-9951 authenticated in IVR
                        </div>
                        </div>
                    </div>
                        <div className="comment-item">
                        <div className="bubble bubble-color-5">
                        <span>PP</span>
                        </div>
                        <div className="comment-item--body" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="05/17/2018 02:35:20PM">
                        <div className="d-flex">
                            <span className="comment-item--author">Peter Parker</span>
                        </div>
                        <div className="comment-item--content" data-role="comment-content">
                            New account enrollment IVR authenticated cardholder from (469) 312-9951 with CC# and PIN
                        </div>
                        </div>
                    </div>
                        <div className="comment-item">
                        <div className="bubble bubble-color-7">
                        <span>PP</span>
                        </div>
                        <div className="comment-item--body" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="05/17/2018 02:35:20PM">
                        <div className="d-flex">
                            <span className="comment-item--author">Nate Nash</span>
                            <span className="comment-item--type">Authentication</span>
                        </div>
                        <div className="comment-item--content" data-role="comment-content">
                            IVR authenticated cardholder from (469) 312-9951 with CC# and Fullname...
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

Comments.displayName = 'Comments';
export default Comments;