const Testimonial = () => {
    return (
        <div className="testimonial w-full flex flex-col cursor-grab mb-10">
            <div className="text-name flex items-center">
                <img
                    src="/assets/kishoreji.png"
                    alt="text-img"
                    className="w-20 h-20 rounded-full"
                />
                <h1 className="text-4xl font-medium ml-10">
                    Ishaan Das - CEO, Google
                </h1>
            </div>
            <p className="text-xl font-normal mt-10 pr-16">
                “Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime
                nemo et odio excepturi et perferendis dolorem! Et voluptas
                consequatur in molestiae quisquam est dolorem odit hic illum
                distinctio ut voluptatum assumenda aut atque Quis id explicabo
                dolorum.
                <br />
                <br />
                Lorem ipsum dolor sit amet. Et repellendus molestiae est maxime
                nemo et odio excepturi et perferendis dolorem! Et voluptas
                consequatur in molestiae quisquam est dolorem odit hic illum
                distinctio ut voluptatum assumenda aut atque Quis id explicabo
                dolorum.”
            </p>
        </div>
    );
};

export default Testimonial;
