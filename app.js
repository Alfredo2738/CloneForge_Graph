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
    // Dark space background is handled by CSS, ensure three.js background is transparent
    .backgroundColor('rgba(0,0,0,0)')
    .nodeAutoColorBy('group')
    .nodeColor(node => colors[node.group] || '#ffffff')
    // Make central node larger
    .nodeVal(node => node.val || 1)
    .nodeResolution(32) // Smoother spheres
    // Node Tooltip
    .nodeLabel(node => `<div style="font-weight:bold; color:${colors[node.group]}">${node.label}</div>`)
    
    // Add text labels inside spheres or as sprites
    .nodeThreeObjectExtend(true)
    .nodeThreeObject(node => {
        const nodeVal = node.val || 1;
        // Create a text sprite for the label
        const sprite = new SpriteText(node.label);
        sprite.color = 'rgba(255, 255, 255, 0.8)';
        sprite.textHeight = Math.max(2, nodeVal * 0.4); // Scale text by node size
        
        // Offset text slightly so it sits below or on the sphere
        sprite.position.y = -(Math.cbrt(nodeVal) * 1.5 + sprite.textHeight);
        
        return sprite;
    })
    
    // Link Styling
    .linkColor(() => 'rgba(255, 255, 255, 0.2)')
    .linkWidth(1)
    .linkDirectionalParticles(2)
    .linkDirectionalParticleWidth(1.5)
    .linkDirectionalParticleSpeed(d => d.value * 0.005)
    
    // Interactions
    .onNodeClick(node => {
        // Camera distance configuration
        const distance = 40;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

        const newPos = node.x || node.y || node.z
            ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
            : { x: 0, y: 0, z: distance }; // special case if node is at (0,0,0)

        Graph.cameraPosition(
            newPos, // new position
            node, // lookAt ({ x, y, z })
            2000  // ms transition duration
        );
        
        // Update Info Panel
        nodeTitle.innerText = node.label;
        nodeTitle.style.color = colors[node.group] || '#ffffff';
        nodeDesc.innerText = node.description;
        
        // Show panel if not visible
        infoPanel.classList.add('visible');
    })
    .onNodeHover(node => {
        // Change cursor on hover
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
        
        // Reset camera to fit all
        Graph.zoomToFit(1000, 10);
    });

// Make the graph responsive
window.addEventListener('resize', () => {
    Graph.width(elem.clientWidth);
    Graph.height(elem.clientHeight);
});

// Configure force physics for better spread
Graph.d3Force('charge').strength(-150);
Graph.d3Force('link').distance(auto => auto.source.id === "CloneForge" ? 100 : 50);

// Bloom effect can be added here if needed in the future using the global THREE object.
