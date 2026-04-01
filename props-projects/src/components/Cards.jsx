import React from 'react'

const Cards = (props) => {
  return (
    <div className="card">

    {/* Header */}
    <div className="card-header">
      <p className="status">{props.status}</p>
      <div className="price">{props.price}</div>
    </div>

    {/* Profile Section */}
    <div className="card-body">

      <div className="profile">
        <img src="https://plus.unsplash.com/premium_photo-1774271492622-2caebba85850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="profile" />
        <h2>{props.name}</h2>
        <p>{props.role}</p>
        <span className="company">{props.company}</span>
      </div>

      <div className="tags-container">
        <span className="tag">UI</span>
        <span className="tag">UX</span>
        <span className="tag">Photoshop</span>
        <span className="tag more">{props.extraSkills}</span>
      </div>

    </div>

    {/* Footer */}
    <div className="card-footer">
      <p>
        {props.description}
      </p>
      <button>View Profile</button>
    </div>

  </div>
  )
}

export default Cards