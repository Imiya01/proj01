async function processingBlogs() {
    // happens in here
    const response = await fetch('');
    const blogs = await response.json();
    console.log(blogs);
}

(async () => {
    try {
        processingBlogs();
    } catch (error) {
        // go here
        console.log(error);
    }
})();