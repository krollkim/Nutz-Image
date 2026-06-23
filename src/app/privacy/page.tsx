import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות - NUTZ Calisthenics',
  description: 'מדיניות הפרטיות של NUTZ Calisthenics - איזה מידע נאסף, כיצד הוא נשמר ומשמש, וזכויותיך.',
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="pt-32 pb-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-rubik text-4xl md:text-5xl font-black text-text-primary mb-2">
            מדיניות פרטיות
          </h1>
          <p className="font-rubik text-sm text-muted mb-10">עודכן לאחרונה: 22 ביוני 2026</p>

          <div className="font-rubik space-y-8 leading-relaxed">
            <p className="text-muted">
              NUTZ / NUTZ Calisthenics ("האתר", "אנחנו"), בבעלות ליאב ברודש, מכבד את
              פרטיותך. מדיניות זו מסבירה איזה מידע נאסף באתר, כיצד הוא נשמר וכיצד הוא
              משמש. המדיניות נכתבה בהתאם לחוק הגנת הפרטיות, התשמ"א-1981.
            </p>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">איזה מידע נאסף</h2>
              <p className="text-muted">
                המידע נאסף דרך טופס יצירת הקשר / הגשת המועמדות באתר, וכולל: שם מלא,
                מספר טלפון, המסלול המבוקש, רמת הניסיון, וכל הודעה חופשית שתבחר לכתוב.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">מטרת איסוף המידע</h2>
              <ul className="list-disc pr-5 space-y-2 text-muted">
                <li>יצירת קשר חזרה אליך</li>
                <li>התאמת תוכנית אימון אישית</li>
                <li>מתן השירות - ליווי קליסטניקס אונליין</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">היכן נשמר המידע</h2>
              <p className="text-muted">
                הנתונים נשלחים לכתובת האימייל של בעל העסק ולגיליון Google Sheets מנוהל.
                המידע מאוחסן על שרתי Google, בכפוף למדיניות הפרטיות של Google.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">שיתוף עם צד שלישי</h2>
              <p className="text-muted">
                איננו מוכרים, משכירים או מעבירים את המידע שלך לצדדים שלישיים. המידע עובר
                אך ורק דרך שירותי Google (לצורך אחסון), כחלק ממתן השירות.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">קובצי Cookies ומעקב</h2>
              <p className="text-muted">
                האתר אינו עושה שימוש בקובצי cookies למעקב, אינו משתמש ב-Google Analytics,
                ואינו אוסף מידע גלישה. אם הדבר ישתנה בעתיד - מדיניות זו תעודכן בהתאם.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">זכויותיך</h2>
              <p className="text-muted">
                זכותך לעיין במידע שנאסף עליך, לבקש את תיקונו, או לבקש את מחיקתו. לכל
                פנייה בנושא זה ניתן לפנות לכתובת{' '}
                <a href="mailto:egozcali@gmail.com" className="text-amber hover:text-text-primary transition-colors">
                  egozcali@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">יצירת קשר</h2>
              <p className="text-muted">
                בכל שאלה בנושא פרטיות:{' '}
                <a href="mailto:egozcali@gmail.com" className="text-amber hover:text-text-primary transition-colors">
                  egozcali@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
