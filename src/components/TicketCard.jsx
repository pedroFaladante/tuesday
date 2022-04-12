<<<<<<< HEAD
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


=======
import Avatar from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'



 function TicketCard(color,ticket) {
  return (
  <div className="ticket-card">
  {/* <Link> */}
  <div className="ticket-color"></div>
  <h1>Title</h1>
    <div>AvatarDisplay</div>
    <div>StatusDisplay</div>
    <div>PriorityDisplay</div>
    <div>ProgressDisplay</div>
{/*    
    </Link> */}
   
    </div>
>>>>>>> f7c98d548839c14295562d2fc5baf10092591396
  )
}


export default TicketCard