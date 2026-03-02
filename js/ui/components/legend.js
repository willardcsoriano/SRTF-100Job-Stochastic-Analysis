// js/ui/components/legend.js

export function renderLegend() {
    return `
        <div class="spacer"></div>
        <div class="section">
            <div id="explanations" class="hidden">
                <div class="card">
                    <div class="card-header">
                        <div class="card-header-line" style="background:var(--accent2);"></div>
                        <div class="card-title">Legend & Internals</div>
                    </div>
                    <div class="card-body">
                        <div class="legend-grid">

                            <div class="legend-card">
                                <h3>Process Table Fields</h3>
                                <div class="legend-row">
                                    <span class="legend-key">PID</span>
                                    <span class="legend-val">Unique job identifier</span>
                                </div>
                                <div class="legend-row">
                                    <span class="legend-key">AT</span>
                                    <span class="legend-val">Arrival Time — when the job enters the queue</span>
                                </div>
                                <div class="legend-row">
                                    <span class="legend-key">BT</span>
                                    <span class="legend-val">Burst Time — total CPU work required</span>
                                </div>
                                <div class="legend-row">
                                    <span class="legend-key">CT</span>
                                    <span class="legend-val">Completion Time — when execution finishes</span>
                                </div>
                                <div class="legend-row">
                                    <span class="legend-key">TAT</span>
                                    <span class="legend-val">Turnaround = CT − AT</span>
                                </div>
                                <div class="legend-row">
                                    <span class="legend-key">WT</span>
                                    <span class="legend-val">Waiting Time = TAT − BT</span>
                                </div>
                                <p style="font-size:12px; color:var(--muted); margin-top:14px; font-family:'JetBrains Mono',monospace;">
                                    Only AT and BT exist before running. All other values emerge after simulation.
                                </p>
                            </div>

                            <div class="legend-card">
                                <h3>Scheduler Decision Engine</h3>
                                <div class="steps-list">
                                    <div class="step-item">
                                        <div class="step-num">1</div>
                                        <span>Clock starts at <code style="color:var(--accent)">t = 0</code></span>
                                    </div>
                                    <div class="step-item">
                                        <div class="step-num">2</div>
                                        <span>Arriving jobs enter the ready queue</span>
                                    </div>
                                    <div class="step-item">
                                        <div class="step-num">3</div>
                                        <span>Scheduler selects job with smallest remaining time</span>
                                    </div>
                                    <div class="step-item">
                                        <div class="step-num">4</div>
                                        <span>Job executes for 1 unit → remaining time − 1</span>
                                    </div>
                                    <div class="step-item">
                                        <div class="step-num">5</div>
                                        <span>System re-evaluates all ready jobs</span>
                                    </div>
                                    <div class="step-item">
                                        <div class="step-num">6</div>
                                        <span>If remaining time = 0 → Completion Time recorded</span>
                                    </div>
                                </div>
                                <div class="decision-chips">
                                    <div class="chip chip-green">Continue</div>
                                    <div class="chip chip-blue">Preempt</div>
                                    <div class="chip chip-warn">Complete</div>
                                    <div class="chip chip-gray">Idle</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}