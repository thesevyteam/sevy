import ngeohash from 'ngeohash';

export async function getCurrentLocation() {
  if (!navigator.geolocation) {
    console.error('Geolocation is not supported by your browser');
    return;
  }

  try {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const cur_geohash = ngeohash.encode(latitude, longitude);

          // Get city information using the Nominatim API
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
          );

          if (response.ok) {
            const data = await response.json();
            const cur_city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.suburb ||
              data.address.state ||
              'Unknown';

            resolve({ cur_geohash, cur_city });
          } else {
            console.error('Failed to get city information');
            reject(new Error('Failed to get city information'));
          }
        },
        (error) => {
          console.error('Unable to retrieve your location', error);
          reject(error);
        }
      );
    });
  } catch (error) {
    console.error('Error getting location:', error);
  }
}
