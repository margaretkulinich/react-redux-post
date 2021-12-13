import { CREATE_POST_ACTION_NAME } from "./actions";

const initialState = {
    posts: [{  
        author: "Marharyta Kulinich",
        imageAuthor: "https://lh3.googleusercontent.com/ogw/ADea4I4lekz41FcTZGAr_Jq3x2rAzRRjn-JpiiJbZPhMnQ=s83-c-mo",
        userName: "@margokulinich",
        date: "2021/10/10",
        text: "I try to learn React.js",
        img: "https://miro.medium.com/max/2048/1*h5UGPzaL1E4dIy_JWDrsAw.png",
        likes: "17",
        comments: '5',
        reposts: '1'
    }, {
        author: "David Lutsenko",
        imageAuthor: "https://dontfear.ru/wp-content/uploads/2014/07/4a0bf547e4d045c0f0557d33cd839f0b-300x300.png",
        userName: "@user0012",
        date: "2021/09/01",
        text: "I try to learn React Router",
        img: "https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png",
        likes: "22",
        comments: '2',
        reposts: '3'
    }
    ],
    authors: ['Vanya Belyaev', 'Roman Nekiy', 'Alina Ruda', 'Lina Kalush'],
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_POST_ACTION_NAME: {
            const newPosts = state.posts.slice();

            newPosts.unshift(action.payload);

            return {
                ...state,
                posts: newPosts
            };
        }

        default:
            return state;
    }
}
