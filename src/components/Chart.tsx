import React, { useState, useEffect } from "react";
import { ILaunch } from "../interfaces/Launch";
import { ILaunchesPerYear } from "../interfaces/LaunchesPerYear";
import './Chart.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


function Chart() {
  const [allLaunches, setAllLaunches] = useState<ILaunch[]>([]);
  const [launchesPerYear, setLaunchesPerYear] = useState<ILaunchesPerYear[]>([]);
  const [isLoading,  setIsLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.spacex.land/rest/launches";
      try {
        const response = await fetch(url);
        const data: ILaunch[] = await response.json();
        setAllLaunches(data);
        setIsLoading(false)
        setLaunchesPerYear(cleanData)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log('launches per year useEffect', launchesPerYear)
  console.log('all launches', allLaunches)

  const getLaunchesPerYear = (allLaunches: ILaunch[]) => {
    const result =  allLaunches && allLaunches.reduce((launchesPerEachYear: any,  currentYear: ILaunch): any =>  {
    
        if(launchesPerEachYear && launchesPerEachYear.hasOwnProperty(currentYear.launch_year)){
          launchesPerEachYear[currentYear.launch_year] = +launchesPerEachYear[currentYear.launch_year] + 1;
        } else {
          launchesPerEachYear[currentYear.launch_year] = 1;
        }
      return launchesPerEachYear;
    }, {})
    return result; 
  }

  getLaunchesPerYear(allLaunches)
console.log('launch year and launches', getLaunchesPerYear(allLaunches))


const  cleanData= () =>{
  let output: Array<ILaunchesPerYear> = [];
  
  // object.entries
  output = Object.entries(getLaunchesPerYear(allLaunches)).map(([key,value]) =>({year: String(key) , launches: Number(value)}))

  console.log('clean data?', output);
  
    return output;
}
cleanData()
 const data: ILaunchesPerYear[] = cleanData();

  return (
    <div>
      <h1>SpaceX Launches per year</h1>
      {
        isLoading ? <h4>I'm getting data...</h4> : <h4> Loaded </h4>
      }
      <div     style={{
          width: "100%",
          height: "100%",
          padding: "20px",
          maxWidth: "900px",
          margin: "30px auto"
        }}>
      
        <BarChart
        width={900}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 40,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3"  />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="launches" fill="#342af2" />
        
      </BarChart>
     
     </div>
    </div>
  );
}

export default Chart;
