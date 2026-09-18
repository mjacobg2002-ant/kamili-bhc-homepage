// Single source of truth for verified Kamili business facts.
// Everything here was taken from the live site (kamilibhc.org) on build.
// Items tagged VERIFY need client confirmation before publishing.

export const site = {
  name: 'Kamili Behavioral Health Center',
  shortName: 'Kamili',
  phoneDisplay: '(667) 228-2074',
  phoneHref: 'tel:+16672282074',
  email: 'info@kamilibhc.org',
  address: {
    line1: '2119 N. Charles Street',
    line2: 'Suites 14 & 15',
    city: 'Baltimore',
    state: 'MD',
    zip: '21218',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Kamili+Behavioral+Health+Center+2119+N+Charles+Street+Baltimore+MD+21218',
  // Google Calendar consultation schedules preserved from the live site.
  consultations: [
    {
      name: 'Marlene',
      url: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0lac-jkA1pNS5PbY5tmPXohUQF4SQxCnCXP_BaZS7WpIN8APDT-doFEZX6KufuKCklQROZyk5g',
    },
    {
      name: "L'Tanya",
      url: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2SHNFHFhqvJ2xhlHfAvMZT2RZ6nH172wdufwShTdKQoYuH7MMifaFqhZAM6CBSkqULDdGjFuhf',
    },
  ],
};

export const services = [
  {
    id: 'individual-therapy',
    number: '01',
    title: 'Individual Therapy',
    summary:
      'One-on-one counseling in a safe, confidential space to explore emotions, manage stress, and work toward personal growth at your own pace.',
  },
  {
    id: 'group-therapy',
    number: '02',
    title: 'Group Therapy',
    summary:
      'Supportive therapeutic groups that help you strengthen coping skills, communication, and connection through shared experience.',
  },
  {
    id: 'substance-use-counseling',
    number: '03',
    title: 'Substance-Use Counseling',
    summary:
      'Compassionate counseling focused on recovery, relapse prevention, and the emotional factors connected to substance use.',
  },
  {
    id: 'trauma-informed-care',
    number: '04',
    title: 'Trauma-Informed Care',
    summary:
      'Care centered on emotional safety, choice, and empowerment — supporting healing on your own terms.',
  },
];

// Corrected insurer spellings. Participation must be confirmed by the client. (VERIFY)
export const insurers = [
  'Medical Assistance',
  'Medicare',
  'CareFirst',
  'UnitedHealthcare',
  'Aetna',
  'Cigna',
  'Private insurance',
  'Fee-for-service',
  'Uninsured clients',
];
