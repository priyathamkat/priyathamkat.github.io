import Link from "next/link";

const Contact: React.FC = () => {
    return (
        <div className="mx-auto max-w-5xl p-8">
            <h2 className="text-2xl font-medium">Contact</h2>
            <Link
                target="_blank"
                href="https://www.linkedin.com/in/priyathamkat/"
                className="no-underline text-blue-600 hover:underline font-medium"
            >
                LinkedIn
            </Link>{" "}
        </div>
    );
};

export default Contact;
