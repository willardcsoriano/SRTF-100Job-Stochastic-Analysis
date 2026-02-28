// js/ui/tableRenderer.js

export function renderTable(results, sortHandlerName = "sortResults") {
    const headers = [
        { label: 'Job',        key: 'Job' },
        { label: 'Arrival',    key: 'Arrival' },
        { label: 'Burst',      key: 'Burst' },
        { label: 'Completion', key: 'Completion' },
        { label: 'TAT',        key: 'Turnaround' },
        { label: 'WT',         key: 'Waiting' },
    ];

    const headHTML = headers.map(h => `
        <th class="t-th" onclick="${sortHandlerName}('${h.key}')" title="Sort by ${h.label}">
            ${h.label} <span class="t-sort-icon">↕</span>
        </th>
    `).join('');

    const rowsHTML = results.map((p, i) => `
        <tr class="t-row ${i % 2 === 0 ? '' : 't-row-alt'}">
            <td class="t-td t-pid">P${p.pid}</td>
            <td class="t-td">${p.art}</td>
            <td class="t-td">${p.bt}</td>
            <td class="t-td">${p.ct}</td>
            <td class="t-td t-tat">${p.tat}</td>
            <td class="t-td t-wt">${p.wt}</td>
        </tr>
    `).join('');

    return `
        <div class="r-card">
            <div class="r-card-header">
                <div class="r-card-line" style="background:var(--accent2)"></div>
                <div class="r-card-title">Process Table <span class="r-card-sub">— Click headers to sort</span></div>
            </div>
            <div class="r-card-body" style="padding-top:0;">
                <div class="t-scroll">
                    <table class="t-table">
                        <thead><tr>${headHTML}</tr></thead>
                        <tbody>${rowsHTML}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}