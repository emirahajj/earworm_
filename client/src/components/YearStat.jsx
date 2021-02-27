import React, {Component} from "react";
import {
  Pie,
  PieChart,
  Cell,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  LabelList,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {getOldestAlbum, getMostOccuringArtist, getTheirHighestAlbum, getTop100GenreBreakdown, getTop10ArtistsDecade} from "../stats";

import OverTime from "./genreLineGraph";

function createStats(chartyear, decade, value) {

  var top100ByGenre = getTop100GenreBreakdown(chartyear);

  var top10ArtistsByDecade = getTop10ArtistsDecade(decade);
  var numdecade = parseInt(value) - parseInt(value) % 10;
  var oldestAlbum = getOldestAlbum(chartyear);
  var mostOccuringArtist = getMostOccuringArtist(chartyear);
  var artist = mostOccuringArtist[0];
  var times = mostOccuringArtist[1];
  var theirAlbum = getTheirHighestAlbum(chartyear, artist);
  var colors = [
    "#F95470",
    "#E7B966",
    "#C890EA",
    "#F88C6C",
    "#81A8FF",
    "#C2E98D",
    "#8086A0",
    "#3A7F5F",
    "#87DCFF",
    "#3377C6",
    "#BD3BBC",
    "#F19D38",
    "#74B5AA",
    "#5BB481"
  ];

  // const renderColorfulLegendText(value, entry) => { 	const { color } = entry;
  // return <span style={{ color }}>{value}</span>; };

  return (
    <div>
      <div
        className="flex bg-gradient-to-r from-teal-400 to-blue-500 mb-3 rounded-full justify-center">
        <h1 className="text-6xl xl:text-6xl text-gray-200">
          Fast Stats
        </h1>
      </div>
      <div className="lg:overflow-y-auto lg:h-screen">
        <div className="mb-4 flex mt-4 flex-row justify-around">
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img
              className="w-full h-full object-cover rounded-md"
              src={oldestAlbum.image}
              alt=""/>
          </div>
          <p className="self-center text-xl xl:text-2xl mb-3 w-2/3 text-gray-300">
            The oldest album this chart year was '{oldestAlbum.title}' by {oldestAlbum.artist}, released in <em>{oldestAlbum.release_year}</em>.
          </p>
        </div>
        <div className="flex justify-around flex-row">
          <p
            className="self-center text-right text-xl xl:text-2xl mb-4 w-2/3 text-gray-300">
            {artist} had the most entries this year ({times}), of which, the highest charting album was '{theirAlbum.title}' at #{theirAlbum.rank}.
          </p>
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img
              className="w-full h-full object-cover rounded-md"
              src={theirAlbum.image}
              alt=""/>
          </div>
        </div>
        <div className="mt-4">
          <div
            className="flex flex-row bg-gradient-to-r from-teal-400 to-blue-500 rounded-full justify-center">
            <h1 className="text-3xl xl:text-4xl text-gray-200 ">Top 100 by Genre</h1>
          </div>

          <div className="w-full">
            <div className="flex mt-4 flex-row justify-center">
              <p className="lg:text-2xl text-gray-200">{top100ByGenre[0].genre} dominated the charts this year.</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={top100ByGenre}
                dataKey="number"
                nameKey="genre"
                cx="50%"
                cy="50%"
                label
                outerRadius={100}>
                {top100ByGenre.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    cornerRadius={2}
                    stroke="#202743"
                    strokeWidth={0.5}
                    fill={colors[index]}></Cell>
                ))}
              </Pie>
              <Legend
                wrapperStyle={{
                color: "#FFFFFF",
                fontSize: "13px",
                marginRight: "5px"
              }}
                layout="vertical"
                verticalAlign="middle"
                iconType="circle"
                align="right"></Legend>
            </PieChart>
          </ResponsiveContainer>

          <div className="w-full mt-4">
            <h1
              className="text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-full text-center mb-4 text-3xl xl:text-4xl">
              {numdecade}'s At a Glance
            </h1>
            <p className="text-white text-center text-2xl">
              Top 10 Artists (by total entries):
            </p>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={top10ArtistsByDecade}
              layout="vertical"
              margin={{
              top: 5,
              right: 10,
              left: 10
            }}>
              <defs>
                <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="5%" stopColor="#4299e1" stopOpacity={1}/>
                  <stop offset="85%" stopColor="#4299e1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis hide={true} type="number" domain={[0, 'dataMax']}/>
              <YAxis hide={true} type="category" dataKey="artist"/>
              <Bar barSize={20} dataKey="count" radius={8}>
                <LabelList dataKey="artist" position="insideLeft" fill="#FFFFFF"/>
                <LabelList dataKey="count" position="insideRight" fill="#FFFFFF"/> {top10ArtistsByDecade.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    cornerRadius={2}
                    //stroke="#FFFFFF"
                    strokeWidth={0.5}
                    fill="url(#colorUv)"></Cell>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <OverTime/>
        </div>
      </div>
    </div>
  );
}

export default class YearStats extends Component {
  render() {
    return (
      <div className="flex flex-col max-w-md xl:max-w-xl">
        <div className="flex flex-col mb-4">
          {createStats(this.props.chartyear, this.props.decadechart, this.props.year)}
        </div>
      </div>
    );
  }
}