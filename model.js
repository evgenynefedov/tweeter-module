const Tweeter = function() {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let _postIdCounter = 3
    let _commentIdCounter = 7

    const getPostsMethod = function(){
        return _posts
    }

    const addPostMethod = function(postText){
        _posts.push(
            {
                id: "p" + _postIdCounter,
                text: postText,
                comments: []
            }
        )
        _postIdCounter += 1
    }

    const removePostMethod = function(postId){
        let postIndex = _posts.findIndex(post => {return post.id == postId})
        if(postIndex != -1){
            _posts.splice(postIndex, 1)
        }
    }

    const addCommentMethod = function(commentText, postId){
        let postIndex = _posts.findIndex(post => {return post.id == postId})
        
        if(postIndex != -1){
            _posts[postIndex].comments.push(
                {
                    id: "c" + _commentIdCounter,
                    text: commentText
                }
            )
            _commentIdCounter += 1
        }
    }

    const removeCommentMethod = function(postId, commentId){
        let postIndex = _posts.findIndex(post => {return post.id == postId})
        if(postIndex != -1){
            let commentIndex = _posts[postIndex].comments.findIndex(comment => {return comment.id == commentId})
            if(commentIndex != -1){
                _posts[postIndex].comments.splice(commentIndex, 1)
            }
        }
    }

    return {
        getPosts: getPostsMethod,
        addPost: addPostMethod,
        removePost: removePostMethod,
        addComment: addCommentMethod,
        removeComment: removeCommentMethod
    }
}

//const tweeter = Tweeter()