import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const CategoryDetailContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const CategoryTitle = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const RecipeListStyled = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const RecipeItem = styled.li`
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

const CategoryDetail = () => {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/?category=${id}`)
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, [id]);

    return (
        <CategoryDetailContainer>
            <CategoryTitle>Рецепты</CategoryTitle>
            <RecipeListStyled>
                {recipes.map(recipe => (
                    <RecipeItem key={recipe.id}>
                        <StyledLink to={`/recipe/${recipe.id}`}>{recipe.title}</StyledLink>
                    </RecipeItem>
                ))}
            </RecipeListStyled>
        </CategoryDetailContainer>
    );
};

export default CategoryDetail;
