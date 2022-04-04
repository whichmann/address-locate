import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "./Map.css";
import { IpLocationModel } from "../../App";
import { ModuleWrapper } from "..";

type Props = {
  location: IpLocationModel;
  title: string;
};

const Map = ({location, title}: Props) => {
  const {latitude = 0, longitude = 0, country_name, zip, city} = location;
  return (
    <ModuleWrapper moduleTitle={`${title} ${zip} ${city}, ${country_name}`}>
      <MapContainer style={{height: 280}} center={[latitude, longitude]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
          {`${zip} ${city}, ${country_name}`}
          </Popup>
        </Marker>
      </MapContainer>
    </ModuleWrapper>
  );
};

export default Map;
