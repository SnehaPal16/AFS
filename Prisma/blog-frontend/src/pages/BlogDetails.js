import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:4545/api/blogs/${id}`)
      .then((res) => {
        setBlog(res.data.data);
        setLikes(res.data.data.likes || 0);
        setDislikes(res.data.data.dislikes || 0);
      })
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  const handleLike = () => {
    axios
      .post(`http://localhost:4545/api/like/${id}`)
      .then(() => setLikes((prev) => prev + 1))
      .catch((err) => console.error("Error liking blog:", err));
  };

  const handleDislike = () => {
    axios
      .post(`http://localhost:4545/api/blogs/${id}/dislike`)
      .then(() => setDislikes((prev) => prev + 1))
      .catch((err) => console.error("Error disliking blog:", err));
  };

  if (!blog) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{blog.Title}</h1>
      <p className="text-gray-600 mb-4">By Author ID: {blog.authorId}</p>
      <p className="text-lg mb-4">{blog.description}</p>

      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleLike}
        >
          Like ({likes})
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleDislike}
        >
          Dislike ({dislikes})
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;
