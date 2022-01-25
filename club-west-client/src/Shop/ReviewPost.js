
import Button from '@mui/material/Button';

export default function ReviewPost({ review }){




    // function handleUpdate(values) {
        
    //     fetch(`/reviews/${review.id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         ...values, item_id: item.id
    //       }),
    //     })
    //       .then((r) => r.json())
    //     //   .then(() => ());
    //   }
    

//       function handleDelete() {
//         fetch(`/reviews/${review.id}`, {
//       method: "DELETE",
//     })
//       .then(() => setGetItem({...item, reviews: item.reviews.filter((r) => r.id !== review.id)}));
//   }



    return (
        <>
        <h3>{review.comment}</h3>
        <Button  type="submit" variant="contained" >
              Edit
            </Button> 
            {/* <Button onClick={handleDelete} type="submit" variant="contained" >
              Delete
            </Button>  */}
        </>
    )
}