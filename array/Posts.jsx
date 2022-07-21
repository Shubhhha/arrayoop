import React, { Fragment, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
const Posts = () => {
    //https://jsonplaceholder.typicode.com/posts
    
    const [posts ,setPosts] = useState([])
    const getData = async(current_page)=>{
        var response =await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${current_page}&_limit=10`)
        return response.data ;
        // setPosts(response.data);
    }
    useEffect(()=>{
     const getData_on_load = async()=>{
        var response =await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`)
        // return response.data ;       
        setPosts(response.data);
    }
    getData_on_load();
    },[])

   

    // react pagination code 
    const  handlepageClick = async(data)=>{
        var current_page = data.selected + 1 ;
        const resp = await getData(current_page);
        console.log(resp)
        setPosts(resp);
    }
    return (
        <Fragment>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Discription</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       posts.map((post,index)=>{
                       return(
                        <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                       )
                       })
                   }
                   
                </tbody>
            </Table>
      <div className='paginate'>
      <ReactPaginate
        previousLabel="< previous"
        breakLabel={'...'}
        pageCount={25}
        marginPagesDisplayed={4 }
        // pageRangeDisplayed={3}
        onPageChange={handlepageClick}
       
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        containerClassName={'pagination justify-content-center'}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item"}
      
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={'active'}
        nextLabel="> Next1"
      />
      </div>
        </Fragment>
    )

}
export default Posts;