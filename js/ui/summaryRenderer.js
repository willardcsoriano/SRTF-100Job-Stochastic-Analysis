// js/ui/summaryRenderer.js

export function renderSummary({ avgWT, avgTAT }) {
    return `
        <div class="r-summary">
            <div class="r-summary-label">// Simulation Complete</div>
            <h2 class="r-summary-title">Summary Statistics</h2>

            <div class="r-summary-stats">
                <div class="r-stat-card">
                    <div class="r-stat-value">${avgWT.toFixed(2)}</div>
                    <div class="r-stat-label">Avg. Waiting Time</div>
                    <div class="r-stat-sub">WT = TAT − BT</div>
                </div>
                <div class="r-stat-divider"></div>
                <div class="r-stat-card">
                    <div class="r-stat-value accent2">${avgTAT.toFixed(2)}</div>
                    <div class="r-stat-label">Avg. Turnaround Time</div>
                    <div class="r-stat-sub">TAT = CT − AT</div>
                </div>
            </div>
        </div>
    `;
}