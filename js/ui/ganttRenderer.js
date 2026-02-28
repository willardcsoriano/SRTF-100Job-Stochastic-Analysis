// js/ui/ganttRenderer.js

export function renderGantt(ganttData, maxTime = 20) {
    const colors = [
        '#00e5a0', '#3b7aff', '#f59e0b', '#f472b6',
        '#a78bfa', '#34d399', '#fb923c', '#22d3ee',
        '#e879f9', '#4ade80'
    ];

    let blocksHTML = '';

    ganttData.forEach(block => {
        if (block.start >= maxTime) return;
        const duration = Math.min(block.end, maxTime) - block.start;
        if (duration <= 0) return;

        const widthPercent = (duration / maxTime) * 100;
        const isIdle = block.pid === -1;
        const color = isIdle ? '#1e2740' : colors[(block.pid - 1) % colors.length];
        const label = isIdle ? 'IDLE' : `P${block.pid}`;

        blocksHTML += `
            <div class="g-block" style="width:${widthPercent}%; background:${color}; border-color:${color};">
                <span class="g-block-label" style="color:${isIdle ? '#4a5568' : '#0a0c10'}">${label}</span>
            </div>
        `;
    });

    // Time axis labels
    let axisHTML = `<div class="g-tick" style="left:0%">0</div>`;
    let cursor = 0;
    ganttData.forEach(block => {
        if (block.start >= maxTime) return;
        const end = Math.min(block.end, maxTime);
        const pct = (end / maxTime) * 100;
        axisHTML += `<div class="g-tick" style="left:${pct}%">${end}</div>`;
        cursor = end;
    });

    return `
        <div class="r-card" style="margin-bottom:24px;">
            <div class="r-card-header">
                <div class="r-card-line"></div>
                <div class="r-card-title">Gantt Chart <span class="r-card-sub">— First ${maxTime} Time Units</span></div>
            </div>
            <div class="r-card-body">
                <div class="g-chart">${blocksHTML}</div>
                <div class="g-axis">${axisHTML}</div>
            </div>
        </div>
    `;
}