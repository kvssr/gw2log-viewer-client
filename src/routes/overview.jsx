import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";

const Overview = () => {
  const log = useLoaderData();
  console.log("🚀 ~ Overview ~ log:", log);
  const data = log["overall_raid_stats"];
  console.log("🚀 ~ Overview ~ data:", data);
  delete data["avg_squad_composition"];

  return (
    <>
      <div className="raidStats">
        <h2>Overall Raid Stats</h2>
        <Table
          theadData={getHeadings(data)}
          tbodyData={data}
        />
      </div>
      <div className="fightLinks"></div>
    </>
  );
};

const getHeadings = (data) => {
  return Object.keys(data);
};

export default Overview;
