'use client'

import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import DualCTA from '@/components/ui/DualCTA'
import { aboutCopy } from '@/data/copy'

interface AboutProps {
  mode?: 'teaser' | 'full'
}

// width/height = each file's real pixel dimensions → next/image keeps the true
// aspect ratio (no cropping) while optimizing + lazy-loading.
const CERTIFICATES = [
  { src: '/images/certificates/cert_personal_trainer.png', width: 570, height: 822, alt: 'תעודת מאמן אישי כושר של ליאב ברודש' },
  { src: '/images/certificates/cert_functional_training.png', width: 532, height: 765, alt: 'תעודת אימון פונקציונלי (בית הספר למקצועות הספורט) של ליאב ברודש' },
  { src: '/images/certificates/cert_fitness_health.png', width: 576, height: 759, alt: 'תעודת מדריך כושר גופני ובריאות של ליאב ברודש' },
  { src: '/images/certificates/cert_lymphatic_cupping.png', width: 577, height: 832, alt: 'תעודת עיסוי לימפטי וכוסות רוח של ליאב ברודש' },
  { src: '/images/certificates/cert_sportstherapy_deshadow.png', width: 547, height: 775, alt: 'תעודת ספורטתרפיה ועיסוי רפואי בכיר של ליאב ברודש' },
  { src: '/images/certificates/cert_massage_diploma.png', width: 628, height: 803, alt: 'דיפלומת עיסוי רפואי מוסמך (Moreno World Massage College) של ליאב ברודש' },
  { src: '/images/certificates/cert_massage_therapist_en_deshadow.png', width: 1155, height: 859, alt: 'תעודת Massage Therapist (Moshe Moreno College) של ליאב ברודש' },
  { src: '/images/certificates/certificate1.jpeg', width: 1184, height: 667, alt: 'תעודת השתלמות גמישות למאמנים (Mor PhysioYoga) של ליאב ברודש' },
]

export default function About({ mode = 'teaser' }: AboutProps) {

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <SectionLabel>{aboutCopy.label}</SectionLabel>
          <h2 className="font-rubik text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-4 text-right">
            למה NUTZ?
          </h2>
        </div>

        {mode === 'teaser' ? (
          <>
            <div className="mb-8 flex justify-center w-72 h-72 mx-auto">
              <Image
                src="/images/liav/profile-image.jpeg"
                alt="ליאב ברודש - פורטרט"
                width={288}
                height={288}
                className="w-full h-full object-cover rounded-card"
              />
            </div>
            <Card className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-rubik text-2xl font-bold text-text-primary mb-2">
                    ליאב ברודש
                  </h3>
                  <p className="font-rubik text-amber mb-4">NUTZ Calisthenics</p>
                  <p className="font-rubik text-muted text-base leading-relaxed">
                    {aboutCopy.shortBio}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {aboutCopy.stats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="font-bebas text-2xl text-amber">{stat.value}{stat.suffix || ''}</p>
                      <p className="font-rubik text-sm text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <DualCTA secondaryText="הסיפור המלא" secondaryHref="/about" />
          </>
        ) : (
          <>
            {/* GEO: explicit, citable definitions */}
            <div className="mb-12 space-y-8">
              <div>
                <h3 className="font-rubik text-xl md:text-2xl font-bold text-gold-bright mb-3">מה זה NUTZ?</h3>
                <p className="font-rubik text-muted text-base leading-relaxed">
                  NUTZ היא שיטת ליווי קליסטניקס אונליין 1:1 של ליאב ברודש - לא תוכנית PDF גנרית, אלא ליווי אישי אמיתי שמלמד אותך לשלוט בגוף שלך מהשורש עד הצמרת. השיטה משלבת תוכנית אימון מותאמת אישית, אימון מבוסס-שיטה, וידע עמוק בספורטתרפיה ובטיפול - וזה מה שמבדל את ליאב ממאמן רגיל: לא רק לבנות כוח, אלא להבין, לנמק ולשקם את הגוף מהשורש.
                </p>
              </div>
              <div>
                <h3 className="font-rubik text-xl md:text-2xl font-bold text-gold-bright mb-3">למי השיטה מתאימה?</h3>
                <p className="font-rubik text-muted text-base leading-relaxed">
                  לכל הרמות - ממתחיל מוחלט שלא התאמן מעולם ("מאפס", כלומר נקודת התחלה) ועד מתאמן קליסטניקס מתקדם ומתחרים. כל תהליך נפתח באבחון אישי שממפה את היכולות, החולשות ונקודת הפתיחה שלך - ובונה את התוכנית בדיוק משם, כך שהיא מתאימה לאן שאתה נמצא היום.
                </p>
              </div>
            </div>

            <div className="mb-12 space-y-6">
              {aboutCopy.bio.map((paragraph, idx) => (
                <p key={idx} className="font-rubik text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Card className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {aboutCopy.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="font-bebas text-3xl text-amber">{stat.value}{stat.suffix || ''}</p>
                    <p className="font-rubik text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mb-12">
              <h3 className="font-rubik text-2xl font-bold text-text-primary mb-4">תעודות והסמכות</h3>
              <p className="font-rubik text-muted text-base leading-relaxed mb-8">
                ההסמכה של ליאב חוצה שני עולמות - אימון וטיפול - וזה בדיוק מה שמייחד את השיטה: גם לבנות גוף וגם לשקם אותו. בצד האימון: מאמן כושר אישי, מדריך כושר גופני ובריאות, ומוסמך באימון פונקציונלי, עם 14+ שנות קליסטניקס ורקורד תחרותי (מקום 3 בארץ, 2022). בצד הטיפול: ספורטתרפיה ועיסוי רפואי בכיר, דיפלומת עיסוי רפואי מוסמך (Moreno World Massage College), עיסוי לימפטי וכוסות רוח, והשתלמות גמישות למאמנים. הטיפולים אינם מוצר נפרד - הם כלי בתוך השיטה.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                }}
                className="cert-grid"
              >
                {CERTIFICATES.map((cert, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px',
                    }}
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={cert.width}
                      height={cert.height}
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 30vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                ))}
              </div>

              <style>{`
                @media (max-width: 767px) {
                  .cert-grid { grid-template-columns: 1fr !important; }
                }
                @media (min-width: 768px) and (max-width: 1023px) {
                  .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
              `}</style>
            </Card>
          </>
        )}
      </div>
    </section>
  )
}
