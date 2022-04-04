import React from 'react'

import { Link } from 'react-router-dom'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import ProgressDisplay from './ProgressDisplay'
import PriorityDisplay from './PriorityDisplay'
import DeleteBlock from './DeleteBlock'

const TicketCard = ({ color, ticket }) => {


  return (
      <div className="ticket-card">

        <Link to={`/ticket/${ticket}`} id="link">
          <div className="ticket-color"></div>
          <h3>{ticket.title}</h3>
          <AvatarDisplay />
          <StatusDisplay />
          <PriorityDisplay />
          <ProgressDisplay />

        </Link>
        <DeleteBlock />

      </div>


  )
}


export default TicketCard