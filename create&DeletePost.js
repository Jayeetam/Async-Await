
    const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
    ];

    
async function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
    
async function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
    
            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong!')
            }
        }, 2000);
    })
    }
async function create4thPost(post){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        posts.push(post);
        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 2000);
})
}

async function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length >0){
                const lastelement = posts.pop()
                resolve(lastelement);
            } else{
                reject('Array is empty now');
            }
        },1000);
    });
}


async function init(){
await createPost({ title: `Post five`, body:`this is post five`});
await createPost({ title: 'Post Three', body: 'This is post Three'});        

await create4thPost({ title: 'Post Four', body: 'This is post four'});
    try{
        await getPosts();
        await deletePost() 
        try{
            await getPosts();
            await deletePost()
            try{
                await getPosts();
                await deletePost()
                try{
                    await getPosts();
                    await deletePost()
                }

                catch(error) {
                    console.log("Error: " + error);
                 }
            
            }catch(error) {
                console.log("Error: " + error);
            }
        }catch(error) {
            console.log("Error: " + error);
        }
    }catch(error) {
        console.log("Error: " + error);
}


}
init();

