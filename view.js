const Renderer = function(){

    const renderPosts = function(posts){
        let postsArea = $("#posts")
        postsArea.html("")
   
        for(post of posts){
            let commentsHTML = ""
            
            if(post.comments.length){    
                commentsHTML += "Comments: "

                for(comment of post.comments){
                    commentsHTML += `
                    <div class="comment" data-id="${comment.id}">
                        ${comment.text}
                        <span class="delete-comment">X</span>
                    </div>
                    `
                }
            }
            
            let postHTML = `
                <div class="post" data-id="${post.id}">
                    <div class="post-text">${post.text}</div>
                    <div class="comments">${commentsHTML}</div>
                    <span class="delete">Delete post</span>
                    <div class="add-comment">
                        <input type="text" placeholder="Please enter your comment">
                        <div class="button">Add comment</div>
                    </div>
                </div>
            `
            postsArea.append(postHTML)
        }
    }

    return {
        renderPosts
    }
}