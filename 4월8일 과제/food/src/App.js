import React, { useState } from "react";
import CategorySelector from "./food/CategorySelector";
import RandomButton from "./food/RandomButton";
import ResultDisplay from "./food/ResultDisplay";
import foodList from "./food/foodList";
import Footer from "./food/Footer";

const App = () => {
  const categories = [
    "한식",
    "양식",
    "일식",
    "중식",
    "분식",
    "술안주",
    "간편식",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [randomFood, setRandomFood] = useState("");
  const [isFoodSelected, setIsFoodSelected] = useState(false);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleRandomClick = () => {
    const filteredFoods = selectedCategories.flatMap(
      (category) => foodList[category] || []
    );

    if (filteredFoods.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredFoods.length);
      setRandomFood(filteredFoods[randomIndex]);
      setIsFoodSelected(true);
    } else {
      setRandomFood("");
      setIsFoodSelected(false);
    }
  };

  return (
    <div>
      <h1>오늘 뭐 먹지?</h1>

      <CategorySelector
        categories={categories}
        onCategoryChange={handleCategoryChange}
      />
      <RandomButton selection="고르기" onClick={handleRandomClick} />
      <ResultDisplay result={randomFood} isFoodSelected={isFoodSelected} />
      <br></br>
      <br></br>
      <br></br>
      <Footer message="경성대학교 21학번 박상민" />
    </div>
  );
};

export default App;
