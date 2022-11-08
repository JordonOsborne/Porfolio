import Link from "next/link"
import { useRouter } from "next/router"

export default function Navigation() {
  const router = useRouter()
  console.log("Path: ", router.asPath)

  return (
    <nav>
      <div className={router.asPath == "/" ? "active" : ""}>
        <Link href='/'>Home</Link>
      </div>
      <div className={router.asPath == "/About" ? "active" : ""}>
        <Link href='/ComingSoon'>About</Link>
      </div>
      <div className={router.asPath == "/Projects" ? "active" : ""}>
        <Link href='/ComingSoon'>Projects</Link>
      </div>
      <div className={router.asPath == "/Contact" ? "active" : ""}>
        <Link href='/ComingSoon'>Contact</Link>
      </div>
    </nav>
  )
}
