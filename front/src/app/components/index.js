import Link from "next/link";
import '../globals.css'

export default function Header() {
  return (
    <header className="header">
			<nav className="navbar">
			<Link className="home" href="/">HOME</Link>
            <div></div>
            <ul>
				<li>
					<Link href={
						{
							pathname: `/ById/`,
							query : { id: 1}
						}
					} as={`/ById/${1}`}
					>RJTRIP STANDARD</Link>
				</li>
				<li>
					<Link href={
						{
							pathname: `/ById/`,
							query : { id: 2}
						}
					} as={`/ById/${2}`}
					
					>RJTRIP PREMIUM</Link>
				</li>
				<li>
					<Link href={
						{
							pathname: `/ById/`,
							query : { id: 3}
						}
					} as={`/ById/${3}`}>RJTRIP SUPERPREMIUM</Link>
				</li>
				<li>
					<Link href={
						{
							pathname: `/ById/`,
							query : { id: 4}
						}
					} as={`/ById/${4}`}>RJTRIP IMPERIAL</Link>
				</li>
			</ul>
            <div></div>
            </nav>
		</header>
  )
}
