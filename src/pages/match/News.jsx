import React from 'react'



const NewsItem = ({ imageSrc, title, content }) => {
    return (
        <div className="flex p-4 border border-gray-200 rounded-lg shadow-md">
            {/* Left side: News Image */}
            <div className="w-1/4">
                <img src={imageSrc} alt={title} className="h-32 w-full object-cover" />
            </div>

            {/* Right side: News Text */}
            <div className="w-3/4 p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600">{content}</p>
            </div>
        </div>
    );
};



const News = ({ data }) => {
    const newsData = [
        {
            id: 1,
            imageSrc: `https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSpNWC8pbqyPBG_GSAGQTgCPKJDgKKHwODg34nbnIL6U5xykRk4wvNAxCHUx5h_gWgDdIwo1nKykp3kOfI`,
            title: 'Breaking News 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            imageSrc: `https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSpNWC8pbqyPBG_GSAGQTgCPKJDgKKHwODg34nbnIL6U5xykRk4wvNAxCHUx5h_gWgDdIwo1nKykp3kOfI`,
            title: 'Breaking News 2',
            content: 'Pellentesque in ipsum id orci porta dapibus.',
        },
        // Add more news items as needed
    ];

    return (
        <div>
            {newsData.map((news) => (<NewsItem
                key={news.id}
                imageSrc={news.imageSrc}
                title={news.title}
                content={news.content}
            />
            ))}
        </div>
    )
}

export default News