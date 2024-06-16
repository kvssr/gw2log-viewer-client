import { useLoaderData } from "react-router-dom";
import { getStatsLabels, getTopPlayersPerStat } from "../helpers/logHelper";
import TopPlayerStatChart from "../components/TopPlayerStatChart";
import ReactSelect from "react-select";
import { useState } from "react";

const TopPlayers = () => {
  const log = useLoaderData();
  const statsList = getStatsLabels(log);
  const [selectedStats, setSelectedStats] = useState(statsList);

  const handleSelectChange = (e) => {
    setSelectedStats(e);
  };

  return (
    <>
      <div className="detailsOptionsRow">
        <ReactSelect
          options={statsList}
          isMulti
          className="StatsSelect"
          onChange={handleSelectChange}
          value={selectedStats}
        />
      </div>
      <div className="topPlayerContainer">
        {selectedStats.map((stat) => {
          const data = getTopPlayersPerStat(5, stat.value, "total", log);
          return (
            <div className="topPlayerStatChart">
              <h2>{stat.value}</h2>
              <TopPlayerStatChart data={data} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopPlayers;
