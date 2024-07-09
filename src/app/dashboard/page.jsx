import React from 'react'

const page = () => {
  return (
    <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            {/* <!-- Top Row of Cards --> */}
            <div className="row">
                {/* <!-- Total Process --> */}
                <div className="col-xl-2 col-md-4 mb-4">
                    <div className="card bg-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1 text-white">Total Process
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-white">
                                        totalVideos
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-cloud fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Completed Process --> */}
                <div className="col-xl-2 col-md-4 mb-4">
                    <div className="card bg-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1 text-white">Completed
                                        Process</div>
                                    <div className="h5 mb-0 font-weight-bold text-white">
                                         completedVideos
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-cloud fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Failed Process --> */}
                <div className="col-xl-2 col-md-4 mb-4">
                    <div className="card bg-danger shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1 text-white">Failed Process
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-white">
                                        failedVideos
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-cloud fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Waiting Process --> */}
                <div className="col-xl-2 col-md-4 mb-4">
                    <div className="card bg-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1 text-white">Waiting Process
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-white">
                                        waitingVideos 
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-cloud fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Downloading --> */}
                <div className="col-xl-2 col-md-4 mb-4">
                    <div className="card bg-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1 text-white">Downloading
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-white">
                                        downloadingVideos 
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-cloud fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Encode Process -->/ */}
                <div className="col-xl-2 col-md-4 mb-4">
                    <div className="card bg-secondary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1 text-white">Encode Process
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-white">
                                         encodingVideos
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-cloud fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Server Information Table --> */}
            <div className="row">
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            {/* <!-- Server Information Section --> */}
                            <div className="col d-flex justify-content-between align-items-center">
                                <h6 className="m-0 font-weight-bold text-primary">Server Information</h6>
                                <div>
                                    <button className="btn btn-primary" id="deleteAllCaches">Delete All Caches</button>
                                    <button className="btn btn-success" id="ResetAllErrorss">Reset All Errors</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Server ID</th>
                                            <th>Using Spaces</th>
                                            <th>Server List</th>
                                            <th>Total Video</th>
                                            <th>Waiting Process</th>
                                            <th>Working Process</th>
                                            <th>Failed Process</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>
                                                    index + 1
                                                </td>
                                                <td>
                                                    server.id
                                                </td>
                                                <td>
                                                    
                                                </td>
                                                <td>
                                                   
                                                        <span className="badge bg-success text-white">
                                                            domain
                                                        </span>
                                                       
                                                </td>
                                                <td>
                                                    serverSpace.totalVideos
                                                </td>
                                                <td>
                                                    serverSpace.waitingVideos
                                                </td>
                                                <td>
                                                    serverSpace.encodingVideos
                                                </td>
                                                <td>
                                                    serverSpace.failedVideos
                                                </td>
                                                <td><button className="btn btn-success reset-errors"
                                                        data-id="<%= server.id %>">Reset Errors</button></td>
                                            </tr>
                                            
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default page