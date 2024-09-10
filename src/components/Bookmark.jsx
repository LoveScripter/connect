import React from "react";

function Bookmark({ title, description, imageUrl }) {
  return (
    <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg p-4">
      <img
        src={imageUrl || "https://via.placeholder.com/50"}
        alt="Thumbnail"
        className="w-12 h-12 rounded-md mr-4"
      />
      <div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function App() {
  const bookmarks = [
    {
      title: "Bookmark 1",
      description: "This is the first bookmarked content.",
      imageUrl: "https://via.placeholder.com/50"
    },
    {
      title: "Bookmark 2",
      description: "This is the second bookmarked content.",
      imageUrl: "https://via.placeholder.com/50"
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Bookmarks</h1>
        {bookmarks.length > 0 ? (
          <div className="space-y-4">
            {bookmarks.map((bookmark, index) => (
              <Bookmark
                key={index}
                title={bookmark.title}
                description={bookmark.description}
                imageUrl={bookmark.imageUrl}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-6">No bookmarks yet.</div>
        )}
      </div>
    </div>
  );
}

export default App;
