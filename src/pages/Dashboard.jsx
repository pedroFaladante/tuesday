import React from 'react'
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
}



export default Dashboard
