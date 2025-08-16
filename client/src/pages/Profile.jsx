import { useSelector } from 'react-redux';
import { useRef } from 'react';

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-lg w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Profile</h1>

        <form className="flex flex-col gap-4">
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
          />

          {/* Profile Image */}
          <img
            onClick={() => fileRef.current.click()}
            src={currentUser?.avatar || "/default-avatar.png"}
            alt="profile"
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center border"
          />

          {/* User Info Inputs */}
          <input
            type="text"
            defaultValue={currentUser?.username || ""}
            placeholder="Username"
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            defaultValue={currentUser?.email || ""}
            placeholder="Email"
            className="border p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
          />

          {/* Update Button */}
          <button
            type="submit"
            className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-90"
          >
            Update
          </button>
        </form>

        {/* Bottom Actions */}
        <div className="flex justify-between mt-6 text-red-700 cursor-pointer">
          <span>Delete Account</span>
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
}
