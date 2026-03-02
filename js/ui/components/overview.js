// js/ui/components/overview.js

export function renderOverview() {
    return `
        <div class="section">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-line"></div>
                    <div class="card-title">What Is This Simulation Doing?</div>
                </div>
                <div class="card-body">
                    <div class="overview-grid">

                        <div class="overview-text">
                            <p>
                                A CPU can only execute <strong>one task at a time</strong>.
                                This simulator shows how the system continuously decides
                                which job should run next when many jobs compete for
                                processing time.
                            </p>
                            <p>
                                Instead of completing tasks in arrival order, SRTF always
                                prioritizes the job that can finish the fastest.
                                If a shorter job arrives, the running task may
                                <strong>pause</strong> so the quicker one completes first.
                            </p>
                            <div class="analogy-box">
                                <div class="label">Everyday Analogy</div>
                                <p>
                                    Imagine a cashier. If someone buying only one item arrives
                                    while another customer has a full cart — letting the quick
                                    customer go first reduces total waiting time for everyone.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div class="observe-list">
                                <div class="label">Observe As It Runs</div>
                                <div class="observe-item">
                                    <div class="dot"></div>
                                    Which jobs execute immediately after arrival
                                </div>
                                <div class="observe-item">
                                    <div class="dot"></div>
                                    How often the CPU switches between tasks
                                </div>
                                <div class="observe-item">
                                    <div class="dot"></div>
                                    How short jobs finish rapidly while long ones wait
                                </div>
                                <div class="observe-item">
                                    <div class="dot"></div>
                                    The relationship between burst time and wait time
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `;
}