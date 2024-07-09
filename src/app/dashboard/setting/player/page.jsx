"use client"

const page = () => {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <style jsx>
        {`
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
            height: 800px; /* Adjust height as needed */
          }
          .important-note {
            color: red;
            font-weight: bold;
          }

          .form-group {
            display: flex;
            align-items: center;
          }

          .form-group > .col-sm-5 {
            flex: 1;
            padding-right: 10px;
          }

          .form-group > .col-sm-5:last-child {
            padding-right: 0;
          }

          .form-group > .col-sm-2 {
            flex: 0 0 15%;
          }
          </style > <style > .table {
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
        `}
      </style>
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                JWPlayer Settings
              </h6>
            </div>
            <div className="card-body">
              <div className="upload-container">
                <div className="upload-area" id="uploadArea">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#general-settings"
                        type="button"
                        role="tab"
                        aria-controls="general-settings"
                        aria-selected="true"
                      >
                        General Settings
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#jwplayer-settings"
                        type="button"
                        role="tab"
                        aria-controls="jwplayer-settings"
                        aria-selected="false"
                      >
                        JWPlayer Settings
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="allowed-sites-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#allowed-sites"
                        type="button"
                        role="tab"
                        aria-controls="allowed-sites"
                        aria-selected="false"
                      >
                        Allowed Sites
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="stream-link-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#stream-link"
                        type="button"
                        role="tab"
                        aria-controls="stream-link"
                        aria-selected="false"
                      >
                        Stream Link
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="p2p-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#p2p"
                        type="button"
                        role="tab"
                        aria-controls="p2p"
                        aria-selected="false"
                      >
                        P2P
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="stream-api-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#stream-api"
                        type="button"
                        role="tab"
                        aria-controls="stream-api"
                        aria-selected="false"
                      >
                        Stream API By Nuxt
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="general-settings"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <br />
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Player URL</label>
                        <input
                          type="text"
                          className="form-control"
                          id="player-url"
                          placeholder="Player URL"
                          value="<%= settings.playerUrl || '' %>"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          Iframe Size
                        </label>
                        <div className="col-sm-5">
                          <label>Height</label>
                          <input
                            type="text"
                            className="form-control"
                            name="settings-iframe_height-"
                            placeholder="Example: 360"
                            value="<%= settings.iframeHeight || '360' %>"
                          />
                        </div>
                        <div className="col-sm-5">
                          <label>Width</label>
                          <input
                            type="text"
                            className="form-control"
                            name="settings-iframe_width"
                            placeholder="Example: 100%"
                            value="<%= settings.iframeWidth || '100%' %>"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="jwplayer-settings"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <br />
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          JW Player Key
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="jwplayer-key"
                          placeholder="JW Player Key"
                          value="<%= settings.jwplayerKey || '' %>"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          JW Player Url
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="jwplayer-url"
                          placeholder="JW Player Url"
                          value="<%= settings.jwplayerUrl || '' %>"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          Default Background Image
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="player-defaultimage"
                          placeholder="Default Background Image"
                          value="<%= settings.defaultImage || '' %>"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          Remember Position (Resume on Restart)
                        </label>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="player-rememberposition"
                          />
                          <label className="form-check-label">
                            Press to Activate
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Logo</label>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="logo-switch-chack"
                          />
                          <label className="form-check-label">
                            Press to Activate
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Logo Hide</label>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="logo-switch-hide"
                          />
                          <label className="form-check-label">
                            Press to Activate
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">Logo URL</label>
                        <input
                          type="text"
                          className="form-control"
                          id="logo-url"
                          placeholder="Logo URL"
                          value="<%= settings.logoUrl || '' %>"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          Logo Target
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="logo-target"
                          placeholder="Logo Target"
                          value="<%= settings.logoTarget || '' %>"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          Logo Position
                        </label>
                        <select
                          className="form-control"
                          id="logo-position"
                          name="logo-position"
                          aria-label="Default select example"
                        >
                          <option value="">Unselected</option>
                          <option value="1">TOP-LEFT</option>
                          <option value="2">TOP-RIGHT</option>
                          <option value="3">LEFT-BOTTOM</option>
                          <option value="4">RIGHT-BOTTOM</option>
                        </select>
                      </div>
                      <hr />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="allowed-sites"
                      role="tabpanel"
                      aria-labelledby="allowed-sites-tab"
                    >
                      <br />
                      <div className="form-group">
                        <label
                          for="allowed-sites"
                          className="col-sm-2 control-label"
                        >
                          Allowed Sites
                        </label>
                        <div className="col-sm-10">
                          <textarea
                            className="form-control"
                            style={{resize: "vertical", width: "100%", height: "80px"}}
                            id="allowed-sites-txt"
                            name="allowed-sites-txt"
                            placeholder="Example: google.com, sv1.google.com"
                          >
                            settings.allowedSites
                          </textarea>
                          <span className="help-block">
                            You can prevent giving iframes to your player from
                            other sites. Use <code>,</code> to separate the
                            sites without entering the protocol. When a site
                            that is not in this list places your password, it is
                            automatically directed to the main page of your
                            site.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="stream-link"
                      role="tabpanel"
                      aria-labelledby="stream-link-tab"
                    >
                      <br />
                      <div className="form-group">
                        <label
                          for="allowed-playlist"
                          className="col-sm-2 control-label"
                        >
                          Allowed Playlist
                        </label>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="allowed-playlist"
                          />
                          <label className="form-check-label">
                            Press to Activate
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          for="allowed-playlist-index"
                          className="col-sm-2 control-label"
                        >
                          Allowed Playlist Index
                        </label>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="allowed-playlist-index"
                          />
                          <label className="form-check-label">
                            Press to Activate
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div className="form-group">
                        <div className="col-sm-10">
                          <div className="form-group">
                            <table
                              id="repeatable-fieldset-one1"
                              width="100%"
                              className="dt_table_admin1 ui-sortable table table-striped table-bordered"
                            >
                              <thead className="thead-light">
                                <tr>
                                  <th width="60%">Domains</th>
                                  <th width="40%">
                                    <a
                                      id="add-row1"
                                      className="btn btn-info add_row"
                                      href="javascript:void(0);"
                                    >
                                      Add Domain <i className="icon-plus"></i>
                                    </a>
                                  </th>
                                </tr>
                              </thead>
                              <tbody id="domain-list">
                                {/* <% if (settings.streamLinkDomains) { %>
                                <% settings.streamLinkDomains.split(',').forEach(domain => { %> */}
                                <tr>
                                  <td className="text_player">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="stream-link-domains"
                                      value="<%= domain %>"
                                    />
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger remove-row"
                                    >
                                      Remove
                                    </button>
                                  </td>
                                </tr>
                                {/* <% }) %>
                              <% } %> */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="p2p"
                      role="tabpanel"
                      aria-labelledby="p2p-tab"
                    >
                      <br />
                      <div className="form-group">
                        <label className="col-sm-2 control-label">P2P Plugin</label>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="allowed-p2p"
                          />
                          <label className="form-check-label">
                            To prevent bandwidth and hitch problems, this
                            feature will be activated for users who watch via
                            PC.
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div className="form-group">
                        <div className="col-sm-10">
                          <div className="form-group">
                            <table
                              id="repeatable-fieldset-one2"
                              width="100%"
                              className="dt_table_admin1 ui-sortable table table-striped table-bordered"
                            >
                              <thead className="thead-light">
                                <tr>
                                  <th width="60%">Server</th>
                                  <th width="40%">Operation</th>
                                </tr>
                              </thead>
                              <tbody id="domain-list-p2p">
                                {/* <% if (settings.p2pLink) { %>
                                <% settings.p2pLink.split(',').forEach(link => { %> */}
                                <tr>
                                  <td className="text_player">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="p2p-link"
                                      value="<%= link %>"
                                    />
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger remove-row-p2p"
                                    >
                                      Remove
                                    </button>
                                  </td>
                                </tr>
                                {/* <% }) %>
                              <% } %> */}
                              </tbody>
                            </table>
                            <button
                              id="p2p-add-row1"
                              className="btn btn-info add_row mt-2"
                              type="button"
                            >
                              New Server
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="stream-api"
                      role="tabpanel"
                      aria-labelledby="stream-api-tab"
                    >
                      <br />
                      <div className="form-group">
                        <label
                          for="allowed-api-nuxt"
                          className="col-sm-2 control-label"
                        >
                          Stream API By Nuxt
                        </label>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="allowed-api-nuxt"
                          />
                          <label className="form-check-label">
                            Use a pair of Nuxt scripts using Nuxt as the Embed
                            Player.
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          for="api-nuxt-key"
                          className="col-sm-2 control-label"
                        >
                          API Key
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="api-nuxt-key"
                          placeholder="API Key"
                          value="<%= settings.streamApiKey || '' %>"
                        />
                      </div>
                      <hr />
                      <div className="container">
                        <div className="api-section">
                          <h2>Authentication</h2>
                          <p>
                            ทุก endpoint ต้องการการยืนยันตัวตนด้วย API Key
                            คุณสามารถรับ API Key
                            ของคุณได้จากพอร์ทัลสำหรับนักพัฒนา
                          </p>
                          <pre>
                            <code>
                              Authorization: Bearer &lt;your_api_key&gt;
                            </code>
                          </pre>
                        </div>
                        <div className="api-section">
                          <h2>Endpoints Member</h2>
                          <div className="endpoint">
                            <span className="endpoint-method get">GET</span>{" "}
                            <code>/api/streams</code> ดึงข้อมูลสตรีมทั้งหมด
                          </div>
                          <div className="endpoint">
                            <span className="endpoint-method get">GET</span>{" "}
                            <code>/api/streams/</code>{" "}
                            ดึงรายละเอียดของสตรีมเฉพาะจาก ID
                          </div>
                          <div className="endpoint">
                            <span className="endpoint-method post">POST</span>{" "}
                            <code>/api/streams</code> ดึงข้อมูลสตรีมทั้งหมด
                          </div>
                        </div>
                        <div className="api-section">
                          <h2>Usage Example</h2>
                          <h3>Embed Player with Nuxt</h3>
                          <p>
                            ในการใช้งาน Nuxt เป็นตัวเล่นฝัง (Embed Player)
                            ให้ตรวจสอบว่าคุณมีการตั้งค่าดังต่อไปนี้:
                          </p>
                          <pre>
                            <code></code>
                          </pre>
                          <p>
                            ตรวจสอบให้แน่ใจว่าคุณได้แทนค่าตัวอย่างที่ใช้ด้วยข้อมูลสตรีมและ
                            API Key ของคุณจริงๆ
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <div className="btn-group-custom">
                <button className="btn btn-primary" id="save-settings">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
