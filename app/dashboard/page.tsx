export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-muted-foreground mb-8">Database features will be available once you connect a database.</p>
        <div className="bg-muted p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground">
            Connect a database to enable user authentication, car listings management, and more features.
          </p>
        </div>
      </div>
    </div>
  )
}
