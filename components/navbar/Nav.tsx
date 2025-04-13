import Link from "next/link"

import { useEffect, useState } from "react"

type Props = {
	href: string
	onClick: () => void
	text: string
}

export default function Nav({ href, onClick, text }: Props) {
	const [isActive, setIsActive] = useState<boolean>(false)

	useEffect(() => {
		if(!window) return

		setIsActive(href === window.location.pathname)
	}, [])

	return <div className="w-max relative">
			<Link href={href}>
				<div onClick={onClick} className={`${isActive ? "font-bold text-g" : ""} pointer py-4 px-2 transition-all hover:text-g`}>{text}</div>
				{isActive ? <div className="mt-[-3px] absolute h-[3px] w-[50px] bg-g rounded left-[50%] -translate-x-[50%]"></div> : null}
			</Link>
		</div>
}
