import React from "react";
import Card from "./components/card/card";
import UserCard from "./components/user-card/user-card";

const cards = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
  }
];

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    image: "https://randomuser.me/api/portraits/thumb/men/28.jpg"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    image: "https://randomuser.me/api/portraits/thumb/men/28.jpg"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    image: "https://randomuser.me/api/portraits/thumb/men/28.jpg"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    image: "https://randomuser.me/api/portraits/thumb/men/28.jpg"
  }
];
function App() {
  return (
    <main className="App">
      <div className="row">
        {cards.map(card => (
          <div className="column small-12 medium-3">
            <Card
              title={card.title}
              subtitle={card.subtitle}
              actionName="Go"
              linkUrl={card.url}
              imageUrl={card.url}
            />
          </div>
        ))}
      </div>
      <div className="row">
        {users.map(user => (
          <div className="column small-12 medium-3">
            <UserCard
              name={user.name}
              imageUrl={user.image}
              title={user.email}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
