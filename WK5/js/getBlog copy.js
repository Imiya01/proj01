/*
* FETCH BLOG INFO
*/
fetch('https://newsdata.io/api/1/news?apikey=pub_10558dd6453bbb10803a0ec395b1a0f0f8f74')
    .then((result) => {
        return result.json();
    }).then((getBlogs) => {
        console.log(getBlogs);
        // for loop
        for (let i = 0; i < getBlogs.results.length; i++) {
            document.getElementById('blogTitles').innerHTML += `<li>${getBlogs.results[i].title}</li>`;
        }
    }).catch((error) => {
        console.log('error:', error);
    });

    // let mapAuthors = return.data.map(author => return)

