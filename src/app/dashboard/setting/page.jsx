"use client"

const page = () => {
  return (
    <>
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <style jsx>{`
        /* CSS Styling */
        .btn-group-custom {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .btn-group-custom button {
          flex: 1;
        }

        .video-thumbnail {
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin-right: 10px;
        }

        .custom-height {
          height: 800px;
          /* Adjust height as needed */
        }

        .important-note {
          color: red;
          font-weight: bold;
        }

        .form-group {
          display: flex;
          align-items: center;
        }

        .form-group>.col-sm-5 {
          flex: 1;
          padding-right: 10px;
        }

        .form-group>.col-sm-5:last-child {
          padding-right: 0;
        }

        .form-group>.col-sm-2 {
          flex: 0 0 15%;
        }

        .table {
          margin-top: 10px;
        }

        .thead-light {
          background-color: #f8f9fa;
        }

        .btn-info {
          margin-left: 10px;
        }

        .btn-danger {
          margin-left: 10px;
        }

        .form-control {
          width: 100%;
        }

        .table td,
        .table th {
          vertical-align: middle;
        }

        .endpoint-method {
          width: 80px;
          display: inline-block;
          font-weight: bold;
          text-align: center;
          border-radius: 4px;
          padding: 5px;
        }

        .endpoint-method.get {
          background-color: #28a745;
          color: white;
        }

        .endpoint-method.post {
          background-color: #007bff;
          color: white;
        }

        .endpoint-method.put {
          background-color: #ffc107;
          color: white;
        }

        .endpoint-method.delete {
          background-color: #dc3545;
          color: white;
        }

        .endpoint {
          margin-bottom: 10px;
        }

        .api-section {
          margin-top: 40px;
        }

        #adFieldsContainer {
          max-height: auto;
          /* Adjust the height as needed */
          overflow-y: auto;
          padding: 15px;
        }

        .ad-field {
          display: flex;
          align-items: center;
          background-color: #f8f9fa;
          padding: 10px;
          border: 1px solid #dee2e6;
          margin-bottom: 10px;
        }

        .ad-field .col {
          flex: 1;
        }

        .ad-field .col-auto {
          flex: none;
        }

        .ad-field .remove-ad-field {
          margin-left: 10px;
        }

        .add_row {
          display: block;
          border: 1px dashed #0076aa;
          padding: 7px;
          background: #fdfdfd;
          border-radius: 2px;
          text-align: center;
          font-weight: 400;
          cursor: pointer;
          transition: background 0.3s;
          text-decoration: none;
        }`}
      </style>

      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="m-0 font-weight-bold text-primary">Domain List</h6>
                  <div className="form-group row ml-2 mb-0 align-items-center">
                    <button type="button" className="btn btn-success" data-bs-toggle="modal"
                      data-bs-target="#addDomainModal">ADD Domain</button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>#</th>
                        <th>Domain name</th>
                        <th>Ad Active</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <% if (domains.length> 0) { %>
                        <% domains.forEach((domain, index)=> { %> */}
                          <tr data-id="domain.id">
                            <td>
                              index + 1
                            </td>
                            <td>
                              domain.domainName
                            </td>
                            <td>
                              domain.adActive
                            </td>
                            <td>
                              <button className="btn btn-info btn-sm edit-domain" data-id="domain.id"
                                data-ad-fields='<%- JSON.stringify(domain.adFields) %>' data-bs-toggle="modal"
                                data-bs-target="#editDomainModal<%= domain.id %>">Edit</button>
                              <button className="btn btn-danger btn-sm delete-domain"
                                data-id="<%= domain.id %>">Delete</button>
                            </td>
                          </tr>

                        {/* //   <!-- Edit Domain Modal --> */}
                          <div className="modal fade" id="editDomainModal<%= domain.id %>" tabindex="-1"
                            aria-labelledby="editDomainModalLabel<%= domain.id %>" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="editDomainModalLabel<%= domain.id %>">Edit Domain
                                      domain.domainName
                                  </h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                  <form className="edit-domain-form">
                                    <h6>JWPlayer Settings</h6>
                                    <ul className="nav nav-tabs" id="editTab<%= domain.id %>" role="tablist">
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="general-settings-edit-tab<%= domain.id %>"
                                          data-bs-toggle="tab" data-bs-target="#general-settings-edit<%= domain.id %>"
                                          type="button" role="tab" aria-controls="general-settings-edit<%= domain.id %>"
                                          aria-selected="true">General Settings</button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="logo-settings-edit-tab<%= domain.id %>"
                                          data-bs-toggle="tab" data-bs-target="#logo-settings-edit<%= domain.id %>"
                                          type="button" role="tab" aria-controls="logo-settings-edit<%= domain.id %>"
                                          aria-selected="false">Logo Settings</button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="preroll-settings-edit-tab<%= domain.id %>"
                                          data-bs-toggle="tab" data-bs-target="#preroll-settings-edit<%= domain.id %>"
                                          type="button" role="tab" aria-controls="preroll-settings-edit<%= domain.id %>"
                                          aria-selected="false">Advertising</button>
                                      </li>
                                    </ul>
                                    <div className="tab-content" id="editTabContent<%= domain.id %>">
                                      <div className="tab-pane fade show active" id="general-settings-edit<%= domain.id %>"
                                        role="tabpanel" aria-labelledby="general-settings-edit-tab<%= domain.id %>">
                                        <div className="mb-3">
                                          <label for="editDomainName<%= domain.id %>" className="form-label">Domain
                                            Name</label>
                                          <input type="text" className="form-control editDomainName"
                                            id="editDomainName<%= domain.id %>" placeholder="Enter domain name"
                                            value="<%= domain.domainName %>"/>
                                        </div>
                                        <div className="mb-3">
                                          <label className="form-label">Default
                                            Background Image</label>
                                          <input type="text" className="form-control editDefaultBgImage"
                                            id="editDefaultBgImage<%= domain.id %>" placeholder="Enter image URL"
                                            value="<%= domain.defaultBgImage %>"/>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade" id="logo-settings-edit<%= domain.id %>" role="tabpanel"
                                        aria-labelledby="logo-settings-edit-tab<%= domain.id %>">
                                        <div className="form-check form-switch mt-3">
                                          <input className="form-check-input editHideLogo" type="checkbox"
                                            id="editHideLogo<%= domain.id %>"/>
                                          <label className="form-check-label" for="editHideLogo<%= domain.id %>">Hide
                                            Logo</label>
                                        </div>
                                        <div className="mb-3">
                                          <label className="form-label">Logo URL</label>
                                          <input type="text" className="form-control editLogoURL"
                                            id="editLogoURL<%= domain.id %>" placeholder="Enter logo URL"
                                            value="<%= domain.logoURL %>"/>
                                        </div>
                                        <div className="mb-3">
                                          <label className="form-label">Logo Link</label>
                                          <input type="text" className="form-control editLogoLink"
                                            id="editLogoLink<%= domain.id %>" placeholder="Enter logo link"
                                            value="<%= domain.logoLink %>"/>
                                        </div>
                                        <div className="mb-3">
                                          <label for="editLogoPosition<%= domain.id %>" className="form-label">Logo
                                            Position</label>
                                          <select className="form-select editLogoPosition"
                                            id="editLogoPosition<%= domain.id %>">
                                            <option value="top-left">Top Left</option>
                                            <option value="top-right">Top Right</option>
                                            <option value="bottom-left">Bottom Left</option>
                                            <option value="bottom-right">Bottom Right</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade" id="preroll-settings-edit<%= domain.id %>"
                                        role="tabpanel" aria-labelledby="preroll-settings-edit-tab<%= domain.id %>">
                                        <div className="form-check form-switch mt-3">
                                          <input className="form-check-input editAdActive" type="checkbox"
                                            id="editAdActive<%= domain.id %>"/>
                                          <label className="form-check-label"
                                            for="editAdActive<%= domain.id %>">Active</label>
                                        </div>
                                        <div id="editAdFieldsContainer<%= domain.id %>" className="editAdFieldsContainer">
                                          {/* <!-- Ad fields will be dynamically added here --> */}
                                        </div>
                                        <button type="button" className="btn btn-info editAddAdField"
                                          data-id="<%= domain.id %>">Add Ad Video</button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-primary saveEditDomainBtn"
                                    data-id="<%= domain.id %>">Save changes</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <% }) %>
                            <% } else { %> */}
                              <tr>
                                <td colspan="8" className="text-center">No site to list was found.</td>
                              </tr>
                              {/* <% } %> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
    
    {/* // <!-- Add Domain Modal --> */}
    <div className="modal fade" id="addDomainModal" tabindex="-1" aria-labelledby="addDomainModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addDomainModalLabel">Add Domain</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="domainForm">
              <h6>JWPlayer Settings</h6>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="general-settings-tab" data-bs-toggle="tab"
                    data-bs-target="#general-settings" type="button" role="tab" aria-controls="general-settings"
                    aria-selected="true">General Settings</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="logo-settings-tab" data-bs-toggle="tab" data-bs-target="#logo-settings"
                    type="button" role="tab" aria-controls="logo-settings" aria-selected="false">Logo Settings</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="preroll-settings-tab" data-bs-toggle="tab"
                    data-bs-target="#preroll-settings" type="button" role="tab" aria-controls="preroll-settings"
                    aria-selected="false">Advertising</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="general-settings" role="tabpanel"
                  aria-labelledby="general-settings-tab">
                  <div className="mb-3">
                    <label className="form-label">Domain Name</label>
                    <input type="text" className="form-control" id="domainName" placeholder="Enter domain name"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Default Background Image</label>
                    <input type="text" className="form-control" id="defaultBgImage" placeholder="Enter image URL"/>
                  </div>
                </div>
                <div className="tab-pane fade" id="logo-settings" role="tabpanel" aria-labelledby="logo-settings-tab">
                  <div className="form-check form-switch mt-3">
                    <input className="form-check-input" type="checkbox" id="hideLogo"/>
                    <label className="form-check-label">Hide Logo</label>
                  </div>
                  <div className="mb-3">
                    <label for="logoURL" className="form-label">Logo URL</label>
                    <input type="text" className="form-control" id="logoURL" placeholder="Enter logo URL"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Logo Link</label>
                    <input type="text" className="form-control" id="logoLink" placeholder="Enter logo link"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Logo Position</label>
                    <select className="form-select" id="logoPosition">
                      <option selected>Choose...</option>
                      <option value="top-left">Top Left</option>
                      <option value="top-right">Top Right</option>
                      <option value="bottom-left">Bottom Left</option>
                      <option value="bottom-right">Bottom Right</option>
                    </select>
                  </div>
                </div>
                <div className="tab-pane fade" id="preroll-settings" role="tabpanel" aria-labelledby="preroll-settings-tab">
                  <div className="form-check form-switch mt-3">
                    <input className="form-check-input" type="checkbox" id="adActive"/>
                    <label className="form-check-label" for="adActive">Active</label>
                  </div>
                  <div id="adFieldsContainer"></div>
                  <button type="button" className="btn btn-info" id="addAdField">Add Ad Field</button>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" id="saveDomainBtn">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page