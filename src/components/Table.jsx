export const Table = ({ theadData, tbodyData }) => {
  console.log("🚀 ~ Table ~ tbodyData:", tbodyData);
  console.log("🚀 ~ Table ~ theadData:", theadData);
  return (
    <div className="table">
      {theadData.map((key) => {
        return (
          <div className="tableRow">
            <div className="tableCell tableHeader">{key}:</div>
            <div className="tableCell">{tbodyData[key]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
