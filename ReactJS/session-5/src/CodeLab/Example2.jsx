import { useState } from "react";

function Example2() {
    const [books,setBooks]=useState([
        {id:1,name:'Book1',quantity:3},
        {id:2,name:'Book2',quantity:2},
        {id:3,name:'Book3',quantity:3},
        {id:4,name:'Book4',quantity:1},
    ])
    const handler=(id)=>{
        setBooks(books.map(book=>{
            if(book.id==id)
                --book.quantity;
            return book;
        }))
    }
    return ( 
        <div>
            <div className="row">
                {
                    books.map(book=>(
                        <div className="col" key={book.id}>
                            <h4>{book.name}</h4>
                            <h5>Stock: {book.quantity}</h5>
                            {book.quantity>0?<button onClick=
                            {()=>handler(book.id)}>Borrow</button>:
                            'Borrowed'}
                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default Example2;