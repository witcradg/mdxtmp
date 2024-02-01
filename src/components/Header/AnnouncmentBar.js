import { NavButton } from "@/components/Header/NavSection"

const AnnouncmentBar = () => (
  <div
    id="anouncement-bar"
    className="\ bg-gradient-to-r from-blue-900 via-blue-600 to-red-600 bg-contain
  bg-left-top bg-no-repeat"
  >
    <div
      id="column"
      className="flex flex-col items-center justify-around py-4 lg:flex-row"
    >
      <div id="message" className="text-4xl uppercase text-white">
        <p className="m-2">
          Now offering mobile <br />
          repair &amp; service!
        </p>
      </div>
      <NavButton target="/appointments/" label="Request An Appointment" />
    </div>
  </div>
)

export default AnnouncmentBar
