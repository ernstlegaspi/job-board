"use client"

import Nav from "./Nav"

export default function NavContents() {
	const aboutUsClick = () => {
	}

	const findJobsClick = () => {
	}

	return <div className="v-center relative">
		<Nav href="/" onClick={findJobsClick} text="Find Jobs" />
		<Nav href="/about-us" onClick={aboutUsClick} text="About Us" />
	</div>
}
