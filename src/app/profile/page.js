import BasicInfo from './components/BasicInfo';
import BioSection from './components/BioSection';
import ReviewsSection from './components/ReviewsSection';
import Services from './components/Services';
import SkillsSection from './components/SkillsSection';

const details = {
  name: 'John Doe',
  jobTitle: 'Web Developer',
  lastSeen: 'Last seen 2 hours ago',
  location: 'Accra, Ghana',
  image:
    'https://pictures-ghana.jijistatic.com/22729315_MjAwLTIwMC1kZTE0NDQ4Yzc2.jpg',
  dateCreated: 'Joined 2 years ago',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ',
};

const Profile = () => {
  return (
    <div className="min-h-screen my-20 screen-padding">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3 space-y-4">
          <BasicInfo details={details} />
          <BioSection />
          <SkillsSection />
          <ReviewsSection />
        </div>
        <div className="w-full lg:w-2/3">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Profile;
