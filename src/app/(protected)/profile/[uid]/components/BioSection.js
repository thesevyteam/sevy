const BioSection = ({ bio }) => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">About</h3>
      <p>{bio}</p>
    </div>
  );
};

export default BioSection;
