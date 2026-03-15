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

// Track selected and hovered states
let hoverNode = null;
let selectedNode = null;
const highlightNodes = new Set();
const highlightLinks = new Set();

// Pre-calculate node neighbors
graphData.links.forEach(link => {
    const a = graphData.nodes.find(n => n.id === link.source);
    const b = graphData.nodes.find(n => n.id === link.target);
    if (!a.neighbors) a.neighbors = [];
    if (!b.neighbors) b.neighbors = [];
    a.neighbors.push(b);
    b.neighbors.push(a);
    if (!a.links) a.links = [];
    if (!b.links) b.links = [];
    a.links.push(link);
    b.links.push(link);
});

// Iridescent colors for particles
const iridescentColors = ['#00FFFF', '#FF00FF', '#FFFF00', '#00FFCC'];

const Graph = ForceGraph3D()(elem)
    .graphData(graphData)
    .backgroundColor('rgba(0,0,0,0)')
    .nodeAutoColorBy('group')
    // Dim nodes if there is a selection/hover and they are not part of it
    .nodeColor(node => {
        if (highlightNodes.size > 0 && !highlightNodes.has(node)) {
            return 'rgba(255,255,255,0.1)';
        }
        return colors[node.group] || '#ffffff';
    })
    .nodeResolution(32)
    .nodeVal(node => node.val || 1)
    .nodeLabel(node => `<div style="font-weight:bold; color:${colors[node.group]}">${node.label}</div>`)
    .nodeThreeObjectExtend(true)
    .nodeThreeObject(node => {
        const group = new THREE.Group();
        
        // Base label
        const nodeVal = node.val || 1;
        const sprite = new SpriteText(node.label);
        sprite.color = colors[node.group] || '#ffffff';
        sprite.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        sprite.borderColor = sprite.color;
        sprite.borderWidth = 1;
        sprite.borderRadius = 4;
        sprite.padding = [4, 2];
        
        let targetTextHeight = Math.max(2, nodeVal * 0.4);
        // Emphasize label if it is the selected node
        if (node === selectedNode) {
            targetTextHeight *= 1.5;
            sprite.fontWeight = 'bold';
        } else if (highlightNodes.has(node)) {
            targetTextHeight *= 1.2;
        } else if (highlightNodes.size > 0) {
            // Hide or shrink labels heavily if not highlighted
            targetTextHeight *= 0.1;
            sprite.color = 'rgba(255,255,255,0.1)';
            sprite.backgroundColor = 'rgba(0,0,0,0)';
            sprite.borderColor = 'rgba(0,0,0,0)';
        }

        sprite.textHeight = targetTextHeight;
        sprite.position.y = -(Math.cbrt(nodeVal) * 1.5 + sprite.textHeight);
        group.add(sprite);

        // Add a pulsing halo if this is the selected node
        if (node === selectedNode) {
            const haloGeometry = new THREE.SphereGeometry(Math.cbrt(nodeVal) * 1.8, 32, 32);
            const haloMaterial = new THREE.MeshBasicMaterial({
                color: colors[node.group],
                transparent: true,
                opacity: 0.3,
                blending: THREE.AdditiveBlending
            });
            const haloMesh = new THREE.Mesh(haloGeometry, haloMaterial);
            haloMesh.name = 'halo';
            group.add(haloMesh);
        }

        return group;
    })
    // Dim links that aren't highlighted
    .linkColor(link => {
        if (highlightNodes.size > 0 && !highlightLinks.has(link)) {
            return 'rgba(255, 255, 255, 0.05)'; // Very dim
        }
        return 'rgba(255, 255, 255, 0.3)';
    })
    .linkWidth(link => highlightLinks.has(link) ? 2 : 1)
    .linkDirectionalArrowLength(3)
    .linkDirectionalArrowRelPos(1)
    .linkDirectionalParticles(2)
    .linkDirectionalParticleWidth(link => highlightLinks.has(link) ? 3 : 1.5)
    // Iridescent Particles
    .linkDirectionalParticleColor(() => iridescentColors[Math.floor(Math.random() * iridescentColors.length)])
    .linkDirectionalParticleSpeed(d => d.value * 0.005)
    .onNodeClick(node => {
        // Zoom functionality
        const distance = 40;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
        const newPos = node.x || node.y || node.z
            ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
            : { x: 0, y: 0, z: distance };
        Graph.cameraPosition(newPos, node, 2000);
        
        // UI updates
        nodeTitle.innerText = node.label;
        nodeTitle.style.color = colors[node.group] || '#ffffff';
        nodeDesc.innerText = node.description;
        infoPanel.classList.add('visible');

        // Selection highlight state
        selectedNode = node;
        updateHighlight();
    })
    .onNodeHover(node => {
        elem.style.cursor = node ? 'pointer' : 'default';
        if (node !== hoverNode) {
            hoverNode = node;
            // Only update hover highlights if a node isn't actively clicked/selected
            if (!selectedNode) {
                updateHighlight();
            }
        }
        
        // Show tooltip temporarily when just hovering
        if(node && !selectedNode) {
             nodeTitle.innerText = node.label;
             nodeTitle.style.color = colors[node.group] || '#ffffff';
             nodeDesc.innerText = node.description;
             infoPanel.classList.add('visible');
        } else if (!node && !selectedNode) {
             infoPanel.classList.remove('visible');
        }
    })
    .onBackgroundClick(() => {
        selectedNode = null;
        updateHighlight();
        infoPanel.classList.remove('visible');
        Graph.zoomToFit(1000, 10);
    });

// Highlight Update Logic Function
function updateHighlight() {
    highlightNodes.clear();
    highlightLinks.clear();

    const targetNode = selectedNode || hoverNode;

    if (targetNode) {
        highlightNodes.add(targetNode);
        if (targetNode.neighbors) {
            targetNode.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
        }
        if (targetNode.links) {
            targetNode.links.forEach(link => highlightLinks.add(link));
        }
    }

    Graph
        .nodeColor(Graph.nodeColor())
        .linkColor(Graph.linkColor())
        .linkWidth(Graph.linkWidth())
        .nodeThreeObject(Graph.nodeThreeObject());
}

// Animate the Halo
let startTime = Date.now();
Graph.onEngineTick(() => {
    const time = Date.now() - startTime;
    const scene = Graph.scene();
    scene.traverse((obj) => {
        if (obj.name === 'halo') {
            const scale = 1 + Math.sin(time / 200) * 0.1;
            obj.scale.set(scale, scale, scale);
        }
    });
});


// Configure force physics
Graph.d3Force('charge').strength(-150);
Graph.d3Force('link').distance(auto => auto.source.id === "CloneForge" ? 100 : 50);

// Make the 3D graph responsive
window.addEventListener('resize', () => {
    Graph.width(elem.clientWidth);
    Graph.height(elem.clientHeight);
});
