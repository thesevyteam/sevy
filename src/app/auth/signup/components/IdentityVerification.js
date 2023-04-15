'use client';

function IdentityVerification() {
  const handleSubmit = (e) => {};

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <p className="text-lg font-bold tracking-wide">Verify Your Identity</p>
      <button
        type="submit"
        className="w-full bg-sevy-green text-white rounded-lg py-2"
      >
        Continue
      </button>
    </form>
  );
}

export default IdentityVerification;
