import ImageSlider from '@/shared/components/ImageSlider';
import ReviewTile from '@/shared/components/ReviewTile';
import Rating from '@/shared/components/rating';
import axios from 'axios';
import ServiceInfo from './components/serviceInfo';

async function getService(id) {
  try {
    const res = await axios.get(
      `${process.env.LOCATION_BASED_SERVER_URL}/services/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching service:', error);
    throw error;
  }
}

const ServiceDetails = async ({ params: { id } }) => {
  const images = [
    'https://images.unsplash.com/photo-1681394346473-bfbfe6bb4e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1681484621384-ce731bee91cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1661536373688-46a59b8669b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
  ];

  const reviews = [
    {
      name: 'Abena Yellow',
      image:
        'https://images.unsplash.com/photo-1681484621384-ce731bee91cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review:
        'Lorem ipsum dolor sit amet ugtuy consectetur adipisicing elit. trwrdh',
    },
    {
      name: 'John Doe',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Won Xi',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Abena Yellow',
      image:
        'https://images.unsplash.com/photo-1681484621384-ce731bee91cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review:
        'Lorem ipsum dolor sit amet ugtuy consectetur adipisicing elit. trwrdh',
    },
    {
      name: 'John Doe',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Won Xi',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Abena Yellow',
      image:
        'https://images.unsplash.com/photo-1681484621384-ce731bee91cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review:
        'Lorem ipsum dolor sit amet ugtuy consectetur adipisicing elit. trwrdh',
    },
    {
      name: 'John Doe',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Won Xi',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Abena Yellow',
      image:
        'https://images.unsplash.com/photo-1681484621384-ce731bee91cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review:
        'Lorem ipsum dolor sit amet ugtuy consectetur adipisicing elit. trwrdh',
    },
    {
      name: 'John Doe',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Won Xi',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Abena Yellow',
      image:
        'https://images.unsplash.com/photo-1681484621384-ce731bee91cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review:
        'Lorem ipsum dolor sit amet ugtuy consectetur adipisicing elit. trwrdh',
    },
    {
      name: 'John Doe',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Won Xi',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Abena Yellow',
      image:
        'https://images.unsplash.com/photo-1681484621384-ce731bee91cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review:
        'Lorem ipsum dolor sit amet ugtuy consectetur adipisicing elit. trwrdh',
    },
    {
      name: 'John Doe',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Won Xi',
      image:
        'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  const { data } = await getService(id);
  const service = data;

  return (
    <div className="my-20 w-screen lg:w-full lg:screen-padding">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <div className="w-full flex flex-col gap-5">
            <ImageSlider images={service.images} />
            <ServiceInfo serviceInfo={service} />
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-4 mt-4 lg:mt-0">
          <div className="w-full bg-white lg:rounded-md lg:shadow-md">
            <div className="border-b flex gap-2 lg:px-2 px-2 py-2 sm:px-6 text-lg items-center font-semibold">
              <Rating rating={4.5} /> (112 Reviews)
            </div>
            <div className="lg:max-h-screen overflow-y-auto hide-scrollbar">
              {reviews.map((review, index) => (
                <ReviewTile key={index} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
