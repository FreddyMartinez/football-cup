import React, { Fragment, useContext, useEffect } from "react";
import { CreationForm, PlayerList, NewTeam } from "./";
import CountryContext from "../../context/countries/CountryContext";
import "./CreateTeam.css";

const CreateTeam = () => {

  const teamContext = useContext(CountryContext)
  const { loading, searchCountries } = teamContext;

  useEffect(() => {
    searchCountries && searchCountries()
    // eslint-disable-next-line
  }, [])
  
  if(loading) {
    return (<p>Loading</p>)
  }

  return (
    <Fragment>
      <div className="form-containter">
        <CreationForm />
        <NewTeam />
      </div>
      <PlayerList />
    </Fragment>
  );
};

export default CreateTeam;
