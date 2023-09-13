import React from 'react';
import { RiArrowDropRightLine, RiArrowRightLine, RiClockwiseLine, RiTimeLine } from 'react-icons/ri';
const NewsSection = () => {
    const mainNews = [
        {
            title: "Breaking News: Team A Wins the Championship",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget urna auctor, feugiat urna id, commodo enim.",
            imageUrl: 'https://i.pinimg.com/236x/2f/50/c2/2f50c23847095b37f1c11853c151b989.jpg'
        },
        {
            title: "Player B Signs New Contract",
            content: "Nunc ullamcorper velit ut facilisis. Quisque vel sollicitudin enim. Pellentesque commodo tellus non odio bibendum, in fringilla metus auctor.",
            imageUrl: "https://i.pinimg.com/236x/2f/50/c2/2f50c23847095b37f1c11853c151b989.jpg"
        },
        {
            title: "Player B Signs New Contract",
            content: "Nunc ullamcorper velit ut facilisis. Quisque vel sollicitudin enim. Pellentesque commodo tellus non odio bibendum, in fringilla metus auctor.",
            imageUrl: "https://i.pinimg.com/236x/2f/50/c2/2f50c23847095b37f1c11853c151b989.jpg"
        },
        {
            title: "Player B Signs New Contract",
            content: "Nunc ullamcorper velit ut facilisis. Quisque vel sollicitudin enim. Pellentesque commodo tellus non odio bibendum, in fringilla metus auctor.",
            imageUrl: "https://i.pinimg.com/236x/2f/50/c2/2f50c23847095b37f1c11853c151b989.jpg"
        },
        {
            title: "Player B Signs New Contract",
            content: "Nunc ullamcorper velit ut facilisis. Quisque vel sollicitudin enim. Pellentesque commodo tellus non odio bibendum, in fringilla metus auctor.",
            imageUrl: "https://i.pinimg.com/236x/2f/50/c2/2f50c23847095b37f1c11853c151b989.jpg"
        },
        {
            title: "Player B Signs New Contract",
            content: "Nunc ullamcorper velit ut facilisis. Quisque vel sollicitudin enim. Pellentesque commodo tellus non odio bibendum, in fringilla metus auctor.",
            imageUrl: "https://i.pinimg.com/236x/2f/50/c2/2f50c23847095b37f1c11853c151b989.jpg"
        },
        // Add more main news articles
    ];

    const sidebarNews = [
        {
            title: "Upcoming Match: Team C vs. Team D",
            content: "Sed ac ipsum tristique, posuere neque nec, feugiat purus. Nullam eu augue ut metus dapibus pharetra.",
            imageUrl: "https://i.pinimg.com/236x/2f/50/c2/2f50c23847095b37f1c11853c151b989.jpg"
        },
        {
            title: "Injury Update: Player X Out for Two Weeks",
            content: "Nam id eros sit amet turpis fringilla blandit. Sed ut varius nisi. Suspendisse at est orci.",
            imageUrl: "https://i.pinimg.com/236x/2f/50/c2/2f50c23847095b37f1c11853c151b989.jpg"
        },
        // Add more sidebar news articles
    ];

    return (
        <div className="flex container mx-auto px-3">
            <div className="w-3/4 p-4">
                <h2 className="text-4xl text-[#181818] font-semibold mb-2">Latest News</h2>
                <div className="bg-white p-4 rounded-lg shadow grid">

                    <div className='TopStory'>
                        <div className="mb-4 main">
                            <div className='h-[400px] w-full my-3 '>
                                <img src='https://i.pinimg.com/236x/ee/d5/58/eed5581581c067a53d9892635d24f9db.jpg' className="mb-2 rounded-lg shadow w-full h-full object-cover object-top" />
                            </div>
                            <span className='p-2 border-[1px] border-gray-300 rounded-lg my-3'>W. McKennie</span>
                            <h3 className="text-2xl font-bold">Juventus drop asking price for USMNT star McKennie</h3>
                            <p className="text-gray-600">Juventus have reportedly dropped their asking price for Weston McKennie, but there is no guarantee that</p>
                            <div className='flex justify-between items-center font-semibold'>
                                <span className='flex gap-3 items-center'><RiTimeLine /> 32m</span>
                                <span className='flex gap-3 items-center text-blue-600'>Full Story <RiArrowRightLine /></span>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-3'>
                        {mainNews.map((article, index) => (
                            <div key={index} className="mb-4 ">
                                <img src={article.imageUrl} alt={article.title} className="mb-2 rounded-lg shadow" width={'400px'} />
                                <h3 className="text-lg font-medium">{article.title}</h3>
                                <p className="text-gray-600">{article.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-1/4 p-4">
                <div className="bg-gray-200 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Sidebar News</h2>
                    {sidebarNews.map((article, index) => (
                        <div key={index} className="mb-4">
                            <img src={article.imageUrl} alt={article.title} className="mb-2 rounded-lg shadow" />
                            <h3 className="text-lg text-[#181818] font-medium">{article.title}</h3>
                            <p className="text-gray-600">{article.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
