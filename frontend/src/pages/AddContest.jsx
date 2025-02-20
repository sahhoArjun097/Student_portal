import axios from 'axios';
import  { useState } from 'react';

function AddContest() {
  const [contest, setContest] = useState({
    title: '',
    description: '',
    duration: '',
    registrationDate: '',
    registrationLink: '',
    contestImage: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContest((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setContest((prev) => ({ ...prev, contestImage: file }));

    // Preview Image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', contest.title);
    formData.append('description', contest.description);
    formData.append('duration', contest.duration);
    formData.append('registrationDate', contest.registrationDate);
    formData.append('registrationLink', contest.registrationLink);
    formData.append('contestImage', contest.contestImage);

    try {
      const res = await axios.post('http://localhost:4000/api/v1/contest/contestinfo', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      console.log('Contest created:', res.data);
      alert("contest created")
      
      // Reset form after submission
      setContest({
        title: '',
        description: '',
        duration: '',
        registrationDate: '',
        registrationLink: '',
        contestImage: null,
      });

      setImagePreview(null);
    } catch (error) {
      console.error('Error creating contest:', error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center p-4 bg-gray-500">
      <div className="w-[50%] bg-gray-800 p-7 flex flex-col items-center">
        <h2 className="text-2xl text-white font-bold">Create Contest</h2>
        
        <form onSubmit={handleSubmit} className="flex w-full p-7 flex-col gap-5">
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label className="text-[#717171] font-semibold text-sm">Enter the Title</label>
            <input
              type="text"
              name="title"
              value={contest.title}
              onChange={handleChange}
              placeholder="Contest Title"
              className="w-full p-3 rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-[#e81cff]"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-[#717171] font-semibold text-sm">Description</label>
            <textarea
              name="description"
              value={contest.description}
              onChange={handleChange}
              placeholder="Contest Description"
              rows="4"
              className="w-full p-3 rounded-lg bg-transparent border border-[#414141] text-white resize-none focus:outline-none focus:border-[#e81cff]"
              required
            ></textarea>
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-1">
            <label className="text-[#717171] font-semibold text-sm">Duration (in Days)</label>
            <input
              type="number"
              name="duration"
              value={contest.duration}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-[#e81cff]"
              required
            />
          </div>

          {/* Registration Date */}
          <div className="flex flex-col gap-1">
            <label className="text-[#717171] font-semibold text-sm">Registration Date</label>
            <input
              type="date"
              name="registrationDate"
              value={contest.registrationDate}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-[#e81cff]"
              required
            />
          </div>

          {/* Registration Link */}
          <div className="flex flex-col gap-1">
            <label className="text-[#717171] font-semibold text-sm">Registration Link</label>
            <input
              type="url"
              name="registrationLink"
              value={contest.registrationLink}
              onChange={handleChange}
              placeholder="https://example.com/register"
              className="w-full p-3 rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-[#e81cff]"
              required
            />
          </div>


          {/* Image Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-[#717171] font-semibold text-sm">Upload Contest Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none"
              required
            />
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mt-4">
              <p className="text-white text-sm">Image Preview:</p>
              <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 p-3 bg-[#e81cff] text-white font-semibold rounded-lg hover:bg-[#c61cd8] transition"
          >
            Create Contest
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContest;
