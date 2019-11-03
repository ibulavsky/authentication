export const GET_POSTS = 'TEST-APP/GET-POSTS';

const initialState = {
    posts: [
        {
            userId: 1,
            id: 1,
            title: 'Оу, это первый пост',
            body: 'Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! ' +
                'Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! ' +
                'Hey, everyone!'
        }, {
            userId: 2,
            id: 2,
            title: 'Second title',
            body: 'Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone!'
        },
    ],
    postsPage: 1,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: [...action.posts],
            };
        default:
            return state
    }
};


export default postsReducer;

export const getPosts = (posts) => (
    {type: GET_POSTS, posts}
);
