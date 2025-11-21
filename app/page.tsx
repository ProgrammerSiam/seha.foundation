
import { HeroSVG } from '@/components/HeroSVG';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 lg:p-12">
      {/* Hero Section with SVG */}
      <div className="w-full max-w-6xl mx-auto">
        <HeroSVG />
      </div>
      

    </main>
  )
}