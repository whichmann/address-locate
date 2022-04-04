import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import "./App.css";
import { SearchBox, SearchesList, Map } from "./Components";
import getLocation from "./Api/IpStackAPI";

type IpLocationModel = {
  searchedItem?: string;
  zip?: string;
  city?: string;
  country_name?: string;
  latitude?: number;
  longitude?: number;
};

type ErrorModel = {
  info: string;
};

type IpStackResponseModel = IpLocationModel & {
  success?: boolean;
  error?: ErrorModel;
};

const App = () => {
  const [ipLocations, setIpLocations] = useState<IpLocationModel[]>([]);
  const [currentIpLocation, setCurrentIpLocation] =
    useState<IpLocationModel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchedIpAddress, setSearchedIpAddress] = useState("");

  const fetchLocationData = async (searchedItem?: string) => {
    try {
      const response = await getLocation(searchedItem ? searchedItem : "check");
      const data: IpStackResponseModel = await response.json();
      if (response.status !== 200 || data.success === false) {
        throw data.error?.info;
      } else {
        const newIpLocation = {
          searchedItem: searchedItem,
          city: data.city,
          zip: data.zip,
          country_name: data.country_name,
          latitude: data.latitude,
          longitude: data.longitude,
        };
        searchedItem
          ? setIpLocations([...ipLocations, newIpLocation])
          : setCurrentIpLocation(newIpLocation);
      }
    } catch (error: any) {
      setError(
        typeof error === "string"
          ? error
          : "Something went wrong, please try again"
      );
    }
  };

  useEffect(() => {
    setError(null);
    if (searchedIpAddress) {
      fetchLocationData(searchedIpAddress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedIpAddress]);

  useEffect(() => {
    fetchLocationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {currentIpLocation && (
        <Map title={"Your Location -"} location={currentIpLocation} />
      )}
      <div className={"search-container"}>
        <SearchBox handleSearchQuery={setSearchedIpAddress} />
      </div>
      {error && <h1>{error}</h1>}
      <div className={"list-container"}>
        {!!ipLocations.length && (
          <Grid container spacing={3} paddingTop={2}>
            <SearchesList searchesList={ipLocations} />
            <Map
              title={"Searched Location -"}
              location={ipLocations[ipLocations.length - 1]}
            />
          </Grid>
        )}
      </div>
    </>
  );
};

export default App;
export type { IpLocationModel };
