import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Book.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Book = (props) => {
    const history = useNavigate();
    const {_id,name,author,description,price,image}=props.book

    const deleteHandler = async () => {
        await axios
          .delete(`http://localhost:5000/books/${_id}`)
          .then((res) => res.data)
          .then(() => history("/"))
          .then(() => history("/books"));
      };
  return (
    <div className='card'>
        <img src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <div className='steps'>
        <p>{description}</p>
        <h2>{price}</h2>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt: "auto"}}>Update</Button>
        <Button onClick={deleteHandler} sx={{mt: "auto"}}>Delete</Button>
        </div>
    </div>
  )
}

export default Book