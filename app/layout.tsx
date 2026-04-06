import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hassan Md. Sharfuddin Miraz | DevOps Engineer',
  description: 'DevOps Engineer specializing in AWS, Kubernetes, Docker, CI/CD automation, and Infrastructure as Code.',
  keywords: 'DevOps, AWS, Kubernetes, Docker, Terraform, CI/CD, Bangladesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise">
        {children}
      </body>
    </html>
  )
}