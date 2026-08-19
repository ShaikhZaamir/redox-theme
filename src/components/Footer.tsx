"use client";

export default function Footer() {
    return (
        <footer className="bg-[#111111] px-4 py-24 text-white sm:px-6 lg:px-8">
            <div className="flex w-full flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
                {/* Privacy */}
                <div className="lg:w-[35%]">
                    <p className="max-w-[400px] text-[20px] leading-[1.35] tracking-[-0.025em]">
                        By subscribing you agree with our
                        <br />

                        <a
                            href="#"
                            className="underline underline-offset-4"
                        >
                            Privacy Policy
                        </a>
                    </p>
                </div>

                {/* Footer Links */}
                <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-3 lg:w-[50%]">
                    {/* Company */}
                    <div>
                        <h3 className="mb-6 text-[20px] text-[#888888]">
                            Company
                        </h3>

                        <div className="group/footer flex flex-col gap-1 text-[20px] leading-[1.3]">
                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Agency
                            </a>

                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Solutions
                            </a>

                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Creative
                            </a>

                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Work
                            </a>

                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-6 text-[20px] text-[#888888]">
                            Social
                        </h3>

                        <div className="group/footer flex flex-col gap-1 text-[20px] leading-[1.3]">
                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Facebook
                            </a>

                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Dribbble
                            </a>

                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                Pinterest
                            </a>

                            <a
                                href="#"
                                className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:!opacity-100"
                            >
                                YouTube
                            </a>
                        </div>
                    </div>

                    {/* Office */}
                    <div>
                        <h3 className="mb-6 text-[20px] text-[#888888]">
                            Office
                        </h3>

                        <div className="group/footer flex flex-col gap-1 text-[20px] leading-[1.3]">
                            <span className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100">
                                New York
                            </span>

                            <span className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100">
                                Toronto
                            </span>

                            <span className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100">
                                Berlin
                            </span>

                            <span className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100">
                                London
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}