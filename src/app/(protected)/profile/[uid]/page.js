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
export async function getUserServices(uid) {
  try {
    const response = await axios.get(
      `${process.env.LOCATION_BASED_SERVER_URL}/${uid}/services`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export default async function Profile({ params }) {
  const profileRes = await getUser(params.uid);
  const profile = profileRes.data;
  const servicesRes = await getUserServices(params.uid);
  const services = servicesRes.data;

  return (
    <div className="min-h-screen my-20 screen-padding">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3 space-y-4">
          <BasicInfo details={profile} />
          <BioSection />
          <SkillsSection />
          <ReviewsSection />
        </div>
        <div className="w-full lg:w-2/3">
          <Services services={services} />
        </div>
      </div>
    </div>
  );
}
