import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";

const OffersDeals = () => {
  return (
    <div className="overflow-hidden">
      {/* Breadcrumb Header */}
      <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra Holidays</span> /
        <span className="ml-2">Dreamviewer Yatra Offers</span>
      </div>
      {/*button for back */}
      <div className="w-full m-6 flex justify-start">
        <Link
          to="/"
          className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800"
        >
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>
      <div className="bg-amber-100 border-1 border-gray-100">
        <div className="flex  justify-center items-center">
          <button className="btn btn-accent m-2">Domestic</button>
          <button className="btn btn-active m-2">International</button>
        </div>
        {/*Card */}
        <div className="card w-full max-w-md mx-auto bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden my-10">
          <div className="card-body p-6">
            <h2 className="text-xl font-semibold text-accent-400 mb-2">
              🎉 Flight Promo
            </h2>
            <p className="text-gray-700 mb-4">
              Congratulations!{" "}
              <span className="font-medium text-green-600">
                Zero Convenience Fee Coupon
              </span>{" "}
              applied successfully.
            </p>

            <div className="flex items-center justify-between mt-4 border-t pt-4">
              <div>
                <p className="text-sm font-bold text-gray-800">PROMO CODE:</p>
                <p className="text-xs text-red-500 mt-1">
                  Validity: 30 Jun 2025
                </p>
              </div>
              <Link
                to="/nofees"
                className="btn btn-accent btn-sm px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default OffersDeals;
