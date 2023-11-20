import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';
function Trailer({movies}) {
    const params=useParams();
    const movie=movies.filter((el)=>el.id==params.id)[0];
  return (
//     <div>
//         <img src={movie.posterurl}/>
//         <h1>{movie.name}</h1>
//         <p>{movie.description} </p>
//         <ReactStars
//     count={5}
//    edit={false}
//    value={movie.rating}
//     size={24}
//     activeColor="#dd2476"
//   />
//     </div>
     <Card style={{  margin :'10px',
     width: '39rem',
    margin: '10px',
    height: '904px',
   
    
     }}>
          <Card.Img variant="top" src={movie.posterurl} />
          <Card.Body>
           <Card.Title>{movie.name}</Card.Title>
           <Card.Text style={ { margin: '19px',position: 'relative'}} >
            <p>{movie.description} </p>
    
           </Card.Text>
           <ReactStars
       count={5}
      edit={false}
      value={movie.rating}
       size={24}
       activeColor="#ffd700"
     />
          
         </Card.Body>
       </Card>
  )
}

export default Trailer