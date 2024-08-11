import React from "react";

const Checkout = ({
  cartItems,
  musteriID,
  toplamTutar,
  teslimatAdresi,
  odemeYontemi,
  siparisTarihi,
  handleOrder,
}) => {
  const handleConfirmOrder = () => {
    const newOrder = {
      MusteriID: musteriID,
      SiparisTarihi: siparisTarihi || new Date().toISOString(),
      SiparisDurumu: "Beklemede",
      ToplamTutar: toplamTutar,
      OdemeDurumu: "Beklemede",
      TeslimatAdresi: teslimatAdresi,
      OdemeYontemi: odemeYontemi,
    };

    handleOrder(newOrder);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        <div>
          <h3 className="text-xl font-semibold mb-4">Sipariş Özeti</h3>
          <p className="mb-2">
            <span className="font-bold">Müşteri ID:</span> {musteriID}
          </p>
          <p className="mb-2">
            <span className="font-bold">Sipariş Tarihi:</span>{" "}
            {siparisTarihi || new Date().toISOString()}
          </p>
          <p className="mb-2">
            <span className="font-bold">Toplam Tutar:</span> {toplamTutar} TL
          </p>
          <p className="mb-2">
            <span className="font-bold">Teslimat Adresi:</span> {teslimatAdresi}
          </p>
          <p className="mb-4">
            <span className="font-bold">Ödeme Yöntemi:</span> {odemeYontemi}
          </p>
          <h3 className="text-xl font-semibold mb-4">Sepetinizdeki Ürünler:</h3>
          <ul className="list-disc pl-5 mb-6">
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.productName} - {item.quantity} adet
              </li>
            ))}
          </ul>
          <button
            onClick={handleConfirmOrder}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Siparişi Onayla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
