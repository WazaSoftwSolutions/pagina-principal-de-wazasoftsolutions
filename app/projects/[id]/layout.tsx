import '@/public/assets/css/project-detail.css'

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
