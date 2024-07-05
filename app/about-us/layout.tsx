export const metadata = {
    title: 'About-Us'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        <h6>&copy; About 전용 푸터</h6>
    </div>
  )
}