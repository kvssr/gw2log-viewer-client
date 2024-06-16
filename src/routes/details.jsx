import { useLoaderData } from "react-router-dom";
import ReactSelect from "react-select";
import {
  getLimitLabels,
  getStatsLabels,
  getTopPlayersPerStat,
  getTypesLabels,
} from "../helpers/logHelper";
import { useState } from "react";
import TopPlayerStatChart from "../components/TopPlayerStatChart";

const Details = () => {
  const log = useLoaderData();
  const statsList = getStatsLabels(log);
  const typeList = getTypesLabels();
  const limitList = getLimitLabels(log["players"].length);

  const [selectedStat, setSelectedStat] = useState({
    value: "dmg_total",
    label: "dmg_total",
  });
  const [selectedType, setSelectedType] = useState({
    value: "total",
    label: "total",
  });
  const [selectedLimit, setSelectedLimit] = useState({
    value: 15,
    label: 15,
  });
  const data = getTopPlayersPerStat(
    selectedLimit.value,
    selectedStat.value,
    selectedType.value,
    log
  );

  const handleSelectStatChange = (e) => {
    setSelectedStat(e);
  };

  const handleSelectTypeChange = (e) => {
    setSelectedType(e);
  };

  const handleSelectLimitChange = (e) => {
    setSelectedLimit(e);
  };

  return (
    <>
      <div className="detailsOptionsRow">
        <ReactSelect
          id="stats-Select"
          options={statsList}
          className="StatsSelect"
          onChange={handleSelectStatChange}
          value={selectedStat}
        />
        <ReactSelect
          id="type-Select"
          options={typeList}
          className="StatsSelect"
          onChange={handleSelectTypeChange}
          value={selectedType}
        />
        <ReactSelect
          id="limit-Select"
          options={limitList}
          className="StatsSelect"
          onChange={handleSelectLimitChange}
          value={selectedLimit}
        />
      </div>
      <div className="detailContainer">
        <h2>{selectedStat.value}</h2>
        <TopPlayerStatChart data={data} />
      </div>
    </>
  );
};

export default Details;
