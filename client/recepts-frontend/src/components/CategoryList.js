import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryListContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const CategoryTitle = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const CategoryListStyled = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const CategoryItem = styled.li`
    margin: 10px 0;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e0e0e0;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories/')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <CategoryListContainer>
            <CategoryTitle>Категории</CategoryTitle>
            <CategoryListStyled>
                {categories.map(category => (
                    <CategoryItem key={category.id}>
                        <StyledLink to={`/category/${category.id}`}>{category.name}</StyledLink>
                    </CategoryItem>
                ))}
            </CategoryListStyled>
        </CategoryListContainer>
    );
};

export default CategoryList;
