import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const MyAccountDetails = () => {
  const [accounts, setAccounts] = useState([]);
  const [upiIds, setUpiIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [accountsRes, upiRes] = await Promise.all([
          axios.get("/api/accounts"),
          axios.get("/api/upi-ids")
        ]);
        setAccounts(accountsRes.data);
        setUpiIds(upiRes.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load account details.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Breadcrumb Header */}
      <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">DPauls Holidays</span> /
        <span className="ml-2">Bank Accounts Detail</span>
      </div>
      
            <div className="w-full m-6 flex justify-start">
        <Link to='/' className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800">
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-6 border-b pb-2 text-sky-600">
            Dreamviewer Yatra Bank Accounts Detail
          </h1>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <>
              {/* Bank Accounts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* {accounts.map((account, index) => ( */}
                  <div
                    // key={index}
                    className="flex items-start bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
                  >
                    <FaArrowRight className="mt-1 text-sky-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">account bankname</p>
                      <p className="text-sm text-gray-600">account address</p>
                      <p className="text-sm mt-1">Account No.: <span className="font-medium">account.accountNo</span></p>
                      <p className="text-sm">IFSC Code: <span className="font-medium">accound ifsc code</span></p>
                    </div>
                  </div>
                {/* ))} */}
              </div>

              {/* UPI IDs */}
              {upiIds.length > 0 && (
                <div className="mt-10 border-t pt-6">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">UPI IDs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* {upiIds.map((upi, index) => ( */}
                      <div
                        
                        className="bg-gray-50 p-4 rounded shadow-sm border border-gray-200"
                      >
                        <p className="font-medium text-sm text-gray-700">UPI ID:</p>
                        <p className="text-gray-900">upi</p>
                      </div>
                    {/* ))} */}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccountDetails;
