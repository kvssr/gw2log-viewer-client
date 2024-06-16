const freyaFix = {
  total: "total",
  average: "average",
  consistent: "total",
  percentage: "total",
};

export const getTopPlayersPerStat = (
  limit = 5,
  stat = "dmg_total",
  type = "total",
  log
) => {
  const topPlayerIds = log[`top_${type}_players`][stat];
  const topPlayers = [];
  for (let i = 0; i < limit; i++) {
    const topPlayer = log["players"][topPlayerIds[i]];
    topPlayers.push({
      name: topPlayer.name,
      attendance_percentage: topPlayer.attendance_percentage,
      value:
        typeof topPlayer[`${freyaFix[type]}_stats`][stat] === "object"
          ? topPlayer[`${freyaFix[type]}_stats`][stat]["gen"]
          : topPlayer[`${freyaFix[type]}_stats`][stat],
      profession: topPlayer.profession,
    });
  }

  return topPlayers;
};

export const getStatsLabels = (log) => {
  let statsList = [];
  let blacklist = [
    "big_boomer",
    "explosive_entrance",
    "explosive_temper",
    "med_kit",
  ];
  Object.keys(log["top_total_players"]).map((key) => {
    if (!blacklist.includes(key)) {
      statsList.push({
        value: key,
        label: key,
      });
    }
  });
  return statsList;
};

export const getTypesLabels = () => {
  return [
    {
      value: "total",
      label: "total",
    },
    {
      value: "average",
      label: "average",
    },
    {
      value: "consistent",
      label: "consistent",
    },
    {
      value: "percentage",
      label: "percentage",
    },
  ];
};

export const getLimitLabels = (limit) => {
  let limitLabels = [];

  for (let i = 0; i < limit; i++) {
    limitLabels.push({
      value: i,
      label: i,
    });
  }
  return limitLabels;
};
