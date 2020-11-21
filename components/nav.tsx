import Link from "next/link";

const links = [{href: "https://github.com/maltebaer", label: "GitHub"}];

export default function Nav() {
    return (
        <nav>
            <ul className="flex justify-between items-center p-8">
                <li>
                    <Link href="/">
                        <a>
                            <img
                                src="/images/profile.png"
                                alt="Carol"
                                className="w-24 h-24"
                            />
                        </a>
                    </Link>
                </li>
                <ul className="flex justify-between items-center space-x-4">
                    {links.map(({href, label}) => (
                        <li key={href}>
                            <a href={href} className="btn-blue no-underline">
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </ul>
        </nav>
    );
}
