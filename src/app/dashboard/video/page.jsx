import React from "react";

const page = () => {
  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Search Video</h6>
              </div>
              <div className="card-body">
                <div className="panel-body">
                  <form
                    className="form-horizontal tasi-form"
                    method="post"
                    id="searchForm"
                  >
                    <div className="form-group row">
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          name="s_hash"
                          placeholder="Hash"
                          value=""
                        />
                      </div>
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          name="s_strTitle"
                          placeholder="Title"
                          value=""
                        />
                      </div>
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          name="s_strUrl"
                          placeholder="URL"
                          value=""
                        />
                      </div>
                      <div className="col-sm-2">
                        <select className="form-control" name="s_iType">
                          <option value="">Type</option>
                          <option value="upload">UPLOAD</option>
                          <option value="google-drive">GOOGLE DRIVE</option>
                          <option value="remote-mp4">Remote MP4</option>
                          <option value="remote-m3u8">Remote M3U8</option>
                        </select>
                      </div>

                      <div className="col-sm-2">
                        <select className="form-control" name="s_iStatus">
                          <option value="">Status</option>
                          <option value="0">Waiting</option>
                          <option value="1">Completed</option>
                          <option value="2">Failed</option>
                          <option value="3">Working</option>
                          <option value="4">Encoding</option>
                        </select>
                      </div>
                      <div className="col-sm-2">
                        <select
                          className="form-control"
                          id="strServer"
                          name="s_strServer"
                        >
                          <option value="">Server List</option>
                        </select>
                      </div>
                      <div className="col-sm-2 mt-2">
                        <button type="submit" className="btn btn-success">
                          Search
                        </button>
                        <button id="clearButton" className="btn btn-secondary">
                          Clear
                        </button>
                      </div>
                    </div>
                    <input type="hidden" name="quickload" value="1" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Content Row --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Video Data</h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="videoTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Storage</th>
                        <th>Server</th>
                        <th>Size</th>
                        <th>Qualities</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody id="videoTableBody">
                      {/* <!-- Video rows will be appended here --> */}
                    </tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center" id="pagination">
                    {/* <!-- Pagination items will be appended here --> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal HTML --> */}
      <div
        className="modal fade"
        id="playerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Player</h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <iframe
                    src=""
                    width="100%"
                    height="420"
                    frameBorder="0"
                    scrolling="no"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen="true"
                  ></iframe>
                </div>
              </div>
              <div className="row" style={{paddingTop:"15px"}}>
                <div className="col-lg-12 form-horizontal tasi-form">
                  <div className="form-group">
                    <label className="col-sm-2 control-label">URL</label>
                    <input
                      type="text"
                      id="url-modal"
                      className="form-control"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Iframe</label>
                    <textarea
                      className="form-control w-100"
                      id="iframe-modal"
                      style={{resize:"vertical", width:"100%",height:"140px"}}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Edit Video Modal --> */}
      <div
        className="modal fade"
        id="editVideoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editVideoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="editVideoLabel">
                Edit Video
              </h6>
              <buttonindex
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </buttonindex>
            </div>
            <div className="modal-body">
              <form id="editVideoForm">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editVideoTitle"
                    name="title"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editVideoUrl"
                    name="url"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    className="form-control"
                    id="editVideoStatus"
                    name="iStatus"
                    required
                  >
                    <option value="">Status</option>
                    <option value="0">Waiting</option>
                    <option value="1">Complete</option>
                    <option value="2">Error</option>
                    <option value="3">Processing</option>
                    <option value="4">Downloading</option>
                  </select>
                </div>
                <input type="hidden" id="editVideoId" name="id" />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" id="saveEditVideo">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
