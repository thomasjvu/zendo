import { CgSync } from "react-icons/cg"

function Spinner() {
  return (
      <div className='loadingSpinnerContainer'>
        <CgSync className='loadingSpinner' />
        <h1>Now Loading...</h1>
      </div>
  )
}

export default Spinner
