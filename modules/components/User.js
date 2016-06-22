import React from 'react'
import { Link } from 'react-router'

const User = ({ id, first_name, last_name, phone_number, deleteUser }) => (
  <li>
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{name}</span>
        <table className="table">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone number</th>
          </thead>
          <tbody>
            <tr>
              <td>{first_name}</td>
              <td>${last_name}</td>
              <td>{phone_number}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-action">
        <Link to={`/products/${id}`}>Show</Link>
        <a onClick={() => deleteUser(id)} href="#">Delete</a>
      </div>
    </div>
  </li>  
)

export default User


