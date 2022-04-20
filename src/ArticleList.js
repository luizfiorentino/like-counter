import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

// Complete the component ArticleList, so that it renders a list of ArticleCards based on the data in its state:
// Add a button to the top of the article list that shows the text "Clear notifications".
// When you click it, the articles should disappear

export default function ArticleList() {
  const [articles, set_articles] = useState([]);

  const resetArticleList = () => {
    set_articles([]);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("Let's fetch some data!");
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("Got back!", response);
      set_articles(response.data);
    }
    doSomeDataFetching();
  }, []);

  //As a final step, use the set_articles function in the last line of the async doSomeDataFetching function in
  //your effect, in order to update the component's state. The article list should now automatically be populated,
  //because React re-renders on state updates.
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
