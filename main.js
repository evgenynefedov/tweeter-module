const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function(){
    let postText = $("#input").val();
    if(postText != ""){
        tweeter.addPost(postText)
        $("#input").val("")
        renderer.renderPosts(tweeter.getPosts())
    }
})

$("#posts").on("click", ".delete", function(){
    let postId = $(this).closest(".post").data("id")
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete-comment", function(){
    let postId = $(this).closest(".post").data("id")
    let commentId = $(this).closest(".comment").data("id")
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".add-comment>.button", function(){
    commentText = $(this).siblings("input").val()
    if(commentText){
        let postId = $(this).closest(".post").data("id")
        tweeter.addComment(commentText, postId)
        $(this).siblings("input").val("")
        renderer.renderPosts(tweeter.getPosts())
    }
})