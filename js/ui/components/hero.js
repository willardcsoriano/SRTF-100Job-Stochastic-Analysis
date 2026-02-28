// js/ui/components/hero.js

export function renderHero() {
    return `
        <div class="hero">
            <div class="hero-label">Live Simulation · 100 Jobs</div>
            <h1><span class="hl">SRTF</span><br>Scheduling</h1>
            <p>
                Simulates 100 randomly generated CPU jobs to demonstrate how
                Shortest-Remaining-Time-First dynamically selects, interrupts,
                and completes tasks over time.
            </p>
        </div>
    `;
}