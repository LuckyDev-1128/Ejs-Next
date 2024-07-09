"use client"

const page = () => {
    return (
      <>
      <div className="container-fluid">
    {/* <!-- Page Heading --> */}
    <h1 className="h3 mb-1 text-gray-800">Profile</h1>
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
          height: 800px; /* ปรับตามความสูงที่ต้องการ */
        }    
      `}</style>
    <div className="row">
      <div className="col-lg-6">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Upload Files</h6>
          </div>
          <div className="card-body">
            <div className="upload-container">
              <h5 className="text-center">Upload files you want to share with Videos MP4, MKV, TS are allowed.</h5>
              <div className="upload-area" id="uploadArea">
                <select className="form-control form-control-sm" id="serverSelect">
                  <option value="">Select Server</option>
                  {/* <% servers.forEach(server => { 
                      const domains = JSON.parse(server.domains);
                  %> */}
                  <option value="<%= server.domainsup %>" data-server-id="<%= server.id %>"> server.name </option>
                  
                </select>
                <br/>
                <div className="btn-group-custom">
                  <button className="btn btn-primary" id="browseFilesButton">Browse Files</button>
                  <button className="btn btn-primary" id="uploadFilesButton">Upload</button>
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
            <h6 className="m-0 font-weight-bold text-primary">List File Upload</h6>
          </div>
          <div className="card-body">
            <ul className="list-group mt-3" id="fileList"></ul>
          </div>
        </div>
      </div>
    </div>
  
  <div className="row">
  <div className="col-lg-6">
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">ตรวจสอบข้อมูลวีดีโอ ก่อนที่จะอัพ</h6>
      </div>
      <div className="card-body">
        <center>
        <div id="loading" style={{display: "none"}}>
          <img src="/img/loadingx2.svg" alt="Loading..."/>
        </div>
      </center>
        <ul className="list-group mt-3" id="fileData"></ul>
      </div>
    </div>
  </div>
  </div>
  
  {/* <!-- /.container-fluid --> */}
  </div>
      </>
    )
  }
  
  export default page;