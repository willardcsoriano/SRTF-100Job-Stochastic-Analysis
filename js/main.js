// main.js

import { Process } from "./models/Process.js";
import { runSRTF } from "./core/srtf.js";
import { calculateAverages } from "./core/metrics.js";

import { renderHero }               from "./ui/components/hero.js";
import { renderOverview }           from "./ui/components/overview.js";
import { renderControls }           from "./ui/components/controls.js";
import { renderLegend }             from "./ui/components/legend.js";
import { renderResultsPlaceholder } from "./ui/components/resultsPlaceholder.js";

import { renderGantt }   from "./ui/ganttRenderer.js";
import { renderTable }   from "./ui/tableRenderer.js";
import { renderSummary } from "./ui/summaryRenderer.js";
import { attachDOMEvents } from "./ui/domEvents.js";


// ===============================================================
// Mount static page sections into #app
// ===============================================================
function mountApp() {
    const app = document.getElementById("app");

    app.innerHTML = `
        ${renderHero()}
        ${renderOverview()}
        ${renderControls()}
        ${renderLegend()}
        <div class="spacer"></div>
        <div class="section">
            <section id="results">
                ${renderResultsPlaceholder()}
            </section>
        </div>
    `;
}


// ===============================================================
// Generate random processes
// ===============================================================
function generateRandomProcesses(count = 100) {
    const processes = [];

    for (let i = 0; i < count; i++) {
        const bt  = Math.floor(Math.random() * 10) + 1; // 1–10
        const art = Math.floor(Math.random() * 7)  + 1; // 1–7
        processes.push(new Process(i + 1, bt, art));
    }

    processes.sort((a, b) => a.art - b.art);
    return processes;
}


// ===============================================================
// Render simulation output into #results
// ===============================================================
function renderAll(results, gantt) {
    const resultsSection = document.getElementById("results");

    const averages    = calculateAverages(results);
    const summaryHTML = renderSummary(averages);
    const ganttHTML   = renderGantt(gantt);
    const tableHTML   = renderTable(results);

    resultsSection.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:24px;">
            ${summaryHTML}
            ${ganttHTML}
            ${tableHTML}
        </div>
    `;
}


// ===============================================================
// Run simulation
// ===============================================================
function simulate() {
    const processes = generateRandomProcesses(100);
    const { results, gantt } = runSRTF(processes);
    renderAll(results, gantt);
    window._currentResults = results;
    window._currentGantt   = gantt;
}


// ===============================================================
// Sort table
// ===============================================================
function sortResults(criteria) {
    if (!window._currentResults) return;

    const keyMap = {
        Job:        "pid",
        Arrival:    "art",
        Burst:      "bt",
        Completion: "ct",
        Turnaround: "tat",
        Waiting:    "wt",
    };

    const key    = keyMap[criteria];
    const sorted = [...window._currentResults].sort((a, b) => a[key] - b[key]);

    renderAll(sorted, window._currentGantt);
    window._currentResults = sorted;
}


// ===============================================================
// Boot
// ===============================================================
mountApp();

attachDOMEvents({
    onRunSimulation: simulate,
    onSort: sortResults
});