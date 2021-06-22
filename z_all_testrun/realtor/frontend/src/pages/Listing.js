import React, { useState } from "react";

function Listing() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [formData, setFormData] = useState({
    sale_type: "For Sale",
    price: "$0+",
    bedrooms: "0+",
    home_type: "House",
    bathrooms: "0+",
    sqft: "1000+",
    days_listed: "1 or less",
    has_photos: "1+",
    open_house: "false",
    keywords: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex justify-center">
      <form className="md:grid grid-cols-5 py-60 gap-10">
        <div>
          <label className="text-blue-500 block text-2xl ">Sale or Rent</label>
          <select
            value={formData.sale_type}
            className="rounded boder"
            name="sale_type"
            onChange={handleChange}
          >
            <option>$0+</option>
            <option>$200,000+</option>
            <option>$400,000+</option>
            <option>$600,000+</option>
            <option>$800,000+</option>
            <option>$1,000,000+</option>
            <option>$1,200,000+</option>
            <option>$1,500,000+</option>
            <option>Any</option>
          </select>
        </div>
        <div>
          <label className="text-blue-500 block text-2xl">Days Listed</label>
          <select
            value={formData.days_listed}
            onChange={handleChange}
            name="days_listed"
          >
            <option>1 of less</option>
            <option>2 of less</option>
            <option>5 of less</option>
            <option>10 of less</option>
            <option>20 of less</option>
            <option>Any</option>
          </select>
        </div>
        <div>
          <label className="text-blue-500 block text-2xl">Bed Rooms</label>
          <select
            value={formData.bedrooms}
            onChange={handleChange}
            name="bedrooms"
          >
            <option>0+</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
            <option>5+</option>
          </select>
        </div>
        <div>
          <label className="text-blue-500 block text-2xl">Has Photos</label>
          <select
            value={formData.has_photos}
            onChange={handleChange}
            name="has_photos"
          >
            <option>1+</option>
            <option>3+</option>
            <option>5+</option>
            <option>10+</option>
            <option>15+</option>
          </select>
        </div>
        <div>
          <label className="text-blue-500 block text-2xl">Home type</label>
          <select
            value={formData.home_type}
            onChange={handleChange}
            name="home_type"
          >
            <option>House</option>
            <option>Condo</option>
            <option>Townhouse</option>
          </select>
        </div>
        <div>
          <label className="text-blue-500 block text-2xl ">Keywords</label>
          <input
            value={formData.keywords}
            onChange={handleChange}
            className="border"
            name="keywords"
          />
        </div>
        <div>
          <label className="text-blue-500 block text-2xl">Bathrooms</label>
          <select
            value={formData.bathrooms}
            onChange={handleChange}
            name="bathrooms"
          >
            <option>0+</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
        </div>
        <div>
          <label className="text-blue-500 block text-2xl">Sqft</label>
          <select value={formData.sqft} onChange={handleChange} name="sqft">
            <option>1000+</option>
            <option>1200+</option>
            <option>1500+</option>
            <option>2000+</option>
            <option>Any</option>
          </select>
        </div>
        <div>
          <label className="text-blue-500 block text-2xl">Open House</label>
          <input
            type="checkbox"
            value={formData.open_house}
            onChange={handleChange}
            name="open_house"
          />
        </div>
        <div>
          <button
            className="bg-purple-300 rounded-lg hover:text-white hover:bg-purple-400 p-2"
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Listing;
