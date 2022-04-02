import states from "../../utilities/saleTax.json"

export default function StateDropdown(props) {
  return (
    <select onChange={(event) => props.setState(event.target.value)}>
      <option>Select a State</option>
      {Object.keys(states.states).map((state, value) => {
        return (
          <option key={value} value={state}>
            {state}
          </option>
        )
      })}
    </select>
  )
}
