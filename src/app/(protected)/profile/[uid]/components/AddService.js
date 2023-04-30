import { addService } from '@/api/services';
import ImageSlider from '@/shared/components/ImageSlider';
import LoadingIndicator from '@/shared/components/LoadingIndicator';
import SelectField from '@/shared/components/SelectField';
import Button from '@/shared/components/button';
import { allCategories } from '@/utils/categories';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import { FaImages } from 'react-icons/fa';
import { MdAddTask } from 'react-icons/md';

const AddService = ({ closeModal }) => {
  const [category, setCategory] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const imageInputRef = useRef();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      if (images.length < 3) {
        alert('Please select at least 3 images');
        return;
      }
      if (images.length > 8) {
        alert('Please select at most 8 images');
        return;
      }
      if (
        category === '' ||
        serviceName === '' ||
        description === '' ||
        duration === 0 ||
        price === 0
      ) {
        alert('Please fill all fields');
        return;
      }
      if (duration < 0) {
        alert('Duration cannot be negative');
        return;
      }
      if (price < 0) {
        alert('Price cannot be negative');
        return;
      }
      setLoading(true);
      const formData = new FormData();
      images.forEach((image) => {
        formData.append('service_images', image);
      });
      formData.append('category', category.value);
      formData.append('serviceName', serviceName);
      formData.append('description', description);
      formData.append('duration', duration);
      formData.append('price', price);
      const res = await addService(formData);
      if (res !== null) {
        window.location.reload();
        closeModal();
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).slice(0, 8);
      setImages(newImages);
    }
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
  };

  return (
    <div className="flex flex-col gap-4 w-screen lg:w-35vw h-screen lg:h-full lg:max-h-90vh pb-20 md:p-0 p-2 sm:p-3 lg:p-0 hide-scrollbar">
      {loading ? (
        <div className="flex items-center justify-center h-32">
          <LoadingIndicator />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Add Service</h2>
            <button onClick={closeModal}>
              <BsXLg style={{ width: 20, height: 20 }} />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="label" htmlFor="category">
                Service Category
              </label>
              <SelectField
                id="emergency_category"
                value={category}
                onChange={handleCategoryChange}
                options={allCategories.map((category) => ({
                  value: category,
                  label: category,
                }))}
                onBg={true}
              />
            </div>
            <div>
              <label className="label" htmlFor="serviceName">
                Service Name
              </label>
              <input
                id="serviceName"
                type="text"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                className="input__bg px-3 py-2"
              />
            </div>
            <div>
              <label className="label" htmlFor="description">
                Service Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input__bg px-3 py-2 resize-none h-24"
              />
            </div>
            <div>
              <label className="label" htmlFor="duration">
                Estimated Duration (hrs)
              </label>
              <input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="input__bg px-3 py-2"
              />
            </div>
            <div>
              <label className="label" htmlFor="price">
                Price
              </label>
              <div className="flex gap-3">
                <span className="text-gray-500 border border-primary-200 rounded-md px-3 flex items-center justify-center">
                  GH₵
                </span>
                <input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="input__bg px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label className="label" htmlFor="image">
                Service Images (Select 3 to 8 images)
              </label>
              <Button
                className={'w-full'}
                text={'Choose Images'}
                icon={<FaImages style={{ width: 18, height: 18 }} />}
                onClick={() => imageInputRef.current?.click()}
              />
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                required
                className="input__bg px-3 py-2 hidden"
                ref={imageInputRef}
              />
            </div>
            {images.length > 0 && (
              <div className="mt-4">
                <ImageSlider
                  images={images.map((img) => URL.createObjectURL(img))}
                />
              </div>
            )}
            <Button
              icon={<MdAddTask style={{ width: 20, height: 20 }} />}
              text="Add Service"
              onClick={handleSubmit}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AddService;
