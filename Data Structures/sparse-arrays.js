function matchingStrings(strings, queries) {
    let queriesInstances = {};
    let result = [];

    function stringToProperty(key) {
        queriesInstances[key] = 0;
    }

    let instanceQueries = queries.map(stringToProperty);

    function existingQueries(key) {
        return queriesInstances[key] >= 0;
    }

    function frequencyOfOccurrence(data) {
        queriesInstances[data] += 1;
    }

    let filterStrings = strings.filter(existingQueries)
    let mapStrings = filterStrings.map(frequencyOfOccurrence);


    function allQueriesInOrder(value) {
        result.push(queriesInstances[value]);
    }

    let orderQueries = queries.map(allQueriesInOrder);

    return result;
}


/*

LINKS

Problem
https://www.hackerrank.com/challenges/sparse-arrays/problem

Submission
https://www.hackerrank.com/challenges/sparse-arrays/submissions/code/103478308

Profile
https://www.hackerrank.com/mirantrix

*/
