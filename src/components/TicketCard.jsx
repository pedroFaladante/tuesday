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
  )
}


export default TicketCard