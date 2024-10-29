import Link from "next/link";

const Bio: React.FC = () => {
    return (
        <div className="mx-auto max-w-5xl p-8">
            I am the technical lead at{" "}
            <Link
                target="_blank"
                href="https://relai.ai"
                className="no-underline text-blue-600 hover:underline font-medium"
            >
                RELAI
            </Link>{" "}
            focusing on reliability of AI/ML models. Previously, I received my
            PhD from the University of Maryland, College Park where I was advised by Prof.
            Soheil Feizi. My research interests are in evaluating and improving
            robustness of machine learning models.
        </div>
    );
};

export default Bio;
