import Header from './components/Header'

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body style={{margin: "0 0 0 0",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      display: "flex",
      justifyContent: "center",}}>
      <Header/>
      {children}
      </body>
      </html>
  )
}