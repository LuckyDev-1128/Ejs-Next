import Link from "next/link";

export default function Home() {
    return (
      <div className="container">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                      {/* <!-- Nested Row within Card Body --> */}
                      <div className="row">
                          <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                          <div className="col-lg-6">
                              <div className="p-5">
                                  <div className="text-center">
                                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                  </div>
                                  <form className="user" id="loginForm">
                                      <div className="form-group">
                                          <input type="text" className="form-control form-control-user" id="username" aria-describedby="usernameHelp" placeholder="Enter username..."/>
                                      </div>
                                      <div className="form-group">
                                          <input type="password" className="form-control form-control-user" id="password" placeholder="Password"/>
                                      </div>
                                      <div className="form-group">
                                          <div className="custom-control custom-checkbox small">
                                              <input type="checkbox" className="custom-control-input" id="customCheck" />
                                              <label className="custom-control-label">Remember Me</label>
                                          </div>
                                      </div>
                                      <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                                  </form>
                                  <hr />
                                  <div className="text-center">
                                      <Link className="small" href="register">Create an Account!</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
      )
  }