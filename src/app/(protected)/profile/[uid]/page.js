// import { getUser } from '@/api/auth';
import axios from 'axios';
import BasicInfo from './components/BasicInfo';
import BioSection from './components/BioSection';
import ReviewsSection from './components/ReviewsSection';
import Services from './components/Services';
import SkillsSection from './components/SkillsSection';

async function getUser(uid) {
  try {
    const response = await axios.get(
      `${process.env.AUTH_SERVER_URL}/users/${uid}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetchin OTP:', error);
    throw error;
  }
}

export default async function Profile({ params }) {
  const { data } = await getUser(params.uid);

  return (
    <div className="min-h-screen my-20 screen-padding">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3 space-y-4">
          <BasicInfo details={data} />
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
}
