import Image from "next/image";
import { Suspense } from "react";
import { Loader } from "@/ui/atoms/Loader";

const page = () => {
	return (
		<Suspense fallback={<Loader />}>
			<section className="mx-auto w-full max-w-7xl p-8 text-center">
				<h3>LIFE WITH ZOE</h3>
				<h4 className="pt-4 text-2xl">
					Feel better, living the <i>ZOE</i> way
				</h4>
				<div className="grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					<div className="flex flex-col items-center justify-start">
						<div className="mb-4 flex h-40 items-center justify-center">
							<Image src="/assets/result.webp" alt="Complete your tests" width={150} height={150} />
						</div>
						<h2 className="pb-3 text-xl text-[#374151]">Complete your tests</h2>
						<p className="text-[15px] font-light text-[#808080]">
							Easy, at-home tests give us an inside look at your blood fat, blood sugar, and gut microbiome
							health.
						</p>
					</div>

					<div className="flex flex-col items-center justify-start">
						<div className="mb-4 flex h-40 items-center justify-center">
							<Image src="/assets/test.webp" alt="Complete your tests" width={150} height={150} />
						</div>
						<h2 className="pb-3 text-xl text-[#374151]">Get your Zone Scores</h2>
						<p className="text-[15px] font-light text-[#808080]">
							Using your results, we score every food (from 0-100), so you can make better choices of what to
							eat.
						</p>
					</div>

					<div className="flex flex-col items-center justify-start">
						<div className="mb-4 flex h-40 items-center justify-center">
							<Image src="/assets/result.webp" alt="Complete your tests" width={150} height={150} />
						</div>
						<h2 className="pb-3 text-xl text-[#374151]">Build new habits</h2>
						<p className="text-[15px] font-light text-[#808080]">
							We teachyou how to swap, add and combine foods so you can eat in the best way for your body.
						</p>
					</div>

					<div className="flex flex-col items-center justify-start">
						<div className="mb-4 flex h-40 items-center justify-center">
							<Image src="/assets/progress.webp" alt="Complete your tests" width={300} height={300} />
						</div>
						<h2 className="pb-3 text-xl text-[#374151]">Track your progress</h2>
						<p className="text-[15px] font-light text-[#808080]">
							Retest your gut to see how your microbiome has improved by following the ZOE program
						</p>
					</div>

					<div className="flex flex-col items-center justify-start">
						<div className="mb-4 flex h-40 items-center justify-center">
							<Image src="/assets/result.webp" alt="Complete your tests" width={150} height={150} />
						</div>
						<h2 className="pb-3 text-xl text-[#374151]">Complete your tests</h2>
						<p className="text-[15px] font-light text-[#808080]">
							Easy, at-home tests give us an inside look at your blood fat, blood sugar, and gut microbiome
							health.
						</p>
					</div>
				</div>
			</section>
		</Suspense>
	);
};

export default page;
