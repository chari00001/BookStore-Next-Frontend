import React, { useState, useEffect } from "react";

const BookComments = ({ kitapID }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [sortOption, setSortOption] = useState("date");

  useEffect(() => {
    const fetchComments = async () => {
      const fetchedComments = [
        {
          id: 1,
          user: "User1",
          content: "This is a comment",
          date: "2024-08-01T12:00:00Z",
          replies: [],
          count: 10,
        },
        {
          id: 2,
          user: "User2",
          content: "This is another comment",
          date: "2024-08-02T14:30:00Z",
          replies: [
            {
              id: 3,
              user: "User3",
              content: "This is a reply",
              date: "2024-08-02T15:00:00Z",
            },
          ],
          count: 5,
        },
      ];

      setComments(fetchedComments);
    };

    fetchComments();
  }, []);

  const handleNewComment = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        id: comments.length + 1,
        user: "CurrentUser",
        content: newComment,
        date: new Date().toISOString(),
        replies: [],
        count: 0,
      };

      setComments([newCommentObject, ...comments]);
      setNewComment("");
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    const sortedComments = [...comments].sort((a, b) => {
      if (e.target.value === "count") {
        return b.count - a.count;
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });

    setComments(sortedComments);
  };

  return (
    <div className="max-w-[600px] mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Comments</h2>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          onClick={handleNewComment}
          className="mt-3 px-4 py-2 bg-[#6600ff] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Comment
        </button>
      </div>

      <div className="mb-6">
        <label htmlFor="sort" className="mr-2 font-semibold">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="date">Date</option>
          <option value="count">Count</option>
        </select>
      </div>

      <div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <div className="flex items-start mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <div className="text-sm font-semibold">{comment.user}</div>
                <div className="text-xs text-gray-500">
                  {new Date(comment.date).toLocaleString()}
                </div>
              </div>
            </div>
            <p className="ml-14 mb-2 text-gray-800">{comment.content}</p>
            {comment.replies.length > 0 && (
              <div className="ml-14 mt-4 border-l-2 border-gray-200 pl-4">
                {comment.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="mb-4 p-2 border border-gray-200 rounded-lg shadow-sm"
                  >
                    <div className="flex items-start mb-2">
                      <img
                        src="https://via.placeholder.com/30"
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <div className="text-sm font-semibold">
                          {reply.user}
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(reply.date).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <p className="ml-11 text-gray-700">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookComments;
