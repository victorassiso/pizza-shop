import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <h1>Dashboard</h1>
      <Button variant="ghost" asChild>
        <Link to="/pizza-shop-web/sign-in" className="">
          Sign-in
        </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link to="/pizza-shop-web/sign-up" className="">
          Sign-up
        </Link>
      </Button>
    </>
  )
}
