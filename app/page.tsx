import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header with logo - frozen at top */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/images/lock-screen.png"
              alt="Corsicans in the UK Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Corsicans in the UK</h1>

          {/* Description */}
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4">
            <p>
              Corsicans in the UK is a free, open and inclusive association that aims to strengthen the Corsican
              community living away from our beloved island.
            </p>
            <p>
              For now the community mainly runs via a WhatsApp group that organises get-togethers, shares career
              opportunities and exchanges services.
            </p>
            <p>If you are a Corsican living in the UK and would like to join, scan the QR code or click the link:</p>
          </div>

          {/* QR Code */}
          <div className="flex justify-center py-8">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/qr-code.png"
                alt="QR Code to join Corsicans in the UK WhatsApp community"
                fill
                className="object-contain filter invert"
              />
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-8 py-3 text-lg font-semibold rounded-full border border-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <a
                href="https://chat.whatsapp.com/CArLlMGrYNsHQSg8T14P1e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="Join the Corsicans in the UK WhatsApp community group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                </svg>
                Join the WhatsApp Community
              </a>
            </Button>
          </div>

          {/* Footer */}
          <footer className="pt-12 text-sm text-gray-500">
            <p className="text-gray-400">© 2024 Corsicans in the UK. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
