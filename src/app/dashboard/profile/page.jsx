const page = () => {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-1 text-gray-800">Profile</h1>

      {/* <!-- Content Row --> */}
      <div className="row">
        <div className="col-lg-6">
          {/* <!-- Overflow Hidden --> */}
          <div className="card mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                ข้อมูลผู้ใช้
              </h6>
            </div>
            <div className="card-body">
              <div>
                <labe>Username:</labe>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value="<%= username %>"
                  required
                />

                <div>
                  <label>API KEY:</label>
                  <input
                    type="apikey"
                    className="form-control"
                    id="apikey"
                    name="apikey"
                    value="<%= apiKey %>"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
