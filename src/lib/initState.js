import hash from "object-hash";
import moment from "moment";
import queryString from "query-string";

const queryParser = () => {
  const parsed = queryString.parse(document.location.search);
  return parsed;
};

const getFinalHash = (timestamp, personName) => {
  let hexHash = hash(`${timestamp}-${personName}`, {
    algorithm: "sha1",
    encoding: "hex"
  });
  hexHash = hash(hexHash, { algorithm: "sha1", encoding: "hex" });
  return hexHash;
};

const sortHash = (toBeSorted, timestamp) => {
  return toBeSorted.sort((a, b) => {
    return getFinalHash(timestamp, a) < getFinalHash(timestamp, b) ? -1 : 1;
  });
};

const calGrouping = (persons, groups, policy) => {
  const n = persons.length;
  const ng = groups.length;
  const np = policy.length;

  let counterG = 0;
  let counterP = 0;
  let grouping = [];
  let currentGroup = {
    groupName: "",
    persons: []
  };
  let i;
  for (i = 0; i < n; i++) {
    currentGroup.persons.push(persons[i]);
    if (currentGroup.groupName === "") {
      currentGroup.groupName =
        counterG < ng
          ? groups[counterG] || " "
          : `Unnamed Group ${hash
              .sha1(Math.random())
              .slice(0, 6)
              .toUpperCase()}`;
      counterG += 1;
    }
    if (
      counterP < np &&
      currentGroup.persons.length >= parseInt(policy[counterP])
    ) {
      currentGroup.persons = currentGroup.persons.sort((a, b) => {
        return a < b ? -1 : 1;
      });
      grouping.push(currentGroup);
      currentGroup = {
        groupName: "",
        persons: []
      };
      counterP += 1;
    }
  }
  if (currentGroup.groupName !== "") {
    currentGroup.persons = currentGroup.persons.sort((a, b) => {
      return a < b ? -1 : 1;
    });
    grouping.push(currentGroup);
  }

  return grouping.sort((a, b) => {
    return a.groupName < b.groupName ? -1 : 1;
  });
};

export const initState = timestamp => {
  const parsed = queryParser();
  const keys = Object.keys(parsed);
  const personKeys = keys.filter(key => key.slice(0, 1) === "p");
  const groupNameKeys = keys.filter(key => key.slice(0, 1) === "n");
  const groupingPolicyKeys = keys.filter(key => key.slice(0, 1) === "g");

  let persons = personKeys.map(key => {
    return parsed[key];
  });
  if (persons.length === 0) {
    persons = ["小明", "小王", "小李", "小张", "小文", "小谢", "小郑", "小林"];
  }
  let groupNames = groupNameKeys.map(key => {
    return parsed[key];
  });
  if (groupNames.length === 0) {
    groupNames = ["工作区-1", "工作区-2"];
  }
  let groupingPolicies = groupingPolicyKeys.map(key => {
    return parsed[key];
  });
  if (groupingPolicies.length === 0) {
    groupingPolicies = ["4-4"];
  }

  const sortedPersons = sortHash(persons, timestamp);
  const sortedGroupNames = groupNames.sort();
  const selectedGroupingPolicy = sortHash(groupingPolicies, timestamp)[0];

  const parsePolicy = selectedGroupingPolicy.split("-");

  const result = calGrouping(sortedPersons, sortedGroupNames, parsePolicy);

  return result;
};

export const getTimestamp = timeString => {
  let currentDate;
  if (timeString) {
    let timeStringM = `${timeString.slice(0, 4)}-${timeString.slice(
      4,
      6
    )}-${timeString.slice(6)}`;

    currentDate = moment(`${timeStringM} 16:56 +00:00`, "YYYY-MM-DD HH:mm Z")
      .utc()
      .locale("en");
  } else {
    const tDate = moment().format("YYYY-MM-DD");

    currentDate = moment(`${tDate} 16:56 +00:00`, "YYYY-MM-DD HH:mm Z")
      .utc()
      .locale("en");
  }
  if (!currentDate.isValid()) {
    return "ERROR: INVALID DATE";
  }
  const formattedDate = currentDate.format("YYYY-MM-DD");
  return formattedDate;
};
