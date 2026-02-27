function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          &copy; {currentYear} leesidedentalcare. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
