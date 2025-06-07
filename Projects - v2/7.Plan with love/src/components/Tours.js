
// tours is the component which contains all cards
import Card from "./Card.js";

function Tours({tours,removeTour})
  {
      return (

              <div className="container">
                   <div>
                        <h2 className="title">Plan With Love</h2>
                   </div>

                   <div className="cards">
                        {
                            tours.map(  (tour)=>
                                        {
                                             return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                                             // ...tour se humne tour naam ka jo objec tha uski ek copy paas kr di
                                        }
                                    )
                        }

                   </div>
                    

                      
              </div>
      )
  }

  export default Tours;