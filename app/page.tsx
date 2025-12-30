export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>ThreadByte</h1>
      <p style={{ fontSize: '1.25rem', color: '#666', textAlign: 'center', maxWidth: '600px' }}>
        Your unified daily digest application. Aggregating content from Slack, Gmail, and GroupMe
        with AI-powered action drafts.
      </p>
      <div style={{ marginTop: '2rem', color: '#999' }}>
        Coming soon...
      </div>
    </main>
  )
}
