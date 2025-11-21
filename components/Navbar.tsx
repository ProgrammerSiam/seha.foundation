import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container max-w-6xl mx-auto flex h-14 items-center">
        <Link href="/" className="flex items-center">
          <span className="font-bold">SEHA Foundation</span>
        </Link>
        <nav className="ml-10 flex items-center space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="default" size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}