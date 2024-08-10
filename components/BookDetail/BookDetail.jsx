import React from "react";

const BookDetail = ({ book, author, category, publisher, handleAddToCart }) => {
  return (
    <div className="max-w-[1080px] mx-auto p-4">
      <div className="bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="h-64 md:h-auto flex items-center justify-center">
              <img
                src={book.image || "https://via.placeholder.com/1000x1000"}
                alt={book.baslik}
                className="object-cover h-full w-full rounded-xl"
              />
            </div>
          </div>
          {/* Details Section */}
          <div className="md:w-2/3 p-4">
            <h1 className="text-3xl font-bold mb-2">{book.baslik}</h1>
            <p className="text-2xl font-semibold text-green-500 mb-4">
              <strong>Price:</strong> ${book.fiyat}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Yazar: </strong> {author.ad} {author.soyad}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Kategori: </strong> {category.kategoriAdi}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Yayınevi: </strong> {publisher.yayineviAdi}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>ISBN:</strong> {book.ISBN}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Publication Date:</strong> {book.yayinTarihi}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Description:</strong> {book.aciklama}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Pages:</strong> {book.sayfa}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Stock:</strong> {book.stok}
            </p>
            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                Add to Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
                Buy Now
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
                Like
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200">
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
