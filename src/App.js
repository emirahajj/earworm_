import React, {useState, useEffect} from "react";
import entries from "./entries";
import Entry from "./components/Entry";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import {dropdownYears} from "./stats";
import anime from "animejs";
import Splash from "./components/splash"
import YearStat from "./components/YearStat"
import Nav from "./components/Nav"


function createEntry(entry) {
  return (<Entry
    key={entry.rank}
    rank={entry.rank}
    title={entry.title}
    artist={entry.artist}
    image={entry.image}/>);
}

//function to toggle the rest of the chart data (11-200)
function ShowRest(value) {
  const [open,
    setOpen] = React.useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center place-items-center mb-6">
        <div className="w-32">
          <Button
            onClick={() => setOpen(!open)}
            variant="custom"
            aria-controls="drop"
            aria-expanded={open}>
            {open
              ? "Less"
              : "More"}
          </Button>
        </div>
      </div>
      <Collapse in={open}>
        <div className="lg:mt-6 lg:max-w-md xl:max-w-xl" id="drop">{entries
            .filter(entry => entry.chart_year === value && entry.rank >= 11)
            .map(createEntry)}</div>
      </Collapse>

    </div>
  );
}

export default function App() {

  useEffect(() => {
    anime({
      targets: ['.wrapper'],
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 600,
      delay: 5600,
      direction: 'alternate',
      loop: false
    });
  });

  //2019 is the default state till user picks another
  const [year, setYear] = useState("2019");
  const yearSwitch = (e) => {
    setYear(e);
  }

  //getting decade range for each selected year
  const decadeStart = parseInt(year) - parseInt(year) % 10;
  const decadeEnd = decadeStart + 10;

  // create the whole chart year once and just pass this array into the respective
  // functions
  const wholeChartYr = entries.filter(entry => entry.chart_year === year);
  const DecadeChart = entries.filter(entry => entry.chart_year >= decadeStart.toString() && entry.chart_year <= decadeEnd.toString());

  //filter the entries array for just the things we want
  const firstTen = wholeChartYr
    .filter(entry => entry.rank <= 10)
    .map(createEntry);

  const years = dropdownYears();

  return (
    <div className="App">
      <Splash/>
      <div className="wrapper opacity-0">
        <Nav/>
        <div
          className="flex w-full flex-col items-center lg:items-start lg:justify-around lg:flex-row mt-6">
          <div className="max-w-md xl:max-w-xl">
            <DropdownButton
              className="text-4xl w-full xl:text-4xl mb-4"
              onSelect={yearSwitch}
              title={year}
              variant="custom">
              {years.map((year) => (
                <Dropdown.Item eventKey={year.toString()}>{year}</Dropdown.Item>
              ))}
            </DropdownButton>
            <div className=" lg:h-screen lg:overflow-y-auto">
              {firstTen}{ShowRest(year)}
            </div>
          </div>
          <YearStat year={year} chartyear={wholeChartYr} decadechart={DecadeChart} />
        </div>
      </div>
    </div>
  );
}
