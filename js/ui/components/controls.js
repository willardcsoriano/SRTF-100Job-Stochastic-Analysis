// js/ui/components/controls.js

export function renderControls() {
    return `
        <div class="spacer"></div>
        <div class="section">
            <div class="card">
                <div class="card-body" style="padding:28px;">
                    <div class="controls-row">
                        <button id="runSimulationButton" class="btn btn-primary">
                            ▶ Run 100-Job Simulation
                        </button>
                        <button id="toggleExplanations" class="btn btn-secondary">
                            📘 Show Legend
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}