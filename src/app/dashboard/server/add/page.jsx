
const page = () => {
  return (
    <div className="container-fluid">

    {/* <!-- Content Row --> */}
    <div className="row">

        <div className="col-lg-6">

            {/* <!-- Overflow Hidden --> */}
            <div className="card mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ADD Server</h6>
                </div>
                <div className="card-body">
                    <form id="add-server-form">
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="text" className="form-control" id="name" name="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="ip">IP:</label>
                            <input type="text" className="form-control" id="ip" name="ip" required/>
                        </div>
                        <div className="form-group">
                            <label for="domainupload">Domain UPLOAD:</label>
                            <input type="text" className="form-control" id="domainupload" name="domainupload" required/>
                        </div>
                        <div className="form-group">
                        <select className="form-control" id="upload" name="upload">
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
                                        <button className="btn btn-danger remove-domain" type="button">&times;</button>
                                    </div>
                                </div>
                            </div>
                            <button type="button" id="add-domain" className="btn btn-secondary">Add Domain</button>
                        </div>
                        <button type="submit" className="btn btn-primary">ADD</button>
                    </form>
                </div>
            </div>

        </div>
    </div>

</div>
  )
}

export default page