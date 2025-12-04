import Image from "next/image";
import Link from "next/link";

type Props = {
    height?: number
    width?: number  
    onClick?: () => void
}

export default function Logo({onClick, height, width}: Props) {
    return (
        <div>
            <Link
                href="/"
                onClick={onClick}
                className="block ml-4"
            >
                <Image
                src="/images/logo.png"
                alt="MetalWeb"
                width={height}  
                height={width}
                className="object-contain"
                priority
                />
            </Link>
        </div>
    )
}