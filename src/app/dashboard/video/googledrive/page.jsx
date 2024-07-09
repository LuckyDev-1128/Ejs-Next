"use client"

const page = () => {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-1 text-gray-800">Google Drive</h1>
      <style jsx>{`
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
          /* ปรับตามความสูงที่ต้องการ */
        }`}
      </style>
      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Single file Add</h6>
            </div>
            <div className="card-body">
              <div className="upload-container">
                <h5 className="text-center">Upload files you want to share with Videos MP4, MKV, TS are allowed.</h5>
                <div className="upload-area" id="uploadArea">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-user" id="single-drive"
                      aria-describedby="single-drive" placeholder="https://drive.google.com/file/d/xxxxx/view"/>
                  </div>
                  <select className="form-control form-control-sm" id="singleServerSelect">
                    <option value="">Select Server</option>
                    {/* <% servers.forEach(server=> {
                      const domains = JSON.parse(server.domains);
                      %> */}
                      <option value="<%= domains[0] %>" data-server-id="<%= server.id %>">
                        server.name
                      </option>
                    {/* //   <% }) %> */}
                  </select>
                  <br/>
                  <div className="btn-group-custom">
                    <button className="btn btn-primary" id="add-single-drive">ADD</button>
                  </div>
                  <input type="file" id="fileInput" multiple style={{display: "none"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow mb-4 custom-card-height">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">List File ADD</h6>
            </div>
            <div className="card-body">
              <div className="form-group">
                <textarea className="form-control form-control-user" id="multiple-drives" rows="10"
                  placeholder="https://drive.google.com/file/d/xxxxx/view&#10;https://drive.google.com/file/d/yyyy/view"></textarea>
              </div>
              <select className="form-control form-control-sm" id="multipleServerSelect">
                <option value="">Select Server</option>
                {/* <% servers.forEach(server=> {
                  const domains = JSON.parse(server.domains);
                  %> */}
                  <option value="<%= domains[0] %>" data-server-id="<%= server.id %>">
                    server.name
                  </option>
                {/* //   <% }) %> */}
              </select>
              <br/>
              <div className="btn-group-custom">
                <button className="btn btn-primary" id="add-multiple-drives">ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Google Drive API ADD</h6>
            </div>
            <div className="card-body">
              {/* <p>GET : {base_url}/api/add-drive?url={url-drive}&key={key}&server={id}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page