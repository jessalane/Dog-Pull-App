import BigDog from "../assets/images/robot-dog-airplane.png";
// import ScheduleCarousel from "./components/ScheduleCarousel/index";
import ScheduleCarousel from "../components/ScheduleCarousel/index";
// import { Link } from 'react-router-dom';

const events = [
  {
    id: "1",
    date: "Sep 30",
    region: "5",
    country: "USA",
    state: "NY",
    town: "Albany",
    type: "Wheels",
    status: "Tentative (T)",
    noviceAllowed: true,
    practiceAllowed: true,
  },
  {
    id: "2",
    date: "Oct 10",
    region: "3",
    country: "USA",
    state: "CA",
    town: "Sacramento",
    type: "Snow",
    status: "Cancelled (C)",
    noviceAllowed: false,
    practiceAllowed: false,
  },
];

const Home = () => {
  return (
    <div>
      <div>
        <ScheduleCarousel events={events} />
      </div>
      <div>
        <img className="home-img" src={BigDog} alt="Big Dog" />
      </div>
    </div>
  );
};

export default Home;
