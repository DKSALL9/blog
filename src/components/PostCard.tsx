import { Calendar, User } from 'lucide-react';
import type { Post } from '../lib/db';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-200">
      <img 
        src={post.image_url} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
        <div className="flex items-center space-x-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span className="text-sm">{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">
              {new Date(post.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
        <p className="text-gray-600 line-clamp-3">{post.content}</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
          Read More
        </button>
      </div>
    </article>
  );
}