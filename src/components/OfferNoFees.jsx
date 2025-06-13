import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const OfferNoFees = () => {
  const cardData = [
    { title: "Promo Code", info: "NOFEES" },
    { title: "Validity", info: "30-Jun-2025" },
    { title: "Applicable On", info: "On Domestic And International " },
    { title: "Save Upto", info: "₹ 0" },
  ];
  return (
    <div className="bg-amber-50 overflow-hidden">
      {/* Breadcrumb Header */}
      <div className="bg-sky-600 h-12 flex items-center px-10 text-white text-sm font-medium shadow">
        <span className="mr-2">Dreamviewer Yatra Holidays</span> /
        <span className="ml-2">Dreamviewer Yatra Offers</span>
      </div>
      {/*button for back */}
      <div className="w-full m-6 flex justify-start">
        <Link
          to="/offers&deals"
          className="flex items-center gap-2 text-base sm:text-lg text-sky-600 hover:text-sky-800"
        >
          <GoArrowLeft className="text-xl" />
          Back
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="w-72 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <p className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
              {data.title}
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              {data.info}
            </p>
          </div>
        ))}
      </div>

<div className="flex mb-6 flex-col gap-8 p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl shadow-lg max-w-2xl mx-auto">
  <div className="flex flex-col gap-4">
    <h1 className="text-3xl font-bold text-accent tracking-tight">About The Offer</h1>
    <p className="text-base text-gray-700 leading-relaxed">
      Use promo code <span className="font-semibold text-accent">NOFEES</span> and save ₹200 per passenger per sector as Convenience Fees.
    </p>
  </div>

  <div className="flex flex-col gap-4 mb">
    <h1 className="text-3xl font-bold text-accent tracking-tight">Terms & Conditions</h1>
    <p className="text-base text-gray-700 leading-relaxed">
      Use promo code <span className="font-semibold text-accent">NOFEES</span> and save ₹200 per passenger per sector as Convenience Fees. Congratulations! Zero Convenience Fee Coupon applied successfully. You have saved ₹_____. 
      <br /><br />
      <span className="font-medium">Examples:</span>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>1 Adult - One Way: ₹200</li>
        <li>1 Adult - Round Trip: ₹400 (200 × 2)</li>
        <li>2 Adults - One Way: ₹400 (200 × 2)</li>
        <li>2 Adults - Round Trip: ₹800 (200 × 2 × 2)</li>
      </ul>
    </p>
  </div>
</div>
    </div>
  );
};

export default OfferNoFees;
