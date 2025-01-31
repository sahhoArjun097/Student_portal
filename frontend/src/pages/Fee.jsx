import { useContext } from "react"
import { Context } from "../main"


const Fee = () => {
    const { darkMode } = useContext(Context)
  const feeDetails = {
    totalFee: 5000,
    paidAmount: 3000,
    remainingFee: 2000,
  };

  const paymentHistory = [
    {
      date: "2025-01-10",
      amountPaid: 1000,
      remainingBalance: 4000,
    },
    {
      date: "2025-01-20",
      amountPaid: 2000,
      remainingBalance: 2000,
    },
  ];

  return (
    <>
    <div className={`w-full min-h-screen ${darkMode ? "bg-gray-900":"bg-white"} text-white px-6 py-12`}>
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-400">💰 Fee Details</h1>

      <div className="w-full max-w-5xl mx-auto">
        {/* Fee Summary */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Fee Summary</h2>
          <div className="flex justify-between mb-3">
            <p>Total Fee:</p>
            <p className="font-semibold">{feeDetails.totalFee} INR</p>
          </div>
          <div className="flex justify-between mb-3">
            <p>Paid Amount:</p>
            <p className="font-semibold">{feeDetails.paidAmount} INR</p>
          </div>
          <div className="flex justify-between mb-3">
            <p>Remaining Fee:</p>
            <p className="font-semibold">{feeDetails.remainingFee} INR</p>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment History</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="text-left py-2 px-4">Date</th>
                <th className="text-left py-2 px-4">Amount Paid</th>
                <th className="text-left py-2 px-4">Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                  <tr key={index} className="border-t border-gray-700">
                  <td className="py-2 px-4">{payment.date}</td>
                  <td className="py-2 px-4">{payment.amountPaid} INR</td>
                  <td className="py-2 px-4">{payment.remainingBalance} INR</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Options */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg">Remaining Fee:</p>
            <p className="text-lg font-semibold">{feeDetails.remainingFee} INR</p>
          </div>
          <button className="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300">
            Pay Now
          </button>
        </div>
      </div>
    </div>
    <hr className={` w-full h-[1px] ${darkMode ? "text-white" : "text-black"}`} />
</>
  );
};

export default Fee;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Fee = () => {
//   // Define states to hold the fee data and payment history
//   const [feeDetails, setFeeDetails] = useState({
//     totalFee: 0,
//     paidAmount: 0,
//     remainingFee: 0,
//   });
//   const [paymentHistory, setPaymentHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch fee data and payment history from backend
//   useEffect(() => {
//     const fetchFeeData = async () => {
//       try {
//         const response = await axios.get("/api/fee-details"); // Adjust URL accordingly
//         const data = response.data;

//         setFeeDetails({
//           totalFee: data.totalFee,
//           paidAmount: data.paidAmount,
//           remainingFee: data.remainingFee,
//         });
//         setPaymentHistory(data.paymentHistory);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data from the server");
//         setLoading(false);
//       }
//     };

//     fetchFeeData();
//   }, []);

//   // Handle loading state
//   if (loading) {
//     return (
//       <div className="w-full min-h-screen flex justify-center items-center">
//         <p className="text-white text-xl">Loading fee details...</p>
//       </div>
//     );
//   }

//   // Handle error state
//   if (error) {
//     return (
//       <div className="w-full min-h-screen flex justify-center items-center">
//         <p className="text-red-500 text-xl">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen bg-gray-900 text-white px-6 py-12">
//       <h1 className="text-3xl font-bold text-center mb-8 text-teal-400">💰 Fee Details</h1>

//       <div className="w-full max-w-5xl mx-auto">
//         {/* Fee Summary */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//           <h2 className="text-xl font-semibold mb-4">Fee Summary</h2>
//           <div className="flex justify-between mb-3">
//             <p>Total Fee:</p>
//             <p className="font-semibold">{feeDetails.totalFee} INR</p>
//           </div>
//           <div className="flex justify-between mb-3">
//             <p>Paid Amount:</p>
//             <p className="font-semibold">{feeDetails.paidAmount} INR</p>
//           </div>
//           <div className="flex justify-between mb-3">
//             <p>Remaining Fee:</p>
//             <p className="font-semibold">{feeDetails.remainingFee} INR</p>
//           </div>
//         </div>

//         {/* Payment History */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
//           <h2 className="text-xl font-semibold mb-4">Payment History</h2>
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr>
//                 <th className="text-left py-2 px-4">Date</th>
//                 <th className="text-left py-2 px-4">Amount Paid</th>
//                 <th className="text-left py-2 px-4">Remaining Balance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paymentHistory.length === 0 ? (
//                 <tr>
//                   <td colSpan={3} className="text-center py-2 px-4 text-gray-500">
//                     No payment history available.
//                   </td>
//                 </tr>
//               ) : (
//                 paymentHistory.map((payment, index) => (
//                   <tr key={index} className="border-t border-gray-700">
//                     <td className="py-2 px-4">{payment.date}</td>
//                     <td className="py-2 px-4">{payment.amountPaid} INR</td>
//                     <td className="py-2 px-4">{payment.remainingBalance} INR</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Make Payment Section */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-lg">Remaining Fee:</p>
//             <p className="text-lg font-semibold">{feeDetails.remainingFee} INR</p>
//           </div>
//           <button className="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300">
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fee;
