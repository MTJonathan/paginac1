
import './logos.css'
import { Spotify,Microsoft, McAfee, Google,FedEx } from "../svg/svg"

const Logos = () => {
  return (
    <aside className="logos">
      <div className="logosContainer container">
        <Spotify/>
        <Microsoft />
        <McAfee />
        <Google />
        <FedEx />
      </div>
    </aside>
  )
}

export default Logos
