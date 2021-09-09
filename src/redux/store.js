import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./Friends-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'It"s my first post', likesCount: 14 },
        { id: 2, message: "Hi, How are you?", likesCount: 24 },
        { id: 3, message: "Im fine and you", likesCount: 24 },
        { id: 3, message: "Im fine and you", likesCount: 24 },
        { id: 3, message: "Im fine and you", likesCount: 24 },
      ],

      newPostText: "Aram React",
    },

    dialogsPage: {
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Im fine and you" },
      ],
      dialogsData: [
        {
          id: 1,
          name: "Aram",
          imgSrc:
            "https://www.firestock.ru/download/s/gm9qc8ko5n7b7zh/shutterstock_20290501.jpg",
        },
        {
          id: 2,
          name: "Karen",
          imgSrc:
            "https://st.depositphotos.com/1809585/5158/i/950/depositphotos_51584435-stock-photo-dental-care-of-a-happy.jpg",
        },
        {
          id: 3,
          name: "Mash",
          imgSrc:
            "https://cdn1.peopleimages.com/picture/2016/25011-business-man-smiling-zoom_90.jpg",
        },
        {
          id: 4,
          name: "Emily",
          imgSrc:
            "https://static.103.by/images/common/wysiwyg/2020/09/4b2a7e6e75c452ecb847b6a59b6829c1.jpg",
        },
        {
          id: 5,
          name: "Gosh",
          imgSrc:
            "https://avatars.mds.yandex.net/get-zen_doc/2359038/pub_5f194e6cd23de037f14ac37c_5f27cef16f828e5e24c10e81/scale_1200",
        },
        {
          id: 6,
          name: "Gapo",
          imgSrc:
            "https://st.depositphotos.com/1738591/1228/i/950/depositphotos_12285344-stock-photo-happy-smiling-young-manage.jpg",
        },
      ],

      newMessageBody: "",
    },

    friends: {
      friendsData: [
        {
          id: 1,
          name: "Aram",
          imgSrc:
            "https://www.firestock.ru/download/s/gm9qc8ko5n7b7zh/shutterstock_20290501.jpg",
        },
        {
          id: 2,
          name: "Karen",
          imgSrc:
            "https://st.depositphotos.com/1809585/5158/i/950/depositphotos_51584435-stock-photo-dental-care-of-a-happy.jpg",
        },
        {
          id: 3,
          name: "Mash",
          imgSrc:
            "https://cdn1.peopleimages.com/picture/2016/25011-business-man-smiling-zoom_90.jpg",
        },
      ],
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // {type: 'ADD-POST'}

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friends = friendsReducer(this._state.friends, action);

    this._callSubscriber(this._state);
  },
};

window.state = store._state;

export default store;
