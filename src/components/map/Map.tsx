const Map = () => {
  const matchLocation = "Carrer de Pau Claris, 32, Barcelona";

  return (
    <>
      <iframe
        title="boardgame-"
        width="450"
        height="250"
        frameBorder={0}
        style={{ border: 0, borderRadius: 15, pointerEvents: "none" }}
        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBkkWqA-5GE7hmgCfGgIParb65V0mD27BI&q=${matchLocation}`}
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Map;
