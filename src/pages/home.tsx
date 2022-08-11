import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../contexts/ThemeContext";

import smile from "../assets/img/smile.png";
import port from "../assets/img/1660170272473.png";
import { Line } from "../assets/img/line";
import { LineCurved } from "../assets/img/line2";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillGithub, AiOutlineLoading } from "react-icons/ai";

export const Home: React.FC = () => {
	const { loading } = useContext(ThemeContext);

	return (
		<>
			<div
				className={`w-full h-screen flex flex-col items-center justify-center bg-primary-5 ${
					loading ? "fixed" : "hidden"
				}`}
			>
				<AiOutlineLoading className="w-8 h-8 text-primary-7 animate-spin" />
				<h1 className="mt-6 text-sm font-semibold text-primary-7">
					Loading...
				</h1>
			</div>
			<div className="w-full min-h-screen py-12 px-5 flex flex-col items-center font-roboto bg-primary-5-light dark:bg-primary-5">
				<main className="w-full max-w-xl mt-24 flex flex-col items-center">
					<h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-primary-3-light to-primary-4-light dark:from-primary-1 dark:to-white">
						Hello.
					</h1>

					<div className="w-full max-w-sm h-16 mt-4 rounded-lg flex items-center justify-center bg-primary-2-light dark:bg-primary-4">
						<h2 className="text-base font-normal text-primary-1-light dark:text-white">
							I'm a full-stack developer based in Brazil!
						</h2>
					</div>

					<div className="w-full mt-10 sm:mt-28 flex justify-between">
						<section className="w-[40rem]">
							<h2 className="text-base font-normal text-primary-1-light dark:text-primary-7">
								🖐{" "}
								<span className="text-primary-4-light dark:text-primary-6">
									Anderson Oliveira -
								</span>{" "}
								Introduction
							</h2>

							<p className="mt-2 text-sm font-normal leading-relaxed text-primary-6-light dark:text-primary-2">
								Hello, my name is Anderson and I love web development, I've been
								studying since 2020 recently decided to enter the job market in
								the area, to learn more about me and my skills go to{" "}
								<Link
									to={""}
									className="text-primary-6-light font-semibold dark:font-normal dark:text-white"
								>
									about me{" "}
								</Link>
								page and to learn more about my projects go to{" "}
								<Link
									to={""}
									className="text-primary-6-light font-semibold dark:font-normal dark:text-white"
								>
									portfolio
								</Link>
								.
							</p>

							<ul className="mt-5 text-sm font-normal list-inside list-disc text-primary-1-light dark:text-primary-2">
								<li>Web Developer</li>
								<li>Backend Developer</li>
							</ul>

							<Link
								to=""
								className="mt-5 inline-flex items-center text-sm border-b border-solid text-primary-1-light font-semibold dark:font-normal dark:text-white border-primary-1-light dark:border-white"
							>
								See more <HiOutlineArrowNarrowRight className="ml-2" />
							</Link>
						</section>

						<section className="w-80 justify-end hidden sm:flex">
							<img
								src={smile}
								alt="Just a smile image"
								className="w-full h-full max-w-[9rem] max-h-36"
							/>
						</section>
					</div>

					<div className="w-full mt-12 sm:mt-28 flex flex-col items-center">
						<h4 className="py-5 text-sm font-normal text-primary-6-light dark:text-primary-7">
							📚{" "}
							<span className="text-primary-6-light font-semibold dark:font-normal dark:text-primary-6">
								Bio -
							</span>{" "}
							Then it started
						</h4>

						<Line />

						<h4 className="py-5 text-center text-sm font-normal text-primary-6-light dark:text-primary-2">
							<span className="text-black font-semibold dark:text-white dark:font-normal">
								Dec / 2017 -
							</span>{" "}
							High school graduation
						</h4>

						<Line />

						<h4 className="py-5 text-center text-sm font-normal text-primary-6-light dark:text-primary-2">
							<span className="text-black font-semibold dark:text-white dark:font-normal">
								Apr / 2018 -
							</span>{" "}
							Assistance in managing private game
						</h4>

						<Line />

						<h4 className="py-5 text-center text-sm font-normal text-primary-6-light dark:text-primary-2">
							<span className="text-black font-semibold dark:text-white dark:font-normal">
								Jan / 2019 -
							</span>{" "}
							System development for private games (T-SQL and native game
							language)
						</h4>

						<Line />

						<h4 className="py-5 text-center text-sm font-normal text-primary-6-light dark:text-primary-2">
							<span className="text-black font-semibold dark:text-white dark:font-normal">
								June / 2020 -
							</span>{" "}
							HTML, CSS, Javascript and PHP Course (DevMedia)
						</h4>

						<Line />

						<h4 className="py-5 text-center text-sm font-normal text-primary-6-light dark:text-primary-2">
							<span className="text-black font-semibold dark:text-white dark:font-normal">
								Aug / 2021 -
							</span>{" "}
							Independent study on ReactJS and ExpressJS
						</h4>

						<Line />

						<h4 className="py-5 text-center text-sm font-normal text-primary-6-light dark:text-primary-2">
							<span className="text-black font-semibold dark:text-white dark:font-normal">
								Apr / 2022 -
							</span>{" "}
							Discover Course (Rocketseat)
						</h4>

						<Line />

						<section className="w-full flex flex-col">
							<h3 className="py-5 md:ml-20 text-center md:text-start text-base font-normal text-primary-6-light dark:text-primary-7">
								💻{" "}
								<span className="text-primary-6-light font-semibold dark:text-primary-6 dark:font-normal">
									Open Source -
								</span>{" "}
								See my latest projects
							</h3>

							<section className="flex md:ml-14">
								<div>
									<a
										href=""
										className="w-full flex flex-col max-w-sm py-4 px-6 rounded-lg bg-primary-2-light dark:bg-primary-4"
									>
										<h1 className="text-sm font-normal text-primary-6-light dark:text-white">
											react-simple-portfolio
										</h1>

										<p className="mt-3 text-sm font-normal text-primary-2">
											A minimalist portfolio in ReactJS and TailwindCSS with
											dark-mode.
										</p>
									</a>
								</div>

								<div className="mt-12 ml-6 hidden md:flex">
									<LineCurved />
								</div>
							</section>

							<section className="w-full mt-5 md:mt-[-35px] hidden sm:flex flex-col md:flex-row items-center">
								<div
									className="w-56 h-64 rounded-lg overflow-hidden border-2 border-primary-6"
									style={{
										backgroundImage: `url(${port})`,
										backgroundPosition: "top",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
									}}
								/>

								<div className="flex-1 flex flex-col ml-4 mt-5 md:mt-0 w-full">
									<h4 className="text-sm font-normal flex text-primary-6-light dark:text-primary-2">
										View the source code of this portfolio on{" "}
										<a
											href=""
											target="_blank"
											className="text-primary-6-light font-semibold dark:font-normal dark:text-primary-6 ml-1 flex items-center"
										>
											<AiFillGithub className="mx-1" /> GitHub
										</a>
									</h4>

									<h5 className="ml-4 mt-4 text-sm text-black font-semibold dark:font-normal dark:text-white">
										Techs
									</h5>

									<ul className="ml-6 mt-1 text-sm font-normal list-inside list-disc text-primary-6-light dark:text-primary-2">
										<li>ReactJS</li>
										<li>TailwindCSS</li>
										<li>Vercel</li>
									</ul>

									<p className="mt-4 text-sm font-normal text-primary-6-light dark:text-primary-2">
										Gave me a star on{" "}
										<a
											href=""
											className="text-primary-6-light font-semibold dark:font-normal dark:text-primary-7"
										>
											GitHub
										</a>{" "}
										and see it live on the{" "}
										<a
											href=""
											className="text-primary-6-light font-semibold dark:font-normal dark:text-primary-7"
										>
											web
										</a>
										.
									</p>
								</div>
							</section>
						</section>
					</div>
				</main>

				<footer className="pt-20 sm:pt-40 sm:pb-10 text-sm text-center font-normal text-primary-6-light dark:text-primary-2">
					<p>
						Developed by{" "}
						<a
							href=""
							className="text-black font-semibold dark:font-normal dark:text-white"
						>
							Anderson Oliveira
						</a>
						, UI / UX by{" "}
						<a
							href="https://www.figma.com/@cutioluis"
							target="_blank"
							className="text-black font-semibold dark:font-normal dark:text-white"
						>
							cutioluis (Figma Community)
						</a>
					</p>
				</footer>
			</div>
		</>
	);
};
