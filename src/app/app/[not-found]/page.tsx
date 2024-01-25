import {notFound} from 'next/navigation'

export default function HomeNotFoundRoute() {
  return (
    <>
        {notFound()}
    </>
  )
}
