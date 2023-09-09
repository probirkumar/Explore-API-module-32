// console.log('comment')
function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}

function displayComment(comments){
    const commentContainer = document.getElementById('comment-container');
    for(const comment of comments){
        // console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
            <h3>name: ${comment.name}</h3>
            <p>email: ${comment.email}</p>
            <p>comment body: ${comment.body}</p>
        `;
        commentContainer.appendChild(commentDiv);
    }
}

loadComment();