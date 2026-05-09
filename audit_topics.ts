import * as fs from 'fs';

const duplicates = JSON.parse(fs.readFileSync('duplicates.json', 'utf8'));

const topicCounts = {};
duplicates.forEach(q => {
  topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
});

console.log("Duplicates by topic:");
console.log(topicCounts);
