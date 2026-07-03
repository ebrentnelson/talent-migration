/* ============================================================
   CONTENT
   All copy lives here so you can edit text without touching
   layout. Replace the [dummy] fields with your real research.
   ============================================================ */

export const NAV_ITEMS = [
  { id: 'introduction', label: 'Intro' },
  { id: 'analysis',     label: 'Analysis' },
  { id: 'evidence',     label: 'Evidence' },
  { id: 'impact',       label: 'Impact' },
  { id: 'reflection',   label: 'Reflection' },
  { id: 'references',   label: 'References' },
]

/* Three sociological theories. Swap descriptions/reveals as needed. */
export const THEORIES = [
  {
    name: 'World-Systems Theory',
    thinker: 'Wallerstein',
    description:
      '[Dummy] Frames the globe as core, semi-periphery, and periphery nations bound by unequal exchange, where wealthy cores extract value from poorer peripheries.',
    reveals:
      'Recasts recruitment as athletic-labor extraction: core U.S. programs draw running talent from peripheral nations, converting it into wins and revenue.',
  },
  {
    name: 'Global Sport Migration',
    thinker: 'Maguire · Appadurai',
    description:
      '[Dummy] Maps sport as a set of global flows and migrant "types" (pioneers, settlers, mercenaries, cosmopolitans), shaped by Appadurai\u2019s ethno- and financescapes.',
    reveals:
      'Names the migrant athlete\u2019s role and motives, showing recruitment as part of a patterned global movement rather than isolated individual choice.',
  },
  {
    name: 'Habitus & Capital',
    thinker: 'Bourdieu',
    description:
      '[Dummy] Explains how embodied dispositions (habitus) and forms of capital — including physical capital, the trained body — are produced, valued, and converted within a field.',
    reveals:
      'Shows the athlete\u2019s body as embodied capital converted into scholarships and status, and how the "field" sets the exchange rate.',
  },
]

/* Evidence sources: mix of peer-reviewed + media. */
export const SOURCES = [
  {
    type: 'scholar',
    title: 'The Brawn Drain: Foreign Student-Athletes in American Universities',
    cite: '[Dummy] Bale, J. (1991). University of Illinois Press.',
    finding: 'Foundational account of international recruitment into U.S. collegiate sport and its consequences.',
  },
  {
    type: 'scholar',
    title: 'Global Sport: Identities, Societies, Civilizations',
    cite: '[Dummy] Maguire, J. (1999). Polity Press.',
    finding: 'Develops the typology of sport labor migrants and the flows that structure global sport.',
  },
  {
    type: 'scholar',
    title: 'Placeholder journal article on East African running migration',
    cite: '[Dummy] Author, A. (Year). Sociology of Sport Journal, vol(iss), pp\u2013pp.',
    finding: 'Summarize the key finding from this peer-reviewed article here.',
  },
  {
    type: 'scholar',
    title: 'Placeholder article on habitus / physical capital in sport',
    cite: '[Dummy] Author, B. (Year). Intl. Review for the Sociology of Sport, vol(iss).',
    finding: 'Summarize how this source applies Bourdieu to athletic labor.',
  },
  {
    type: 'scholar',
    title: 'Placeholder article on dependency / neocolonial critique',
    cite: '[Dummy] Author, C. (Year). Journal of Sport & Social Issues, vol(iss).',
    finding: 'Summarize the sending-nation / extraction argument here.',
  },
  {
    type: 'media',
    title: 'NCAA participation & demographics report',
    cite: '[Dummy] NCAA Research (Year). ncaa.org.',
    finding: 'Official participation data to ground the international-athlete claims.',
  },
  {
    type: 'media',
    title: 'Reputable reporting on the 2025 XC championships',
    cite: '[Dummy] Outlet (2025). Track & Field News / LetsRun.',
    finding: 'Journalistic account of team composition and results.',
  },
]

/* Illustrative results table — REPLACE with verified data. */
export const RESULTS_2025 = [
  { pos: 1, name: 'Athlete One',   team: 'New Mexico',       nat: 'ERI', time: '28:33.9' },
  { pos: 2, name: 'Athlete Two',   team: 'Wake Forest',      nat: 'USA', time: '28:38.0' },
  { pos: 3, name: 'Athlete Three', team: 'Washington State', nat: 'KEN', time: '28:40.1' },
  { pos: 4, name: 'Athlete Four',  team: 'Oklahoma State',   nat: 'KEN', time: '28:41.2' },
  { pos: 5, name: 'Athlete Five',  team: 'Oklahoma State',   nat: 'MAR', time: '28:42.8' },
]

/* Placeholder trend data for the CSS bar chart. */
export const TREND_DATA = [
  { year: '2005', pct: 18 },
  { year: '2010', pct: 27 },
  { year: '2015', pct: 39 },
  { year: '2020', pct: 52 },
  { year: '2025', pct: 68 },
]

/* Real-world impact stakeholders. */
export const IMPACTS = [
  { who: 'Athletes',        body: '[Dummy] Opportunity, education, and mobility set against eligibility-driven recruitment, identity, and belonging.' },
  { who: 'Coaches',         body: '[Dummy] Recruiting incentives, roster strategy, and the pressure to win reshaping how programs are built.' },
  { who: 'Administrators',  body: '[Dummy] Scholarship allocation, compliance, and the optics of team composition.' },
  { who: 'Fans & Community',body: '[Dummy] Questions of representation, local pipelines, and who the team is understood to belong to.' },
  { who: 'Governing Bodies',body: '[Dummy] Eligibility rules, age limits, and policy responses to the flow of talent.' },
  { who: 'Sending Nations', body: '[Dummy] Loss of homegrown talent weighed against remittances, exposure, and development.' },
]

/* APA-style references. Basic italics allowed via <em>. */
export const REFERENCES = [
  'Bale, J. (1991). <em>The brawn drain: Foreign student-athletes in American universities</em>. University of Illinois Press.',
  'Maguire, J. (1999). <em>Global sport: Identities, societies, civilizations</em>. Polity Press.',
  'Author, A. (Year). Title of the article. <em>Sociology of Sport Journal, vol</em>(iss), pp\u2013pp.',
  'Author, B. (Year). Title of the article. <em>International Review for the Sociology of Sport, vol</em>(iss), pp\u2013pp.',
  'Author, C. (Year). Title of the article. <em>Journal of Sport and Social Issues, vol</em>(iss), pp\u2013pp.',
  'NCAA Research. (Year). <em>Title of report</em>. NCAA. https://www.ncaa.org/',
  'Outlet. (2025, Month Day). Title of the news article. <em>Track &amp; Field News</em>. https://example.com/',
]
