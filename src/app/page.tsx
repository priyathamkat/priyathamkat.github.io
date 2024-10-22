import Navbar from "./components/ui/Navbar";
import Bio from "./components/ui/Bio";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <div className="flex mx-auto max-w-5xl">
                    <div className="w-1/2">
                        <Bio></Bio>
                    </div>
                    <div className="w-1/2">
                        <Image
                            className="p-8"
                            src={"/images/DSC01680.jpg"}
                            alt="priyatham's headshot"
                            layout="responsive"
                            width={4}
                            height={5}
                        ></Image>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
