import React from 'react' 

import TicketCard from '../components/TicketCard'

function Dashboard() {

  const tickets = [

    {

      category: 'B1 2022',
      color: 'blue',
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

      category: 'B1 2022',
      color: 'red',
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

      category: 'B1 2022',
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

console.log(tickets)


  const uniqueCategories = [
    new Set(tickets?.map(({ category }) => category))
  ]


  return (
    <div className="Dashboard">Dashboard

      <h1>My Project</h1>
      <div className={"ticket-container"}>
        {tickets && uniqueCategories?.map((uniqueCategories, categoryIndex) => (

          <div key={categoryIndex}>

            <h3>{uniqueCategory} </h3>
            {tickets.filter(ticket => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
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
