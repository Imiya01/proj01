/*
* FETCH BLOG INFO
*/
fetch('http://api.mediastack.com/v1/news?access_key=bff3a86eb00042ed68258f5c86a6318d')
    .then((result) => {
        return result.json();
    }).then((getBlogs) => {
        console.log(getBlogs);
        // for loop
        for (let i = 0; i < getBlogs.data.length; i++) {
            document.getElementById('blogTitles').innerHTML += `<li>${getBlogs.data[i].title}</li>`;
        }
    }).catch((error) => {
        console.log('error:', error);
    });

    // let mapAuthors = return.data.map(author => return)

