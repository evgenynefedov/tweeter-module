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
                    <div data-id="${comment.id}}">
                        ${comment.text}
                        <span class="delete-comment">delete</span>
                    </div>
                    `
                }
            }
            
            let postHTML = `
                <div class="post" data-id="${post.id}">
                    <div class="post-text">${post.text}</div>
                    <div class="comments">${commentsHTML}</div>
                    <span class="delete">detele</span>
                </div>
            `
            postsArea.append(postHTML)
        }
    }

    return {
        renderPosts
    }
}