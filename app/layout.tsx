import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
import './globals.css'
import { ApolloWrapper } from '@/lib/apollo-wrapper'

export const metadata = {
  title: 'Architect Website',
  description: 'architect landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar>
          <Topbar/>
        </Navbar>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  )
}
