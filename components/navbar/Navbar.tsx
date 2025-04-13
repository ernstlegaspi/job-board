import Link from "next/link"
import NavContents from "./NavContents"

export default function Navbar() {
	return <div className="bg-white border-b border-black/10 w h-auto">
		<div className="px-4 w v-center justify-between">
			<div className="w-max">
				<Link href="/">
					<div className="v-center">
						<div className="f-center text-white rounded-[3px] bg-g w-[30px] h-[30px]">JB</div>
						<p className="ml-3">JobBoard</p>
					</div>
				</Link>
			</div>

			<NavContents />

			<div className="v-center">
				<p>aaa</p>
				<p>aaa</p>
				<p>aaa</p>
				<p>aaa</p>
			</div>
		</div>
	</div>
}