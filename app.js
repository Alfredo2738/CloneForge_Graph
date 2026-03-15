import ForceGraph3D from 'https://esm.sh/3d-force-graph@1.73.3';
import SpriteText from 'https://esm.sh/three-spritetext@1.9.1';
import { graphData } from './data.js';


// Color palette for the different groups
const colors = {
    1: '#00E5FF', // Cyan (Core)
    2: '#FF3366', // Pink/Red (Problem)
    3: '#F2C94C', // Yellow (Market)
    4: '#27AE60', // Green (Solution)
    5: '#9B51E0', // Purple (Tech Stack)
    6: '#F2994A', // Orange (Business Model)
    7: '#56CCF2', // Light Blue (Milestones)
    8: '#EB5757', // Coral (Ask)
};

// UI Elements
const infoPanel = document.getElementById('info-panel');
const nodeTitle = document.getElementById('node-title');
const nodeDesc = document.getElementById('node-desc');

// Initialize the 3D Force Graph
const elem = document.getElementById('graph-container');

const Graph = ForceGraph3D()(elem)
    .graphData(graphData)
    .backgroundColor('rgba(0,0,0,0)')
    .nodeAutoColorBy('group')
    .nodeColor(node => colors[node.group] || '#ffffff')
    .nodeResolution(32)
    .nodeVal(node => node.val || 1)
    .nodeLabel(node => `<div style="font-weight:bold; color:${colors[node.group]}">${node.label}</div>`)
    .nodeThreeObjectExtend(true)
    .nodeThreeObject(node => {
        const nodeVal = node.val || 1;
        const sprite = new SpriteText(node.label);
        sprite.color = 'rgba(255, 255, 255, 0.8)';
        sprite.textHeight = Math.max(2, nodeVal * 0.4);
        sprite.position.y = -(Math.cbrt(nodeVal) * 1.5 + sprite.textHeight);
        return sprite;
    })
    .linkColor(() => 'rgba(255, 255, 255, 0.2)')
    .linkWidth(1)
    .linkDirectionalParticles(2)
    .linkDirectionalParticleWidth(1.5)
    .linkDirectionalParticleSpeed(d => d.value * 0.005)
    .onNodeClick(node => {
        const distance = 40;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
        const newPos = node.x || node.y || node.z
            ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
            : { x: 0, y: 0, z: distance };
        Graph.cameraPosition(newPos, node, 2000);
        
        nodeTitle.innerText = node.label;
        nodeTitle.style.color = colors[node.group] || '#ffffff';
        nodeDesc.innerText = node.description;
        infoPanel.classList.add('visible');
    })
    .onNodeHover(node => {
        elem.style.cursor = node ? 'pointer' : 'default';
        if(node) {
             nodeTitle.innerText = node.label;
             nodeTitle.style.color = colors[node.group] || '#ffffff';
             nodeDesc.innerText = node.description;
             infoPanel.classList.add('visible');
        }
    })
    .onBackgroundClick(() => {
        infoPanel.classList.remove('visible');
        Graph.zoomToFit(1000, 10);
    });

// Configure force physics
Graph.d3Force('charge').strength(-150);
Graph.d3Force('link').distance(auto => auto.source.id === "CloneForge" ? 100 : 50);

// Make the 3D graph responsive
window.addEventListener('resize', () => {
    Graph.width(elem.clientWidth);
    Graph.height(elem.clientHeight);
});
