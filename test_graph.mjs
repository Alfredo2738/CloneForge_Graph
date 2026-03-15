import { graphData } from './data.js';
const nodeIds = new Set(graphData.nodes.map(n => n.id));
let errors = 0;
graphData.links.forEach((l, i) => {
  if (!nodeIds.has(l.source)) { console.error(`Missing source: ${l.source} at link ${i}`); errors++; }
  if (!nodeIds.has(l.target)) { console.error(`Missing target: ${l.target} at link ${i}`); errors++; }
});
if (errors === 0) console.log("Graph data is valid!");
