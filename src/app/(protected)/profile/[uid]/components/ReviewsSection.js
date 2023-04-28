import ReviewTile from '@/shared/components/ReviewTile';
import Rating from '@/shared/components/rating';

const ReviewsSection = () => {
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

  return (
    <div className="w-full bg-white lg:rounded-md lg:shadow-md hover:shadow-lg">
      <div className="border-b flex gap-2 lg:px-2 px-2 py-2 sm:px-6 text-lg items-center font-semibold">
        <Rating rating={4.5} /> (112 Reviews)
      </div>
      <div className="lg:max-h-screen hide-scrollbar">
        {reviews.map((review, index) => (
          <ReviewTile key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
