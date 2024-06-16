const dataProfession = [
  {
    name: "Guardian",
    name_short: "Gdn",
    color: "#72C1D9",
  },
  {
    name: "Dragonhunter",
    name_short: "Dgh",
    color: "#72C1D9",
  },
  {
    name: "Firebrand",
    name_short: "Fbd",
    color: "#72C1D9",
  },
  {
    name: "Willbender",
    name_short: "Wbr",
    color: "#72C1D9",
  },
  {
    name: "Revenant",
    name_short: "Rev",
    color: "#D16E5A",
  },
  {
    name: "Herald",
    name_short: "Her",
    color: "#D16E5A",
  },
  {
    name: "Renegade",
    name_short: "Ren",
    color: "#D16E5A",
  },
  {
    name: "Vindicator",
    name_short: "Vin",
    color: "#D16E5A",
  },
  {
    name: "Warrior",
    name_short: "War",
    color: "#FFD166",
  },
  {
    name: "Berserker",
    name_short: "Brs",
    color: "#FFD166",
  },
  {
    name: "Spellbreaker",
    name_short: "Spb",
    color: "#FFD166",
  },
  {
    name: "Bladesworn",
    name_short: "Bls",
    color: "#FFD166",
  },
  {
    name: "Engineer",
    name_short: "Eng",
    color: "#D09C59",
  },
  {
    name: "Scrapper",
    name_short: "Scr",
    color: "#D09C59",
  },
  {
    name: "Holosmith",
    name_short: "Hls",
    color: "#D09C59",
  },
  {
    name: "Mechanist",
    name_short: "Mec",
    color: "#D09C59",
  },
  {
    name: "Ranger",
    name_short: "Rgr",
    color: "#8CDC82",
  },
  {
    name: "Druid",
    name_short: "Dru",
    color: "#8CDC82",
  },
  {
    name: "Soulbeast",
    name_short: "Slb",
    color: "#8CDC82",
  },
  {
    name: "Untamed",
    name_short: "Unt",
    color: "#8CDC82",
  },
  {
    name: "Thief",
    name_short: "Thf",
    color: "#C08F95",
  },
  {
    name: "Daredevil",
    name_short: "Dar",
    color: "#C08F95",
  },
  {
    name: "Deadeye",
    name_short: "Ded",
    color: "#C08F95",
  },
  {
    name: "Specter",
    name_short: "Spe",
    color: "#C08F95",
  },
  {
    name: "Elementalist",
    name_short: "Ele",
    color: "#F68A87",
  },
  {
    name: "Tempest",
    name_short: "Tmp",
    color: "#F68A87",
  },
  {
    name: "Weaver",
    name_short: "Wea",
    color: "#F68A87",
  },
  {
    name: "Catalyst",
    name_short: "Cat",
    color: "#F68A87",
  },
  {
    name: "Mesmer",
    name_short: "Mes",
    color: "#B679D5",
  },
  {
    name: "Chronomancer",
    name_short: "Chr",
    color: "#B679D5",
  },
  {
    name: "Mirage",
    name_short: "Mir",
    color: "#B679D5",
  },
  {
    name: "Virtuoso",
    name_short: "Vir",
    color: "#B679D5",
  },
  {
    name: "Necromancer",
    name_short: "Nec",
    color: "#52A76F",
  },
  {
    name: "Reaper",
    name_short: "Rea",
    color: "#52A76F",
  },
  {
    name: "Scourge",
    name_short: "Scg",
    color: "#52A76F",
  },
  {
    name: "Harbinger",
    name_short: "Hrb",
    color: "#52A76F",
  },
];

export const getProfessionColour = (name) => {
  for (let i = 0; i < dataProfession.length; i++) {
    if (dataProfession[i]["name"] === name) return dataProfession[i]["color"];
  }
};
