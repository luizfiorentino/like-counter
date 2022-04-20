import { useState } from "react";
import ArticleCard from "./ArticleCard";

// Complete the component ArticleList, so that it renders a list of ArticleCards based on the data in its state:
// Add a button to the top of the article list that shows the text "Clear notifications".
// When you click it, the articles should disappear

export default function ArticleList() {
  const [articles, set_articles] = useState([
    {
      id: 1,
      title: "What is React all about?",
      body: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body: "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]);

  const resetArticleList = () => {
    set_articles([]);
  };

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles.map((article, index) => {
        return (
          <ArticleCard
            key={index}
            id={article.id}
            title={article.title}
            body={article.body}
          />
        );
      })}
      <button onClick={resetArticleList}>Clear notifications</button>
    </div>
  );
}
