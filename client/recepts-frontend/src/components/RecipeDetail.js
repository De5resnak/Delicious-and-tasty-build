import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const RecipeDetailContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const RecipeTitle = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const RecipeImage = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
`;

const SectionTitle = styled.h2`
    margin-top: 20px;
`;

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}/`)
            .then(response => setRecipe(response.data))
            .catch(error => console.error('Error fetching recipe:', error));
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <RecipeDetailContainer>
            <RecipeTitle>{recipe.title}</RecipeTitle>
            {recipe.image && (
                <RecipeImage src={`http://localhost:8000${recipe.image}`} alt={recipe.title} />
            )}
            <p>{recipe.description}</p>
            <SectionTitle>Ингредиенты</SectionTitle>
            <p>{recipe.ingredients}</p>
            <SectionTitle>Приготовление</SectionTitle>
            <p>{recipe.instructions}</p>
        </RecipeDetailContainer>
    );
};

export default RecipeDetail;
