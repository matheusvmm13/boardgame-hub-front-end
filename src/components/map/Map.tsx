import styled from "styled-components";

interface MapInterface {
  matchLocation: string;
}

const Map = (matchLocation: MapInterface): JSX.Element => {
  return (
    <>
      <MapContainer className="map__responsive">
        <iframe
          title="boardgame"
          width="450"
          height="250"
          frameBorder={0}
          style={{ border: 0, borderRadius: 10 }}
          src={`https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${matchLocation.matchLocation}`}
        ></iframe>
      </MapContainer>
    </>
  );
};

export default Map;

const MapContainer = styled.article`
  position: relative;
  padding-top: 1rem;
  margin-bottom: 1rem;

  .map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    overflow: hidden;
    // padding-bottom: 16%;
  }
`;
