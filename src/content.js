/* ============================================================
   CONTENT
   All copy lives here so you can edit text without touching
   layout. Replace the [dummy] fields with your real research.
   ============================================================ */

export const NAV_ITEMS = [
  { id: 'introduction', label: 'Intro' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'impact', label: 'Impact' },
  { id: 'reflection', label: 'Reflection' },
  { id: 'references', label: 'References' },
]

/* Three sociological theories. Swap descriptions/reveals as needed. */
export const THEORIES = [
  {
    name: 'Global Sport Migration',
    thinker: 'Joseph Maguire',
    description: `
      Maps sport as a set of global flows and migrant "types" that attempt 
      to classify why an athlete leaves their home country and what happens 
      when they do. Some of the types relevant to this study are:

      <ul>
        <li>
          <strong>Mercenary</strong>: Motivated purely by money and earning 
          potential, even if only for short-term gains
        </li>
        <li>
          <strong>Nomadic Cosmopolitan</strong>: Motivated by a desire to 
          experience different nations and cultures
        </li>
        <li>
          <strong>Settler</strong>: Those who ultimately settle in the 
          country they migrate to
        </li>
        <li>
          <strong>Returnee</strong>: Those who, regardless of their 
          motivation for leaving, ultimately return to their home country
        </li>
        <li>
          <strong>Exile/Expelled</strong>: Those coerced or forced to 
          leave their country
        </li>
        <li>
          <strong>Ambitionist</strong>: Those who wish to play at a higher 
          level and must move to do so
        </li>
        <li>
          <strong>Pioneer</strong>: Those who wish to spread their sport 
          to people in the country they migrate to
        </li>
      </ul>
    `,
    reveals: `
      While multiple types likely apply to each migrant NCAA athlete, most 
      fall into the mercenary and ambitionist types. College athletics in 
      the United States is fairly unique. It offers a chance to compete at 
      a high level before turning professional, and with recent NCAA 
      regulation changes, it now comes with monetary benefits too.
      `,
  },
  {
    name: 'World-Systems Theory',
    thinker: 'Immanuel Wallerstein',
    description: `
      Defines the world as a sort of radial gradient. At the core are the 
      rich, powerful nations and at the edges are poorer, weaker nations. 
      The core nations act as magnets and pull resources and labor from the
      fringe countries. 
    `,
    reveals: `
      More migrant athletes come to the United States because the United
      States has money, more robust schools, and a lot of earning potential.
      Athletic talent flows from the edges into the center.
    `,
  },
  {
    name: 'Globalization',
    thinker: '',
    description: `
      Due to modern technology and transportation, the world is seemingly
      smaller than it once was. Culture, sport, language, etc. are no 
      longer bound to a single geographical location. 
    `,
    reveals: `
      Athletes from other countries can attend college in the United 
      States because the world feels much smaller than it once did. 
      Because of things like the internet, sport is no longer confined to 
      one place, but is global in scale.
    `,
  },
  {
    name: 'Habitus & Capital',
    thinker: 'Pierre Bourdieu',
    description: `
      One's life experiences breed habits, skills, and dispositions. 
      Though learned as part of one's social upbringing, they become so 
      deeply ingrained that they feel natural, requiring no conscious effort.
    `,
    reveals: `
      Some runners grow up in places where running long distances every day 
      is just normal life, so they get amazingly good at it without trying to. 
      That "built-in" skill (e.g. the capital) and way of living is their 
      habitus. In other words, it is baked into them by where and how they 
      were raised. Athletes from these places will be years ahead of American
      athletes.
    `,
  },
  {
    name: 'Neocolonialism',
    thinker: 'Kwame Nkrumah',
    description: `
      Similar to colonialism, where one nation would exercise control (often 
      via their military) over another to exploit resources, neocolonialism 
      is the idea that bigger, more developed countries continue to steal
      resources from smaller, less developed countries, but in more subtle
      ways.
    `,
    reveals: `
      The most talented athletes of smaller/developing nations are often 
      lured away from their home nation by larger, wealthier nations. The 
      recruiting nation receives a champion while the home country is left 
      without a star athlete.
    `,
  },
]

/* Evidence sources: mix of peer-reviewed + media. */
export const SOURCES = [
  {
    type: 'scholar',
    title:
      'Sport Labor Migration and Collegiate Sport in the United States:  A Typology of Migrant Athletes',
    cite: 'Love, A., & Seungmo Kim. (2011). Journal of Issues in Intercollegiate Athletics.',
    finding:
      "Expanding on Maguire's work, Love and Kim present a revised typology that categorizes migrant athletes. These categories help explain why international athletes leave their home countries to participate in college sports in the United States.",
  },
  {
    type: 'scholar',
    title:
      'Recruitment of International College Athletes (ICAs) to the United States: A Bourdieuian Examination of Pathways to Success',
    cite: 'Kaur Sethi, S., Hextrum, K., & Pericak, K. (2025). Journal of Issues in Intercollegiate Athletics.',
    finding:
      'NCAA campuses engage in a sociological marketplace where the good being purchased is athletic ability and the currency is scholarships, academic support, life experience, language assistance, and visa applications.',
  },
  {
    type: 'scholar',
    title:
      'Out of Eastern Africa: An Examination of Sport Labour Migration in the Post-Independence Era',
    cite: 'Chepyator-Thomson, J. R., & Ariyo, E. S. (2016). The International Journal of the History of Sport.',
    finding:
      'African athletes leave home to pursue international opportunities because of economic and social motivations. They wish to excel in their sport, and the possibility of turning it into a lucrative profession lets them represent themselves, their families, and their home countries. Because of these motivations, these athletes land in more wealthy countries like the United States and those in Europe.',
  },
  {
    type: 'scholar',
    title: 'Global inequality and athlete labour migration from Kenya',
    cite: 'Simiyu Njororai, W. W. (2010). Leisure/Loisir.',
    finding:
      'Countries like Kenya act as exporters of athletes but struggle to retain athletes for themselves. Many athletes continue to give back to their home countries even after they leave, but there is also a trend where athletes switch allegiance to the countries to which they move. This leads to increased globalization as these athletes spread their culture and tradition to their new homes.',
  },
  {
    type: 'scholar',
    title:
      'Football Academies and the Migration of African Football Labor to Europe',
    cite: 'Darby, P., Akindes, G., & Kirwin, M. (2007). Journal of Sport and Social Issues',
    finding:
      'European soccer clubs have started recruiting African players by establishing academies and schools. The best players are then moved abroad instead of being allowed to continue a tradition of excellence in their home countries. This demonstrates a type of neocolonialism where, instead of claiming land and resources, European countries are laying claim to human athletic talent.',
  },
  {
    type: 'media',
    title: 'A Foreign Wave Rises High In The NCAA',
    cite: 'Hollobaugh, J. (2025). Track & Field News.',
    finding:
      'Changes to NCAA rules have changed the way coaches and teams operate. Due to increased ability to spend money on athletes, many teams are taking advantage of recruiting heavily outside the United States so they can get more skilled, more mature talent internationally. Coaches feel pressured to do so in order to keep their jobs.',
  },
  {
    type: 'media',
    title:
      'Why are there suddenly so many more international runners in NCAA cross country?',
    cite: 'Johnson, R., & Gault, J. (2025, November 25). LetsRun.Com.',
    finding:
      'It is much easier to buy talent than to develop it. The elimination of required standardized test scores make it easy to admit international students. The enforcement of roster limits make it disadvantageous to take chances on developing talent and schools decide to focus on existing, more mature talent instead. The invent of one-stop-shop recruiting services who will do all the hard work finding talent has made things very easy for schools.',
  },
]

export const RESULTS_2025 = [
  {
    pos: 1,
    name: 'Habtom Samuel',
    team: 'New Mexico',
    nat: 'ERI',
    time: '28:33.9',
  },
  {
    pos: 2,
    name: 'Rocky Hansen',
    team: 'Wake Forest',
    nat: 'USA',
    time: '28:38.0',
  },
  {
    pos: 3,
    name: 'Solomon Kipchoge',
    team: 'Washington State',
    nat: 'KEN',
    time: '28:40.1',
  },
  {
    pos: 4,
    name: 'Brian Musau',
    team: 'Oklahoma State',
    nat: 'KEN',
    time: '28:41.2',
  },
  {
    pos: 5,
    name: 'Fouad Messaoudi',
    team: 'Oklahoma State',
    nat: 'MAR',
    time: '28:42.8',
  },
  {
    pos: 6,
    name: 'Denis Kipngetich',
    team: 'Oklahoma State',
    nat: 'KEN',
    time: '28:44.3',
  },
  {
    pos: 7,
    name: 'Gary Martin',
    team: 'Virginia',
    nat: 'USA',
    time: '28:44.3',
  },
  {
    pos: 8,
    name: 'Collins Kiprotich',
    team: 'New Mexico',
    nat: 'KEN',
    time: '28:45.7',
  },
  {
    pos: 9,
    name: 'Abdel Laadjel',
    team: 'Oregon',
    nat: 'IRE',
    time: '28:46.2',
  },
  {
    pos: 10,
    name: 'George Couttie',
    team: 'Virginia Tech',
    nat: 'GBR',
    time: '28:47.4',
  },
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
  {
    who: 'Athletes',
    body: '[Dummy] Opportunity, education, and mobility set against eligibility-driven recruitment, identity, and belonging.',
  },
  {
    who: 'Coaches',
    body: '[Dummy] Recruiting incentives, roster strategy, and the pressure to win reshaping how programs are built.',
  },
  {
    who: 'Administrators',
    body: '[Dummy] Scholarship allocation, compliance, and the optics of team composition.',
  },
  {
    who: 'Fans & Community',
    body: '[Dummy] Questions of representation, local pipelines, and who the team is understood to belong to.',
  },
  {
    who: 'Governing Bodies',
    body: '[Dummy] Eligibility rules, age limits, and policy responses to the flow of talent.',
  },
  {
    who: 'Sending Nations',
    body: '[Dummy] Loss of homegrown talent weighed against remittances, exposure, and development.',
  },
]

/* APA-style references. Basic italics allowed via <em>. */
export const REFERENCES = [
  'Chepyator-Thomson, J. R., & Ariyo, E. S. (2016). Out of Eastern Africa: An Examination of Sport Labour Migration in the Post-Independence Era. <em>The International Journal of the History of Sport</em>, 33(15), 1826–1846. https://doi.org/10.1080/09523367.2017.1315941',
  'Darby, P., Akindes, G., & Kirwin, M. (2007). Football Academies and the Migration of African Football Labor to Europe. <em>Journal of Sport and Social Issues</em>, 31(2), 143–161. https://doi.org/10.1177/0193723507300481',
  'Hollobaugh, J. (2025, November 25). A Foreign Wave Rises High In The NCAA. <em>Track & Field News</em>. https://trackandfieldnews.com/a-foreign-wave-rises-high-in-the-ncaa/',
  'Johnson, R., & Gault, J. (2025, November 25). <em>Why are there suddenly so many more international runners in NCAA cross country?</em> LetsRun.Com. https://www.letsrun.com/news/2025/11/why-are-there-suddenly-so-many-more-international-runners-in-ncaa-cross-country/',
  'Kaur Sethi, S., Hextrum, K., & Pericak, K. (2025). Recruitment of International College Athletes (ICAs) to the United States: A Bourdieuian Examination of Pathways to Success. <em>Journal of Issues in Intercollegiate Athletics</em>, 18(1). https://doi.org/10.51221/sc.jiia.2025.18.1.7',
  'Love, A., & Seungmo Kim. (2011). Sport Labor Migration and Collegiate Sport in the United States: A Typology of Migrant Athletes. <em>Journal of Issues in Intercollegiate Athletics</em>, 90–104.',
  '<em>NCAA DI Cross Country Championships</em>. (n.d.). Retrieved June 15, 2026, from https://live.pttiming.com/xc-ptt.html?mid=8126',
  '<em>NCAA D1 Cross Country Championships—Photos</em>. (n.d.). Retrieved June 15, 2026, from https://www.runnerspace.com/eprofile.php?event_id=509&do=photos&photo_id=1465083',
  'Simiyu Njororai, W. W. (2010). Global inequality and athlete labour migration from Kenya. <em>Leisure/Loisir</em>, 34(4), 443–461. https://doi.org/10.1080/14927713.2010.543502',
]
