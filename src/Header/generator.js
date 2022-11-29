import randomSeed from "./random";
import generatorMovieData from "../movieData.json";

const femaleFirstNames = [
  "Black Widow",
  "Space Jam: A New Legacy",
  "The Forever Purge",
  "The Boss Baby: Family Business",
  "The Tomorrow War",
  "Luca",
  "Wrath of Man",
];

const maleFirstNames = [
  "James",
  "John",
  "Robert",
  "William",
  "David",
  "Richard",
  "Thomas",
  "Paul",
  "Mark",
];

export const defaultColumnValues = {
  gender: ["Male", "Female"],
  name: [
    "gender",
    {
      Male: maleFirstNames,
      Female: femaleFirstNames,
    },
  ],
};

export const defaultNestedColumnValues = {
  user: [
    ...[...maleFirstNames, ...femaleFirstNames].map((name, i) => ({
      firstName: name,
    })),
  ],
};

export function generateRows({
  columnValues = defaultColumnValues,
  length,
  random = randomSeed(329972281),
}) {
  const data = [];
  const columns = Object.keys(columnValues);

  for (let i = 0; i < length; i += 1) {
    const record = {};

    columns.forEach((column) => {
      let values = columnValues[column];

      if (typeof values === "function") {
        record[column] = values({ random, index: i, record });
        return;
      }

      while (values.length === 2 && typeof values[1] === "object") {
        values = values[1][record[values[0]]];
      }

      const value = values[Math.floor(random() * values.length)];
      if (typeof value === "object") {
        record[column] = { ...value };
      } else {
        record[column] = value;
      }
    });

    data.push(record);
  }

  return data;
}
