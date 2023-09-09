function loadPOsts(){
    // console.log('loading posts')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
};

/*
1. get the container element where you want to add the new element
2. create child element
3. set innerText or innerHTML
4. appendChild

*/

function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        // console.log(post);
        const postsDiv = document.createElement('div');
        postsDiv.classList.add('post')
        postsDiv.innerHTML = `
            <h4>user-${post.userId}</h4>
            <h5>post: ${post.title}</h5>
            <p>post Decription${post.body}</p>
        `;
        postContainer.appendChild(postsDiv);
    }
}

loadPOsts()