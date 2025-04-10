import React from 'react';

const ResultDisplay = ({ result, isFoodSelected }) => {
  return (
    <div>
      {isFoodSelected ? (
        <h2>추천 음식: {result}</h2>
      ) : (
        <h2>음식 카테고리를 선택해 주세요!</h2>
      )}
    </div>
  );
};

export default ResultDisplay;
