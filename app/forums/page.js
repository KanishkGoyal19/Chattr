import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const topics = [
  {
      id: 1,
      text: "Gaming",
      img: "images/gaming.jpg",
      desc: "Discuss all things gaming related here.",
      slug: "gaming-stuff-discussion"
  },
  {
      id: 2,
      text: "Technology",
      img: "images/technology.jpg",
      desc: "Explore the latest in tech, gadgets, and software.",
      slug: "technologies-discussion"
  },
  {
      id: 3,
      text: "Movies & TV",
      img: "images/movies.jpg",
      desc: "Share your thoughts on movies, TV shows, and streaming.",
      slug: "movies-discussion"
  },
  {
      id: 4,
      text: "Music",
      img: "images/music.jpg",
      desc: "Talk about your favorite artists, albums, and genres.",
      slug: "musics-discussion"
  },
  {
      id: 5,
      text: "Sports",
      img: "images/sports.jpg",
      desc: "Dive into discussions about your favorite sports and teams.",
      slug: "sports-discussion"
  },
  {
      id: 6,
      text: "Books & Literature",
      img: "images/books.jpg",
      desc: "Discuss novels, poetry, and everything in the literary world.",
      slug: "book-discussion"
  },
  {
      id: 7,
      text: "Food & Recipes",
      img: "images/food.jpg",
      desc: "Share recipes, cooking tips, and food recommendations.",
      slug: "food-discussion"
  },
  {
      id: 8,
      text: "Travel",
      img: "images/travel.jpg",
      desc: "Exchange travel tips and share your adventures.",
      slug: "tourism-discussion"
  },
  {
      id: 9,
      text: "Current Events",
      img: "images/news.jpg",
      desc: "Discuss the latest news and happenings around the world.",
      slug: "news-discussion"
  }
];

const Forums = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Discussion Forums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={`/forums/${topic.id}`} // Dynamic routing handled by Next.js
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            <img
              src={topic.img}
              alt={topic.text}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
                {topic.text}
              </h2>
              <p className="text-gray-600 mt-2">{topic.desc}</p>
              {/* Button */}
              <Button
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                type="button"
              >
                Open Discussion
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Forums;
