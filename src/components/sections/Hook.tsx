import Image from 'next/image'

interface HookProps {
  quote: string
}

export default function Hook({ quote }: HookProps) {
  return (
    <section className="pt-20 pb-10 md:pb-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-1 text-center md:text-right">
            <p className="font-rubik text-3xl md:text-4xl font-bold text-gold-bright italic">
              "{quote}"
            </p>
          </div>
          <div className="w-36 h-36 md:w-40 md:h-40 flex-shrink-0">
            <Image
              src="/images/mascot/welcome-avatar.png"
              alt="NUTZ Welcome Mascot"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
