import React, {useState} from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
  Area,
  AreaChart,
  ResponsiveContainer
} from 'recharts';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {getGenreTrend} from "../stats"
import {SplitButton} from "react-bootstrap";

export default function OverTime() {
  const [value,
    setValue] = useState("Pop");
  const handleSelect = (e) => {
    setValue(e);
  }

  var data2 = getGenreTrend(value);

  return (
    <div className="mt-4">
      <div className="w-full text-3xl xl:text-4xl flex justify-center">
        <SplitButton
          className="w-full"
          onSelect={handleSelect}
          title="Genre by year"
          variant="custom1">
          <Dropdown.Item eventKey="Pop">Pop</Dropdown.Item>
          <Dropdown.Item eventKey="Rock">Rock</Dropdown.Item>
          <Dropdown.Item eventKey="Country">Country</Dropdown.Item>
          <Dropdown.Item eventKey="R&B">R&B</Dropdown.Item>
          <Dropdown.Item eventKey="Rap">Rap</Dropdown.Item>
          <Dropdown.Item eventKey="Electronic">Electronic</Dropdown.Item>
          <Dropdown.Item eventKey="Holiday">Holiday</Dropdown.Item>
          <Dropdown.Item eventKey="Vocal">Vocal</Dropdown.Item>
          <Dropdown.Item eventKey="Latin">Latin</Dropdown.Item>
          <Dropdown.Item eventKey="Jazz">Jazz</Dropdown.Item>
          <Dropdown.Item eventKey="Stage & Screen">Stage&Screen</Dropdown.Item>
        </SplitButton>
      </div>

      <h1 className="text-3xl mt-3 mb-3 text-white text-center">{value}</h1>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data2}
          margin={{
          top: 5,
          right: 10,
          left: -20
        }}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <XAxis dataKey="_year" interval={2} dx={20}/>
          <YAxis type="number" domain={[0, 100]}/>
          <Tooltip
            contentStyle={{
            backgroundColor: "transparent",
            border: "none"
          }}
            labelStyle={{
            color: "#FFFFFF"
          }}/>
          <Area type="natural" dataKey={value} strokeWidth={2} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
        </AreaChart>
      </ResponsiveContainer>
    </div>

  );
}