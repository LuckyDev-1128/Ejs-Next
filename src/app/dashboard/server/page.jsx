
const page = () => {
  return (
    <>
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-1 text-gray-800">Server Process List</h1>

      {/* <!-- Content Row --> */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Server Process List</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>IP</th>
                      <th>Domains</th>
                      <th>TotalStorage</th>
                      <th>UseStorage</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <% if (servers.length> 0) { %>
                      <% servers.forEach(server=> { %> */}
                        <tr>
                          <td>
                            server.id
                          </td>
                          <td>
                            server.name
                          </td>
                          <td>
                            server.ip
                          </td>
                          <td>
                            {/* <% JSON.parse(server.domains).forEach(domain=> { %> */}
                              <span className="badge bg-success text-white">
                                 domain
                              </span>
                              {/* <% }); %> */}
                          </td>
                          <td>
                            server.TotalStorage
                          </td>
                          <td>
                            server.UseStorage
                          </td>
                          <td>
                            {/* <% if (server.status===0) { %> */}
                              <a href="#" className="btn btn-danger btn-circle btn-sm">
                                <i className="fas fa-ban"></i>
                              </a>
                              {/* <% } else if (server.status===1) { %> */}
                                <a href="#" className="btn btn-success btn-circle btn-sm">
                                  <i className="fas fa-check"></i>
                                </a>
                                {/* // <% } %> */}
                          </td>
                          <td>
                            <a href="javascript:void(0);" className="btn btn-info btn-circle btn-sm data-re"
                              data-id="<%= server.id %>" data-ip="<%= server.ip %>">
                              <i className="fas fa-sync"></i>
                            </a>
                            <a href="javascript:void(0);" className="btn btn-info btn-circle btn-sm data-logs"
                              data-id="<%= server.id %>">
                              <i className="fas fa-desktop"></i>
                            </a>
                            <a href="javascript:void(0);" className="btn btn-success btn-circle btn-sm server-edit"
                              data-id="<%= server.id %>" data-name="<%= server.name %>" data-ip="<%= server.ip %>"
                              data-domains="<%= server.domains %>" data-totalstorage="<%= server.TotalStorage %>"
                              data-usestorage="<%= server.UseStorage %>" data-domainupload="<%= server.domainsup %>"
                              data-upload="<%= server.upload %>">

                              <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a href="javascript:void(0);" className="btn btn-danger btn-circle btn-sm server-delete"
                              data-id="<%= server.id %>">
                              <i className="fas fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                        {/* // <% }) %>
                        //   <% } else { %> */}
                            <tr>
                              <td colspan="9" className="text-center">ไม่มีข้อมูล</td>
                            </tr>
                            {/* // <% } %> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Modal for displaying logs --> */}
    <div className="modal fade" id="dataLogsModal" tabindex="-1" role="dialog" aria-labelledby="dataLogsModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="dataLogsModalLabel">Data Logs RealTime</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <textarea className="form-control w-100" id="logsContent"
              style={{resize:"vertical", width:"100%",height:"500px",backgroundColor:"#000000ce",color:"#fff"}}
              readonly></textarea>
            {/* <!-- Logs content will be loaded here --> */}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Modal for editing server details --> */}
    <div className="modal fade" id="editServerModal" tabindex="-1" role="dialog" aria-labelledby="editServerModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editServerModalLabel">Edit Server Process</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="editServerForm">
              <input type="hidden" id="editServerId"/>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" id="editServerName" required/>
              </div>
              <div className="form-group">
                <label>IP</label>
                <input type="text" className="form-control" id="editServerIP" required/>
              </div>
              <div className="form-group">
                <label>Domain UPLOAD:</label>
                <input type="text" className="form-control" id="editDomainupload" name="editDomainupload" required/>
              </div>
              <div className="form-group">
                <select className="form-control" id="editUpload" name="editUpload">
                  <option value="">Type</option>
                  <option value="localhost">Localhost</option>
                  <option value="gcs">GOOGLE Cloud Storage</option>
                  <option value="s3">AWS S3 Storage</option>
                  <option value="minio">MinIO Storage</option>
                  <option value="backblaze">Backblaze Storage</option>
                  <option value="wasabi">Wasab Storage</option>
                  <option value="r2">Cloudflare R2 Storage</option>
                  <option value="ftp">FTP</option>
                  <option value="sftp">SFTP</option>
                </select>
              </div>
              <div className="form-group">
                <label for="domains">Domains:</label>
                <div id="domains-container">
                  <div className="input-group mb-2">
                    <input type="text" className="form-control" name="domains[]" required/>
                    <div className="input-group-append">
                      <button className="btn btn-danger remove-domain" type="button">×</button>
                    </div>
                  </div>
                </div>
                <button type="button" id="add-domain" className="btn btn-secondary">Add Domain</button>
              </div>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page