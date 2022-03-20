interface MapInterface {
  matchLocation: string;
}

const Map = (matchLocation: MapInterface): JSX.Element => {
  return (
    <>
      <iframe
        title="boardgame-"
        width="450"
        height="250"
        frameBorder={0}
        style={{ border: 0, borderRadius: 15 }}
        src={`https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${matchLocation.matchLocation}`}
      ></iframe>
    </>
  );
};

export default Map;
