import React from "react";
import Card from "./components/card/card";


function App(props) {
  return (
    <main className="App">
      <div className="row">
        {props.posts.map(card => (
          <div className="column small-12 medium-3">
            <Card
              title={card.title}
              subtitle={card.subtitle}
              actionName={card.id}
              linkUrl={card.url}
              imageUrl={card.thumbnailUrl}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
