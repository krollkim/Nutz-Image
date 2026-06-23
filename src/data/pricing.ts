export interface Plan {
  id: string
  label: string
  title: string
  subtitle: string
  price: number
  currency: string
  popular?: boolean
  features: string[]
}

export const plans: Plan[] = [
  // TODO: Fill in pricing from PROJECT_PLAN.md section 13
  {
    id: 'powerup-60',
    label: 'POWERUP 60 MIN',
    title: 'פגישת POWERUP שעה',
    subtitle: 'הצעד הראשון שלך',
    price: 350,
    currency: 'ש"ח',
    features: ['מפגש אונליין אישי בווידאו (1:1)'],
  },
  {
    id: 'powerup-120',
    label: 'POWERUP 120 MIN',
    title: 'פגישת POWERUP מורחבת שעתיים',
    subtitle: 'לצלילה עמוקה',
    price: 580,
    currency: 'ש"ח',
    popular: true,
    features: ['מפגש אונליין אישי בווידאו (1:1)', 'זמן מורחב'],
  },
  {
    id: '90-days',
    label: '90 DAYS',
    title: 'יסודות הקליסטניקס',
    subtitle: 'תהליך כניסה 90 ימים',
    price: 3050,
    currency: 'ש"ח',
    features: ['תוכנית אימונים מתעדכנת', 'ליווי 1:1 אונליין', 'קהילה סגורה'],
  },
  {
    id: '180-days',
    label: '180 DAYS',
    title: 'העמקה והטמעה',
    subtitle: 'שלב ההעמקה וההטמעה',
    price: 5800,
    currency: 'ש"ח',
    popular: true,
    features: ['תוכנית אימונים מתעדכנת', 'ליווי 1:1 אונליין', 'קהילה סגורה', 'תכני העשרה'],
  },
  {
    id: '360-days',
    label: '360 DAYS',
    title: 'תהליך שנתי מלא',
    subtitle: 'שנה מלאה של פיתוח',
    price: 10500,
    currency: 'ש"ח',
    features: ['תוכנית אימונים מתעדכנת', 'ליווי 1:1 אונליין', 'קהילה סגורה', 'תכני העשרה', 'ייעוץ תזונה'],
  },
]
