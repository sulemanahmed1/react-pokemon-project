import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>  
            <br></br>
            <br></br>
             {gotoPrevPage && <button onClick={gotoPrevPage}>prev</button>}
             <br></br>
             <br></br>
             
            {gotoNextPage && <button onClick={gotoNextPage}>next</button>}
         
            
        </div>
    )
}
