const blog = [
	{
		id: 1,
		blogTitle: "Get Started With Fitness",
		datePosted: "2022-01-01",
		category: "Fitness",
		description: "All about fitness",
	},
	{
		id: 2,
		blogTitle: "How to Build A Healthy Lifestyle",
		datePosted: "2022-01-01",
		category: "Lifestyle",
		description: "All about Healthy Lifestyle",
	},
	{
		id: 3,
		blogTitle: "Get Started With Keto Diet",
		datePosted: "2022-01-01",
		category: "Diet",
		description: "All about Keto Diet",
	},
	{
		id: 4,
		blogTitle: "Get Started With Paleo Diet",
		datePosted: "2022-01-01",
		category: "Diet",
		description: "All about Paleo Diet",
	},
	{
		id: 5,
		blogTitle: "Get Started With Mediteranean Diet",
		datePosted: "2022-01-01",
		category: "Diet",
		description: "All about Mediteranean Diet",
	},
];

blog.forEach(function print(item) {
	console.log(item.blogTitle);
});

blog.forEach(function createBlog(item) {
	$(".blog-content").append(`
    <div class="blog-content-content">
    <a href="./blog-details.html?id=${item.id}">
        <h1>${item.blogTitle}</h1>
        <img src="./Images/blog-img-${item.id}.jpg" alt="" class="blog-img" />
        <p> Date Posted : ${item.datePosted}</p>
        <p> Category : ${item.category}</p>
		<p> Description : ${item.description}</p>
    </a>
    </div>
    `);
});
