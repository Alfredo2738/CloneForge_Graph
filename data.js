export const graphData = {
    nodes: [
        // Central Concept
        { id: "CloneForge", group: 1, label: "CloneForge", description: "An AI that predicts and mirrors implicit intent using embeddings, persistent memory, and emotional valence.", val: 10 },
        
        // Problem Domain
        { id: "Core Problem", group: 2, label: "Core Problem", description: "AI agents fail at interpreting implicit intent, causing 'snowball errors'.", val: 8 },
        { id: "Implicit Gaps", group: 2, label: "Implicit Gaps", description: "Users implies contextual reference, not just advice.", val: 5 },
        { id: "Lack of Persistence", group: 2, label: "Lack of Persistence", description: "One-off interactions ignore crucial context.", val: 5 },
        { id: "Emotional Disconnect", group: 2, label: "Emotional Disconnect", description: "Responses lack emotional tone, feeling robotic.", val: 5 },

        // Market
        { id: "Market Context", group: 3, label: "Market Context", description: "AI empathy market projected at $50B+ by 2030.", val: 7 },
        { id: "Target Audience", group: 3, label: "Target Audience", description: "AI enthusiasts, therapists, customer teams.", val: 5 },
        
        // Solution Domain
        { id: "Our Solution", group: 4, label: "Our Solution", description: "Mirrored clone layer.", val: 8 },
        { id: "Private Inputs", group: 4, label: "Private Inputs", description: "Text/behavior converted to dense vectors.", val: 5 },
        { id: "Prediction Engine", group: 4, label: "Prediction Engine", description: "Combines historical embeddings with real-time queries.", val: 5 },
        { id: "Empathetic Outputs", group: 4, label: "Empathetic Outputs", description: "Text and voiced responses infused with appropriate emotional valence.", val: 5 },

        // Tech Stack
        { id: "Tech Stack", group: 5, label: "Tech Stack", description: "Technologies used to build CloneForge.", val: 8 },
        { id: "n8n", group: 5, label: "n8n", description: "Workflow orchestration.", val: 4 },
        { id: "Qdrant", group: 5, label: "Qdrant", description: "Vector DB.", val: 4 },
        { id: "Grok API", group: 5, label: "Grok API", description: "Embeddings and Prediction logic.", val: 4 },
        { id: "Eleven Labs", group: 5, label: "Eleven Labs", description: "Text-to-Speech (TTS).", val: 4 },
        { id: "Valence", group: 5, label: "Valence", description: "Emotion scoring API.", val: 4 },
        { id: "AWS", group: 5, label: "AWS", description: "Hosting (EC2/Lambda).", val: 4 },
        { id: "Streamlit", group: 5, label: "Streamlit", description: "Frontend and input forms.", val: 4 },

        // Business Model
        { id: "Business Model", group: 6, label: "Business Model", description: "Monetization and Costs.", val: 7 },
        { id: "Freemium Strategy", group: 6, label: "Freemium", description: "Basic mirroring free; premium for multimodal/agentic ($9.99/mo).", val: 5 },
        { id: "MVP Costs", group: 6, label: "Low MVP Costs", description: "<$20/month total.", val: 5 },
        
        // Milestones
        { id: "Milestones", group: 7, label: "Milestones", description: "Roadmap to launch.", val: 6 },
        { id: "Phase 1: Setup", group: 7, label: "Setup", description: "Days 1-2: Infra ready.", val: 3 },
        { id: "Phase 2: Core Logic", group: 7, label: "Core Logic", description: "Days 3-5: End-to-end test.", val: 3 },
        { id: "Phase 3: Integrations", group: 7, label: "Integrations", description: "Days 6-8: Valence + TTS.", val: 3 },
        { id: "Phase 4: Demo Polish", group: 7, label: "Demo Polish", description: "Days 9-10: Shareable link.", val: 3 },

        // Ask
        { id: "The Ask", group: 8, label: "The Ask", description: "$50k seed for full launch.", val: 7 },

        // Personality Matrix
        { id: "Personality Types", group: 9, label: "Personality Types", description: "Core classifications of personalities.", val: 8 },
        
        { id: "Analysts", group: 10, label: "Analysts", description: "Rational and impartial.", val: 6 },
        { id: "Diplomats", group: 10, label: "Diplomats", description: "Empathetic and cooperative.", val: 6 },
        { id: "Sentinels", group: 10, label: "Sentinels", description: "Practical and fact-minded.", val: 6 },
        { id: "Explorers", group: 10, label: "Explorers", description: "Spontaneous and energetic.", val: 6 },
        
        { id: "INTJ (Architect)", group: 11, label: "INTJ", description: "Strategic thinkers with a plan for everything.", val: 5 },
        { id: "INFP (Mediator)", group: 11, label: "INFP", description: "Poetic, kind and altruistic people.", val: 5 },
        { id: "ESTJ (Executive)", group: 11, label: "ESTJ", description: "Excellent administrators, unsurpassed at managing things.", val: 5 },
        { id: "ESTP (Entrepreneur)", group: 11, label: "ESTP", description: "Smart, energetic and very perceptive people.", val: 5 },

        // INTJ Characteristics
        { id: "INTJ Behavior", group: 12, label: "Behavior: Logical", description: "Strategic, highly analytical, works independently.", val: 3 },
        { id: "INTJ Tastes", group: 12, label: "Tastes: Complex", description: "Sci-fi, strategy games, minimalist aesthetics.", val: 3 },
        { id: "INTJ Dating", group: 12, label: "Dating: Sapiosexual", description: "Values intellect and deep philosophical conversations.", val: 3 },
        { id: "INTJ Mood", group: 12, label: "Mood: Focused", description: "Contemplative, reserved, and outcome-oriented.", val: 3 },
        { id: "INTJ Valence", group: 12, label: "Valence: Neutral", description: "Objective, lower emotional expressiveness.", val: 3 },

        // INFP Characteristics
        { id: "INFP Behavior", group: 12, label: "Behavior: Idealistic", description: "Empathetic, creative, guided by core values.", val: 3 },
        { id: "INFP Tastes", group: 12, label: "Tastes: Expressive", description: "Indie fiction, poetry, emotionally resonant art.", val: 3 },
        { id: "INFP Dating", group: 12, label: "Dating: Soulmate", description: "Seeks profound, authentic emotional connection.", val: 3 },
        { id: "INFP Mood", group: 12, label: "Mood: Dreamy", description: "Reflective, melancholic, hopeful.", val: 3 },
        { id: "INFP Valence", group: 12, label: "Valence: Warm", description: "Highly sensitive and positively attuned.", val: 3 },

        // ESTJ Characteristics
        { id: "ESTJ Behavior", group: 12, label: "Behavior: Organized", description: "Structured, rule-abiding, takes charge.", val: 3 },
        { id: "ESTJ Tastes", group: 12, label: "Tastes: Traditional", description: "Classic literature, practical tools, historical docs.", val: 3 },
        { id: "ESTJ Dating", group: 12, label: "Dating: Traditional", description: "Values loyalty, stability, and clear expectations.", val: 3 },
        { id: "ESTJ Mood", group: 12, label: "Mood: Decisive", description: "Assertive, grounded, highly predictable.", val: 3 },
        { id: "ESTJ Valence", group: 12, label: "Valence: Direct", description: "Action-oriented, blunt but honest.", val: 3 },

        // ESTP Characteristics
        { id: "ESTP Behavior", group: 12, label: "Behavior: Bold", description: "Action-oriented, risk-taking, sociable.", val: 3 },
        { id: "ESTP Tastes", group: 12, label: "Tastes: Thrilling", description: "Action movies, competitive sports, fast cars.", val: 3 },
        { id: "ESTP Dating", group: 12, label: "Dating: Adventurous", description: "Exciting, spontaneous, enjoys the chase.", val: 3 },
        { id: "ESTP Mood", group: 12, label: "Mood: Energetic", description: "Upbeat, restless, easily bored.", val: 3 },
        { id: "ESTP Valence", group: 12, label: "Valence: High Energy", description: "Enthusiastic, reactive, intensely present.", val: 3 }
    ],
    links: [
        { source: "CloneForge", target: "Core Problem", value: 2 },
        { source: "Core Problem", target: "Implicit Gaps", value: 1 },
        { source: "Core Problem", target: "Lack of Persistence", value: 1 },
        { source: "Core Problem", target: "Emotional Disconnect", value: 1 },

        { source: "CloneForge", target: "Market Context", value: 2 },
        { source: "Market Context", target: "Target Audience", value: 1 },

        { source: "CloneForge", target: "Our Solution", value: 3 },
        { source: "Our Solution", target: "Private Inputs", value: 1 },
        { source: "Our Solution", target: "Prediction Engine", value: 1 },
        { source: "Our Solution", target: "Empathetic Outputs", value: 1 },
        
        { source: "CloneForge", target: "Tech Stack", value: 2 },
        { source: "Tech Stack", target: "n8n", value: 1 },
        { source: "Tech Stack", target: "Qdrant", value: 1 },
        { source: "Tech Stack", target: "Grok API", value: 1 },
        { source: "Tech Stack", target: "Eleven Labs", value: 1 },
        { source: "Tech Stack", target: "Valence", value: 1 },
        { source: "Tech Stack", target: "AWS", value: 1 },
        { source: "Tech Stack", target: "Streamlit", value: 1 },

        { source: "CloneForge", target: "Business Model", value: 2 },
        { source: "Business Model", target: "Freemium Strategy", value: 1 },
        { source: "Business Model", target: "MVP Costs", value: 1 },

        { source: "CloneForge", target: "Milestones", value: 1 },
        { source: "Milestones", target: "Phase 1: Setup", value: 1 },
        { source: "Phase 1: Setup", target: "Phase 2: Core Logic", value: 1 },
        { source: "Phase 2: Core Logic", target: "Phase 3: Integrations", value: 1 },
        { source: "Phase 3: Integrations", target: "Phase 4: Demo Polish", value: 1 },

        { source: "CloneForge", target: "The Ask", value: 2 },

        { source: "CloneForge", target: "Personality Types", value: 2 },
        
        { source: "Personality Types", target: "Analysts", value: 1 },
        { source: "Personality Types", target: "Diplomats", value: 1 },
        { source: "Personality Types", target: "Sentinels", value: 1 },
        { source: "Personality Types", target: "Explorers", value: 1 },
        
        { source: "Analysts", target: "INTJ (Architect)", value: 1 },
        { source: "Diplomats", target: "INFP (Mediator)", value: 1 },
        { source: "Sentinels", target: "ESTJ (Executive)", value: 1 },
        { source: "Explorers", target: "ESTP (Entrepreneur)", value: 1 },

        { source: "INTJ (Architect)", target: "INTJ Behavior", value: 1 },
        { source: "INTJ (Architect)", target: "INTJ Tastes", value: 1 },
        { source: "INTJ (Architect)", target: "INTJ Dating", value: 1 },
        { source: "INTJ (Architect)", target: "INTJ Mood", value: 1 },
        { source: "INTJ (Architect)", target: "INTJ Valence", value: 1 },

        { source: "INFP (Mediator)", target: "INFP Behavior", value: 1 },
        { source: "INFP (Mediator)", target: "INFP Tastes", value: 1 },
        { source: "INFP (Mediator)", target: "INFP Dating", value: 1 },
        { source: "INFP (Mediator)", target: "INFP Mood", value: 1 },
        { source: "INFP (Mediator)", target: "INFP Valence", value: 1 },

        { source: "ESTJ (Executive)", target: "ESTJ Behavior", value: 1 },
        { source: "ESTJ (Executive)", target: "ESTJ Tastes", value: 1 },
        { source: "ESTJ (Executive)", target: "ESTJ Dating", value: 1 },
        { source: "ESTJ (Executive)", target: "ESTJ Mood", value: 1 },
        { source: "ESTJ (Executive)", target: "ESTJ Valence", value: 1 },

        { source: "ESTP (Entrepreneur)", target: "ESTP Behavior", value: 1 },
        { source: "ESTP (Entrepreneur)", target: "ESTP Tastes", value: 1 },
        { source: "ESTP (Entrepreneur)", target: "ESTP Dating", value: 1 },
        { source: "ESTP (Entrepreneur)", target: "ESTP Mood", value: 1 },
        { source: "ESTP (Entrepreneur)", target: "ESTP Valence", value: 1 }
    ]
};
