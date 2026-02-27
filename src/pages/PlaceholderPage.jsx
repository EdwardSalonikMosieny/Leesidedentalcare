import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import SiteHeader from '../components/layout/SiteHeader'

function PlaceholderPage({ title }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="section-placeholder section-placeholder--centered">
          <h1>{title}</h1>
          <p>This page is prepared for the next implementation step.</p>
          <Button asChild variant="outline">
            <Link to="/">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
        </section>
      </main>
    </div>
  )
}

export default PlaceholderPage
