import React from 'react'
import { Link } from 'react-router-dom'
import Table from './Table'
const Dashboard = () => {
  return (
    <>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">User List</h1>
      <Link
        to="/create-user"
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i className="fas fa-download fa-sm text-white-50" /> Create User
      </Link>
    </div>

    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          DataTables Example
        </h6>
        <div className="card-body">

           
            <div className="table-responsive">
              <Table  />
            </div>
       
        </div>
      </div>
    </div>
  </>
  )
}

export default Dashboard