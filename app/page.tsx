// import { Title } from '@/components/texts'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/contacts')

  // return (
  //   <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
  //     <Title className="duration-500 animate-in fade-in slide-in-from-top-10">UX Studio Challenge</Title>
  //   </main>
  // )
}
