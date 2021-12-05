import './CreationForm.css';

export const CreationForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="teamName">Choose a name for your team</label>
        <input type="text" name="teamName" id="teamName"/>
      </div>
      <div>
        <label htmlFor="countryInput">Select country</label>
        <input type="text" name="countryInput" id="countryInput" />
      </div>
      <div>
        <label htmlFor="positionFilter">Filter by position</label>
        <input type="text" name="positionFilter" id="positionFilter" />
      </div>
    </form>
  )
}

