// Define articles with titles and links
const articles = [
    { title: "AI is Changing the World", link: "article1.html" },
    { title: "Space Exploration: What's Next?", link: "article2.html" }
];

// Get the element where articles will be displayed
const articleList = document.getElementById('article-list');

// Loop through each article and add it to the page
articles.forEach(article => {
    const articleElement = document.createElement('article');
    const articleTitle = document.createElement('h3');
    const articleLink = document.createElement('a');
    
    articleLink.href = article.link;
    articleLink.textContent = article.title;
    
    articleTitle.appendChild(articleLink);
    articleElement.appendChild(articleTitle);
    
    articleList.appendChild(articleElement);
});