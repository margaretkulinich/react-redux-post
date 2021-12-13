export const CREATE_POST_ACTION_NAME = "CREATE_POST";

const currentDate = () => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; 
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return year + "/" + month + "/" + day;
}

export function createPost(postContent, postContentImgSrc, postAuthor) {
    return {
        type: CREATE_POST_ACTION_NAME,
        payload: {
            author: postAuthor,
            imageAuthor: "https://dontfear.ru/wp-content/uploads/2014/07/4a0bf547e4d045c0f0557d33cd839f0b-300x300.png",
            userName: `@${postAuthor}`,
            date: currentDate(),
            text: postContent,
            img: postContentImgSrc,
            likes: 0,
            comments: 0,
            reposts: 0,
        }
    };
};


 
