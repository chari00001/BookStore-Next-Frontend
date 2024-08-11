import React from "react";

const Orders = () => {
  const orders = [
    {
      id: 1,
      orderNumber: "12345",
      date: "2024-08-11",
      items: [
        { name: "Kitap 1", price: 50 },
        { name: "Kitap 2", price: 30 },
      ],
      total: 80,
    },
    {
      id: 2,
      orderNumber: "67890",
      date: "2024-08-10",
      items: [
        { name: "Kitap 3", price: 60 },
        { name: "Kitap 4", price: 40 },
      ],
      total: 100,
    },
  ];

  return (
    <div className="p-4 mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Order #{order.orderNumber}
              </h3>
              <p className="text-gray-600">Date: {order.date}</p>
              <div className="mt-2">
                <h4 className="font-semibold">Items:</h4>
                <ul className="list-disc list-inside ml-4">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item.name} - ${item.price}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-2 font-bold">Total: ${order.total}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
