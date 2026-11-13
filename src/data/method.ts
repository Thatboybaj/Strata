// The five phases of the STRATA method (Services page).
export const phases = [
  { n: 'I', label: 'Phase I — On site', title: 'The <em>Expedition</em>', img: 'field',
    text: 'Before any brief is fixed, a small team lives on the site. We walk it at every hour, record wind, light, water and movement, and speak with the people and scientists who know it best.',
    logs: [['Duration', ['2–6 weeks']], ['Team', ['2 architects', '1 field scientist', 'A local guide']], ['You receive', ['Field journal', 'Site film and recordings']]] },
  { n: 'II', label: 'Phase II — Studio', title: 'The <em>Observation</em>', img: null,
    text: 'Back in the studio, notes become evidence: climate models, ground surveys, ecological baselines and seasonal maps. The landscape’s constraints become the project’s rules.',
    logs: [['Duration', ['4–8 weeks']], ['You receive', ['Site atlas', 'Constraints map', 'Ecological baseline']]] },
  { n: 'III', label: 'Phase III — Design', title: 'The <em>First Line</em>', img: 'leave',
    text: 'Only now do we draw. Proposals are tested against the atlas, not against precedent. Many sites ask for less building than the brief expected — we tell you when that is the case.',
    logs: [['Duration', ['3–6 months']], ['You receive', ['Concept design', 'Models and drawings', 'Permitting package']]] },
  { n: 'IV', label: 'Phase IV — Construction', title: 'The <em>Build</em>', img: null,
    text: 'We plan around seasons, not schedules. Prefabrication, local materials and small crews keep the footprint light and the site recoverable at every stage.',
    logs: [['Duration', ['One or more seasons']], ['You receive', ['Logistics plan', 'Site supervision', 'Material passports']]] },
  { n: 'V', label: 'Phase V — Afterlife', title: 'What We <em>Leave Behind</em>', img: 'volcanic',
    text: 'Every commission ends with the land, not the handover. We restore disturbed ground and return to monitor the site for years after the build.',
    logs: [['Duration', ['5–10 years']], ['You receive', ['Restoration plan', 'Annual monitoring reports']]] },
] as const;

export const scope = [
  { t: 'Research Stations', n: '12 built' },
  { t: 'Observatories', n: '7 built' },
  { t: 'Private Residences', n: '18 built' },
  { t: 'Retreats and Lodges', n: '9 built' },
  { t: 'Shelters and Civic Huts', n: '6 built' },
];

export const steps = [
  { t: '01 — Write to us', d: 'Tell us about the place, not the building. Coordinates are a good start.' },
  { t: '02 — A first conversation', d: 'Within two weeks, a partner calls to talk through the site and the timing.' },
  { t: '03 — A scouting visit', d: 'If it is a fit, we plan a short scouting trip before any fee proposal.' },
  { t: '04 — The expedition', d: 'Phase I starts in the next available field season window.' },
];
