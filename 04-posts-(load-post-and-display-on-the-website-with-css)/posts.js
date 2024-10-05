/*
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appentChild
*/



function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    // console.log(posts)

    const postsConatiner = document.getElementById('posts-container') //STEP: (1) get the container element where you want to add the new elements

    for(const post of posts){
        const postDiv = document.createElement('div') //STEP: (2) create child element

        postDiv.classList.add('post')//(add post class for css style)

        postDiv.innerHTML = `
            <h4>User ID-${post.userId}</h4>
            <h4>ID- ${post.id}</h4>
            <h5>Post: ${post.title}</h5>
            <h6>Post Description ${post.body}</h6>
        `; //STEP: (3) set innerText or innerHTML

        postsConatiner.appendChild(postDiv) //STEP: (4) appentChild

        // console.log(post)
    }

}

loadPosts()



