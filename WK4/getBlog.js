fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
        return result.json();
    }).then((getBlogs) => {
        
        // for loop
        for (let i = 0; i < getBlogs.length; i++) {
            document.getElementById('blogTitles').innerHTML += `<li>${getBlogs[i].title}</li>`;
        }
    }).catch((error) => {
        console.log('error:', error);
    });


/// for each, for, filter

//FITLER
const justTitles = getBlogs.filter((item) => {

return item.userId ===1;

});

//MAP
const justTitles = getBlogs.map((item.body) => {

    return 'In the beginning ' + item.body;
    
    });

}).catch((error) => {

    console.log('error', error);

}

let i = 0;
while (i < result.json.length) {
    console.log(getBlogs[i]);
  
}///

var getBlogs = result.json();
for(var i = 0; i < getBlogs.length; i++){
}

/*
* FETCH BLOG INFO
*/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
        return result.json();
    }).then((getBlogs) => {
        
        // for loop
        for (let i = 0; i < getBlogs.length; i++) {
            document.getElementById('blogTitles').innerHTML += `<p>${getBlogs[i].title}</p>`;
        }
    }).catch((error) => {
        // console.log('error:', error);
    });