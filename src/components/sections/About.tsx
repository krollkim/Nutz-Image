'use client'

import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import DualCTA from '@/components/ui/DualCTA'
import { aboutCopy } from '@/data/copy'

interface AboutProps {
  mode?: 'teaser' | 'full'
}

const CERTIFICATES = [
  { src: '/images/certificates/certificate1.jpeg', alt: 'תעודת הסמכה מקצועית של ליאב ברודש — NUTZ (1)' },
  { src: '/images/certificates/certificate2.jpeg', alt: 'תעודת הסמכה מקצועית של ליאב ברודש — NUTZ (2)' },
  { src: '/images/certificates/certificate3.jpeg', alt: 'תעודת הסמכה מקצועית של ליאב ברודש — NUTZ (3)' },
  { src: '/images/certificates/certificate4.jpeg', alt: 'תעודת הסמכה מקצועית של ליאב ברודש — NUTZ (4)' },
  { src: '/images/certificates/certificate5.jpeg', alt: 'תעודת הסמכה מקצועית של ליאב ברודש — NUTZ (5)' },
  { src: '/images/certificates/certificate6.jpeg', alt: 'תעודת הסמכה מקצועית של ליאב ברודש — NUTZ (6)' },
  { src: '/images/certificates/certificate7.jpeg', alt: 'תעודת הסמכה מקצועית של ליאב ברודש — NUTZ (7)' },
  { src: '/images/certificates/certificate8.jpeg', alt: 'תעודת הסמכה מקצועית של ליאב ברודש — NUTZ (8)' },
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
            <div className="mb-12 space-y-6">
              {aboutCopy.bio.map((paragraph, idx) => (
                <p key={idx} className="font-rubik text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Card className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
                {aboutCopy.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="font-bebas text-3xl text-amber">{stat.value}{stat.suffix || ''}</p>
                    <p className="font-rubik text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mb-12">
              <h3 className="font-rubik text-2xl font-bold text-text-primary mb-6">תעודות והסמכות</h3>

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
                    <img
                      src={cert.src}
                      alt={cert.alt}
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
