/*
* FETCH BLOG INFO
*/
fetch('https://jsonplaceholder.typicode.com/po')
    .then((result) => {
        return result.json();
    }).then((getBlogs) => {
        
        // for loop
        for (let i = 0; i < getBlogs.length; i++) {
            console.log(getBlogs[i]);
        }

        // forEach
        getBlogs.forEach(myFunction)
        function myFunction(item, index, arr) {
            console.log(item);
        }

        // filter
        const justTitles = getBlogs.filter((item) => {
            return item.userId === 1;
        });
        console.log(justTitles);
    }).catch((error) => {
        console.log('error:', error);
    });