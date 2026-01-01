'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex">
      <Image className='mr-2 rounded-sm' src="/profile.jpeg" alt='Profile picture' width={48} height={48}/>
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Ryan Loh
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
      </div>
    </header>
  )
}
