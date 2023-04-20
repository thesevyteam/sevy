import { HiCog } from 'react-icons/hi';

const LoadingIndicator = () => {
  return (
    <div className="loading-container">
      <div className="animate-spin text-primary">
        <HiCog style={{ width: 32, height: 32 }} />
      </div>
    </div>
  );
};

export default LoadingIndicator;
