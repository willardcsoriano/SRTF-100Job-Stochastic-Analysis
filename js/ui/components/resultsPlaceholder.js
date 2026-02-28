// js/ui/components/resultsPlaceholder.js

export function renderResultsPlaceholder() {
    return `
        <div class="results-placeholder">
            <div class="icon">⚙️</div>
            <h2 class="cursor">Ready to Execute</h2>
            <p>
                Click <b>Run Simulation</b> to generate jobs,
                compute scheduling metrics, and visualize CPU execution.
            </p>
        </div>
    `;
}