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
    <div>
      <form className="grid py-40 justify-center items-center ">
        <div className="  flex items-center space-x-6">
          <label className="text-blue-500 block text-2xl m-2 ">
            Sale or Rent
          </label>
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
          <label className="text-blue-500 block text-2xl m-2">
            Days Listed
          </label>
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
          <label className="text-blue-500 block text-2xl m-2">Bed Rooms</label>
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
          <label className="text-blue-500 block text-2xl m-2">Has Photos</label>
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
          <label className="text-blue-500 block text-2xl m-2">Home type</label>
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

        <div className="flex items-center">
          <label className="text-blue-500 block text-2xl m-2 ">Keywords</label>
          <input
            value={formData.keywords}
            onChange={handleChange}
            className="border"
            name="keywords"
          />
          <label className="text-blue-500 block text-2xl m-2">Bathrooms</label>
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
          <label className="text-blue-500 block text-2xl m-2">Sqft</label>
          <select value={formData.sqft} onChange={handleChange} name="sqft">
            <option>1000+</option>
            <option>1200+</option>
            <option>1500+</option>
            <option>2000+</option>
            <option>Any</option>
          </select>
          <label className="text-blue-500 block text-2xl m-2">Open House</label>
          <input
            value={formData.open_house}
            onChange={handleChange}
            name="open_house"
            type="checkbox"
          />
          <button
            className="bg-purple-300 p-2 m-4  rounded-lg"
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
<div>
  {state.isloading
    ? "Loading "
    : state.data.results.map((d) => {
        return (
          <div key={d.slug}>
            {d.title}
            <img height={40} width={40} src={d.photo_main} />
            {d.address}
          </div>
        );
      })}
      <div>
        <p>wow</p>
      </div>
</div>;
