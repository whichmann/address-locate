import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  handleSearchQuery: (searchedLocation: string) => void;
};

const SearchBox = ({ handleSearchQuery }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <Paper sx={{ p: '2px 4px', alignItems: 'center'}}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Provide IP or URL"
          inputProps={{ "aria-label": "location search" }}
          value={searchQuery}
          onChange={handleInput}
          autoFocus
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            handleSearchQuery(searchQuery);
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
};

export default SearchBox;
