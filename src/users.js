const SET_USERS = 'SET_USERS';

const initialState = {
  data: [
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
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, data: action.payload }
    }
    default:
      return state;
  }
}

export default reducer;
