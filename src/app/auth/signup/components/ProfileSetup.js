'use client';

function ProfileSetup() {
  const handleSubmit = (e) => {};

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <p className="text-lg font-bold tracking-wide">Set Up Your Profile</p>
      <button
        type="submit"
        className="w-full bg-sevy-green text-white rounded-lg py-2"
      >
        Continue
      </button>
    </form>
  );
}

export default ProfileSetup;
