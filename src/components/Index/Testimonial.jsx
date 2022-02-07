const Testimonial = () => {
    return (
        <div className="testimonial w-full flex flex-col cursor-grab mb-10 lap:mb-0">
            <div className="text-name flex items-center">
                <img
                    src="/assets/kishoreji.png"
                    alt="text-img"
                    className="w-20 h-20 rounded-full blap:w-24 blap:h-24 lap:w-20 lap:h-20 tab:w-14 tab:h-14 ph:w-12 ph:h-12"
                />
                <h1 className="text-4xl font-medium ml-10 blap:text-3xl lap:text-2xl tab:text-xl ph:text-base ph:ml-5">
                    Ishaan Das - CEO, Google
                </h1>
            </div>
            <p className="text-xl font-normal mt-10 pr-16 lap:text-base tab:text-sm tab:pr-6 ph:pr-0 ph:text-justify ph:mt-5">
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
