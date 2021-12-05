import { useContext, useState } from "react";
import CountryContext from "../../../context/countries/CountryContext";
import PlayerContext from "../../../context/players/PlayerContext";
import TeamContext from "../../../context/teams/TeamContext";
import { CountryInterface } from "../../../util/interfaces";
import "./CreationForm.css";

export const CreationForm = () => {
  const countryContext = useContext(CountryContext);
  const { countries } = countryContext;

  const playersContext = useContext(PlayerContext);
  const { searchPlayers } = playersContext;

  const teamContext = useContext(TeamContext);
  const { setTeamName } = teamContext;

  const [suggestions, setSuggestions] = useState<CountryInterface[]>([]);
  const [countryText, setCountryText] = useState<string>("");

  // set team name on input change
  const teamNameInputChange = (e: string) => {
    setTeamName && setTeamName(e);
  };

  // filter countries to show suggestions
  const countryinputChange = (countryInput: string) => {
    let suggestions: CountryInterface[] = [];
    if (countryInput.length > 0) {
      const regex = new RegExp(`^${countryInput.toLowerCase()}`);
      suggestions = countries
        .filter(c => regex.test(c.name.toLowerCase()))
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    setCountryText(countryInput);
    setSuggestions(suggestions);
  };

  // render country list
  const renderCountries = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(c => (
          <li key={c.id} onClick={() => selectCountry(c)}>
            {c.name}
          </li>
        ))}
      </ul>
    );
  };

  const selectCountry = (country: CountryInterface) => {
    setSuggestions([]);
    setCountryText(country.name);
    searchPlayers && searchPlayers(country.id);
  };

  return (
    <form>
      <h4>Let's create a new team</h4>
      <div>
        <label htmlFor='teamName'>Give your team a name</label>
        <input
          type='text'
          id='teamName'
          autoComplete='off'
          placeholder='Team name'
          onChange={e => teamNameInputChange(e.target.value)}
        />
      </div>
      <div className='input-auto-complete'>
        <label htmlFor='countryInput'>Search players by country</label>
        <input
          type='text'
          id='countryInput'
          autoComplete='off'
          value={countryText}
          placeholder='Country'
          onChange={e => countryinputChange(e.target.value)}
        />
        {renderCountries()}
      </div>
    </form>
  );
};
