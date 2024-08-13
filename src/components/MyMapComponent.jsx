import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MyMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "800px" }}
        center={{ lat: -3.745, lng: -38.523 }}
        zoom={10}
      >
        {/* Your markers and other components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
