import React from 'react'
<<<<<<< HEAD
import { ReactDOM } from 'react'
import TicketCard from '../components/TicketCard'

function Dashboard(props) {

  /* -------------------------------------------------------------------------- */
  /*                          Fake data for tickets app                         */
  /* -------------------------------------------------------------------------- */
  const tickets = [

    {

      category: 'Alan 2022',
      color: 'blue',
      title: 'Insecure 45',
      owner: 'Joana Belisk',
      avatar: 'https://avatars.githubusercontent.com/u/53535932?s=400&u=886a5a5fd49a701f84b6270da3410da193a0e60f&v=4',
      status: 'done',
      priority: '5',
      progress: '40',
      description: 'Make a video showcase hot to convert data from a external data center',
      timestamp: '2022=02=11T07:36:17+0000'

    },
    {

      category: 'f1 2022',
      color: 'red',
      title: 'Bolao',
      owner: 'Joana Belisk',
      avatar: 'https://avatars.githubusercontent.com/u/53535932?s=400&u=886a5a5fd49a701f84b6270da3410da193a0e60f&v=4',
      status: 'done',
      priority: '5',
      progress: '40',
      description: 'Make a video showcase hot to convert data from a external data center',
      timestamp: '2022=02=11T07:36:17+0000'

    },
    {

      category: 'B1 2022',
      color: 'green',
      title: 'NFT Safety',
      owner: 'Joana Belisk',
      avatar: 'https://avatars.githubusercontent.com/u/53535932?s=400&u=886a5a5fd49a701f84b6270da3410da193a0e60f&v=4',
      status: 'done',
      priority: '5',
      progress: '40',
      description: 'Make a video showcase hot to convert data from a external data center',
      timestamp: '2022=02=11T07:36:17+0000'

    },
    {

      category: 'Cd 2022',
      color: 'cyan',
      title: 'NFT Safety',
      owner: 'Joana Belisk',
      avatar: 'https://avatars.githubusercontent.com/u/53535932?s=400&u=886a5a5fd49a701f84b6270da3410da193a0e60f&v=4',
      status: 'done',
      priority: '5',
      progress: '40',
      description: 'Make a video showcase hot to convert data from a external data center',
      timestamp: '2022=02=11T07:36:17+0000'

    }

  ]

  /* -------------------------------------------------------------------------- */
  /*                             filter the tickets                             */
  /* -------------------------------------------------------------------------- */


return { 


<h1>Hewloo</h1>


}

=======
import TicketCard from '../components/TicketCard'

 function Dashboard() {
 
 const tickets=[
 {
 
 category:"Q1 success",
 color:"Blue",
 title:"Text title number one",
 owner:"Erika",
 AvatarDisplay:"Q1 success",
 status:"Q1 success",
 priority:"Q1 success",
 progress:"Q1 success",
 description:"Q1 success",
 timestamp:"00-00-00",
},

{
 
  category:"Q1 fwfwfw",
  color:"Q1 success",
  title:"Text title number two",
  owner:"Juarez",
  AvatarDisplay:"Q1 success",
  status:"Q1 success",
  priority:"Q1 success",
  progress:"Q1 success",
  description:"Q1 success",
  timestamp:"00-00-00",
 },
 {
 
  category:"Q1 sufwfwfwfwccess",
  color:"Q1 success",
  title:"Text title number tree",
  owner:"Evandro",
  AvatarDisplay:"Q1 success",
  status:"Q1 success",
  priority:"Q1 success",
  progress:"Q1 success",
  description:"Q1 success",
  timestamp:"00-00-00",
 },
 
 
 ]
 
 
 const uniqueCategories=[
 ...new Set(tickets?.map(({category})=>category))
 
 
 ]
  console.log(uniqueCategories)
 
 
  return (
  
  
    <div className='dashboard'>
    <h1>My Projects</h1>
    <div className="ticket-container">
    {tickets && uniqueCategories?.map((uniqueCategory,categoryIndex)=>(
    <div key={categoryIndex}>
    <h3>{uniqueCategory}</h3>
    {tickets.filter(ticket => ticket.category === uniqueCategory)
    .map((filteredTicket, _index)=>(
    
    <TicketCard
    id={_index}
    color={filteredTicket.color}
    ticket={filteredTicket}
    
  
    />
    
    ))
    
    }
    
  
    </div>
    
    ))}
    
    </div>
    
    
    </div>
  )
>>>>>>> f7c98d548839c14295562d2fc5baf10092591396
}


   export default Dashboard
