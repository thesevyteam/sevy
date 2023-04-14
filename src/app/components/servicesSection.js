import ServiceCard from '@/shared/components/serviceCard';

const services = [
  {
    id: 1,
    service: 'Electrical',
    icon: '/assets/icons/electrical.svg',
  },
  {
    id: 2,
    service: 'Plumbing',
    icon: '/assets/icons/plumbing.svg',
  },
  {
    id: 3,
    service: 'Moving',
    icon: '/assets/icons/moving.svg',
  },
  {
    id: 4,
    service: 'Cleaning',
    icon: '/assets/icons/cleaning.svg',
  },
  {
    id: 5,
    service: 'Painting',
    icon: '/assets/icons/painting.svg',
  },
  {
    id: 6,
    service: 'Laundry',
    icon: '/assets/icons/laundry.svg',
  },
  {
    id: 7,
    service: 'Carpentry',
    icon: '/assets/icons/carpentry.svg',
  },
  {
    id: 8,
    service: 'Gardening',
    icon: '/assets/icons/gardening.svg',
  },
  {
    id: 9,
    service: 'Appliances',
    icon: '/assets/icons/appliances.svg',
  },
  {
    id: 10,
    service: 'Locksmithing',
    icon: '/assets/icons/locksmithing.svg',
  },
  {
    id: 11,
    service: 'Masonry',
    icon: '/assets/icons/masonry.svg',
  },
  {
    id: 12,
    service: 'Pool',
    icon: '/assets/icons/pool.svg',
  },
  {
    id: 13,
    service: 'Garbage',
    icon: '/assets/icons/garbage.svg',
  },
  {
    id: 14,
    service: 'Other',
    icon: '/assets/icons/other.svg',
  },
];

function ServicesSection() {
  return (
    <div className="screen-padding">
      <h3 className="text-xl font-semibold mt-10 mb-4">Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service.service}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
