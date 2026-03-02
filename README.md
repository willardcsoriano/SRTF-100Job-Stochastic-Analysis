# SRTF 100-Job Scheduling Simulation

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Status](https://img.shields.io/badge/status-active-success.svg)

---

## Overview

This project is a **client-side web simulation** of the **Shortest Remaining Time First (SRTF)** CPU scheduling algorithm.

It demonstrates how SRTF behaves under a **randomized workload of 100 processes**, allowing users to visually observe scheduling decisions, preemption behavior, and performance metrics directly in the browser.

The application is implemented as a **static website** — all simulation logic runs locally using JavaScript with no backend or server-side computation.

**Live Demo:**
https://willardcsoriano.github.io/SRTF-100Job-Stochastic-Analysis/

---

## Purpose

The simulator is designed for:

* Operating Systems coursework
* Algorithm visualization
* Scheduling behavior experimentation
* Educational demonstration of preemptive CPU scheduling

Rather than performing large-scale research analysis, the project focuses on **interactive learning and visualization** of scheduling mechanics.

---

## Simulation Model

Each simulation run generates:

* **100 randomized processes**
* Arrival Time (AT): `1–7`
* Burst Time (BT): `1–10`
* Preemptive execution using SRTF rules

At every time step, the scheduler selects the process with the **shortest remaining execution time**, preempting the current job whenever a shorter task arrives.

Because parameters are randomized, every execution produces a unique scheduling timeline.

---

## Features

* Randomized 100-process workload generation
* Accurate SRTF preemptive scheduling logic
* Automatic computation of:

  * Completion Time (CT)
  * Turnaround Time (TAT)
  * Waiting Time (WT)
  * Average Waiting & Turnaround Time
* Interactive sortable results table
* Dynamic Gantt Chart visualization
* Built-in algorithm explanations
* Fully client-side execution
* Responsive dashboard-style interface

---

## How It Works

1. Processes enter the ready queue once `Arrival Time ≤ current time`.
2. The scheduler selects the job with the smallest remaining burst time.
3. Execution advances in single time units.
4. Incoming shorter jobs trigger preemption.
5. CPU activity is recorded in a Gantt timeline.
6. Final performance metrics are calculated after completion.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/willardcsoriano/SRTF-100Job-Stochastic-Analysis.git
cd SRTF-100Job-Stochastic-Analysis
```

Open directly in a browser:

```bash
index.html
```

Or run a lightweight local server:

```bash
python -m http.server 8000
```

Then visit:

```
http://localhost:8000
```

---

## Usage

1. Open the application.
2. Click **Run 100-Job Simulation**.
3. View:

   * Generated process table
   * Computed averages
   * Execution Gantt chart
4. Run again to generate a new randomized workload.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES Modules)
* MathJax (formula rendering)
* GitHub Pages (deployment)

---

## Project Structure

```
SRTF-100Job-Stochastic-Analysis/
│
├── index.html
├── favicon.ico
├── README.md
├── LICENSE
│
├── assets/
│   └── icons/
│
├── styles/
│   └── styles.css
│
├── scripts/
│   │   main.js              # application entry point
│   │
│   ├── engine/              # scheduling logic (pure logic)
│   │   ├── srtf.js
│   │   └── metrics.js
│   │
│   ├── models/
│   │   └── Process.js
│   │
│   ├── ui/
│   │   │   domEvents.js
│   │   │
│   │   ├── renderers/       # output visualizers
│   │   │   ├── ganttRenderer.js
│   │   │   ├── summaryRenderer.js
│   │   │   └── tableRenderer.js
│   │   │
│   │   └── components/      # reusable UI sections
│   │       ├── hero.js
│   │       ├── overview.js
│   │       ├── legend.js
│   │       ├── controls.js
│   │       └── resultsPlaceholder.js
│
└── docs/
    └── screenshots/
```

---

## License

Licensed under the **MIT License**.
See [LICENSE](LICENSE) for details.
