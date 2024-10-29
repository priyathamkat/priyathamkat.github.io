import Bio from "./components/ui/Bio";
import Contact from "./components/ui/contact";
import Navbar from "./components/ui/Navbar";
import Image from "next/legacy/image";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <div className="flex mx-auto max-w-5xl">
                    <div className="w-3/5">
                        <Bio></Bio>
                        <Contact></Contact>
                    </div>
                    <div className="w-2/5 headshot-container">
                        <Image
                            className="headshot p-8"
                            src={"/images/headshot.jpg"}
                            alt="priyatham's headshot"
                            layout="responsive"
                            width={4}
                            height={6}
                        ></Image>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
