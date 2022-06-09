import React, { useEffect, useState } from "react";
import Card from "../Components/searchCard";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {setBookData} from "../features/popBookData";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Books = () => {/*

    const [dropdown, setDropdown] = useState(false)

    const bookData = useSelector((state) => state.bookData.value);
    const paramsSearch = useSelector((state) => state.paramsSearch.value);
    const dispatch = useDispatch();
    
    const [keyword, setKeyword] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [subject, setSubject] = useState("");
    const [isbn, setIsbn] = useState("");

    const searchBooks = () => {
        let titleParam = "";
        let authorParam = "";
        let publisherParam = "";
        let subjectParam = "";
        let isbnParam = "";
        if(title !== "") {
            titleParam = "+intitle:";
        };
        if(author != "") {
            authorParam = "+inauthor:";
        };
        if(publisher != "") {
            publisherParam = "+inpublisher:";
        };
        if(subject != "") {
            subjectParam = "+subject:";
        };
        if(isbn != "") {
            isbnParam = "+isbn:";
        };
        let url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}${titleParam}${title}${authorParam}${author}${publisherParam}${publisher}${subjectParam}${subject}${isbnParam}${isbn}&key=AIzaSyCcH8YnStIHfPmRNB4WBarph4i03ekNjX8&maxResults=40`;
        axios.get(url)
        .then(res => {
                if(res.data.totalItems =! 0) {
                    dispatch(setBookData(res.data.items))
                } else {
                    dispatch(setBookData([]))
                }
            })
        .catch(err => console.log(err))
        };
    
    const enterSearch = (event) => {
        if(event.key === 'Enter') {searchBooks()}
    };

    return (
        <Main>
            <AdvancedSearch>
                <Container toggle={dropdown}>
                    <p>Ingrese los parámetros para la búsqueda:</p>
                    <Label htmlfor="keyword">Palabra/s clave/s</Label>
                    <input 
                        type="text" id="keyword" value={keyword} 
                        onChange={e=>setKeyword(e.target.value)}
                        onKeyDown={enterSearch} 
                    />
                    <Label htmlfor="keyword">Titulo</Label>
                    <input 
                        type="text" id="title" value={title} 
                        onChange={e=>setTitle(e.target.value)}
                        onKeyDown={enterSearch} 
                    />
                    <Label htmlfor="author">Autor/es</Label>
                    <input 
                        type="text" id="author" value={author} 
                        onChange={e=>setAuthor(e.target.value)}
                        onKeyDown={enterSearch} 
                    />
                    <Label htmlfor="publisher">Editorial</Label>
                    <input 
                        type="text" id="publisher" value={publisher} 
                        onChange={e=>setPublisher(e.target.value)}
                        onKeyDown={enterSearch} 
                    />
                    <Label htmlfor="subject">Categoría</Label>
                    <input 
                        type="text" id="subject" value={subject} 
                        onChange={e=>setSubject(e.target.value)}
                        onKeyDown={enterSearch} 
                    />
                    <Label htmlfor="isbn">ISBN</Label>
                    <input 
                        type="text" id="isbn" value={isbn} 
                        onChange={e=>setIsbn(e.target.value)}
                        onKeyDown={enterSearch} 
                    />
                <Button onClick={searchBooks}>BUSCAR</Button>
                </Container>
                <Bar onClick={()=> {setDropdown(!dropdown)}}>
                    <h3>Búsqueda avanzada</h3>
                    <div>
                        {dropdown ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                    </div>
                </Bar>
            </AdvancedSearch>
            <SearchContainer>
                <SearchParams>
                    Resultados de búsqueda para: <Strong></Strong>
                </SearchParams>
                { bookData != undefined ? <Card book={bookData} /> : <h3>No hay coincidencias</h3>}
            </SearchContainer>
        </Main>
    ); 
    */};

const Main = styled.div`
    margin: 0rem 1rem 1rem;
    padding: 1rem 1rem;
`;
const AdvancedSearch = styled.section`
    padding: 1rem 2rem;
    @media screen and (min-width: 768px) {
        padding: 1rem 6rem;
    };
    @media screen and (min-width: 992px) {
        padding: 1rem 8rem;
        font-size: 1.2rem;
    };
`;
const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Sanchez', serif;
    padding: .5rem 2rem;
    background-color: #f0f0f0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
`;
const Container = styled.div`
    flex-direction: column;
    background-color: #f0f0f0;
    padding: 0.8rem 1rem 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    p {
        padding-bottom: 0.5rem;
    };
    input {
        margin: .5rem 0;
        padding: .3rem .6rem;
        border: 1px solid #565656
        border-radius: 5px;
        &:focus{
            outline: 1px solid #767676;
        }
        @media screen and (min-width: 992px) {
            font-size: 1.2rem;
        };
    };
    @media screen and (min-width: 768px) {
        padding: 1rem 2rem;
    }
    ${props => {
        if (props.toggle) {
          return `
          display: flex;
          `;
        } else {
          return `
            display: none;
          `;
        }
      }}
`;
const Label = styled.label`

`;
const Button = styled.button`
    width: 100%;
    padding: .6rem .6rem;
    margin: 1rem 0;
    background-color: #ccc;
    color: white;
    cursor: pointer;
    border: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    transition: 0.2s ease all;
    &:hover {
        background-color: #ddd;
        color: black;
    }
`;
const SearchContainer = styled.div`

`;
const SearchParams = styled.h3`
margin: 1rem;
padding: 2rem 1rem;
background-color: #f1f1f1f1;
`;
const Strong = styled.p`
    display: inline-block;
    font-family: "Sanchez", serif;
`;

export default Books;