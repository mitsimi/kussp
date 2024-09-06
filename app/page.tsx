"use client";

import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

import { JSX, SVGProps } from "react";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center mt-20 xl:mt-0">
      {/* Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-60 grid justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-balance">
                A new way of
                <br />
                <span className="bg-clip-text text-transparent animate-gradient-x bg-gradient-to-r from-green-500 via-red-600 to-blue-400">
                  planning
                </span>{" "}
                your semester
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 md:text-balance">
                Save time and nerves with this new application. Plan faster than
                ever before and get a better overview of your schedule.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-zinc-700 grid justify-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Key Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 text-balance">
            <Card>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <LayoutIcon className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Intuitive Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our user-friendly interface ensures a smooth experience for
                  all users.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <LockIcon className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Privacy</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  We do not store any kind of information about the user, nor do
                  we collect telemetry.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <BarChartIcon className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Always up-to-date</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Always have the latest courses so you can plan accordingly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer */}
      <section className="w-full py-12 md:py-24 lg:py-32 grid justify-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            What Students Say
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <PlaceholderIcon
                    className="rounded-full"
                    height="80"
                    width="80"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    &quot;This product has completely changed my life. Highly
                    recommended!&quot;
                  </p>
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CEO, HTMX
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get started now */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-zinc-800 grid justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We&apos;ve helped thousands of students like you to get on top
                of their schedules! Join the ranks and discover how this tool
                can speed up your schedule planning!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button className="w-full">Plan your next semester</Button>
              {/*<p className="text-xs text-gray-500 dark:text-gray-400">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </p>*/}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function BarChartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function LayoutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function PlaceholderIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="1200"
      fill="none"
      {...props}
    >
      <rect width="1200" height="1200" fill="#EAEAEA" rx="3" />
      <g opacity=".5">
        <g opacity=".5">
          <path
            fill="#FAFAFA"
            d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"
          />
          <path
            stroke="#C9C9C9"
            strokeWidth="2.418"
            d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"
          />
        </g>
        <path
          stroke="url(#a)"
          strokeWidth="2.418"
          d="M0-1.209h553.581"
          transform="scale(1 -1) rotate(45 1163.11 91.165)"
        />
        <path
          stroke="url(#b)"
          strokeWidth="2.418"
          d="M404.846 598.671h391.726"
        />
        <path stroke="url(#c)" strokeWidth="2.418" d="M599.5 795.742V404.017" />
        <path
          stroke="url(#d)"
          strokeWidth="2.418"
          d="m795.717 796.597-391.441-391.44"
        />
        <path
          fill="#fff"
          d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"
        />
        <g clipPath="url(#e)">
          <path
            fill="#666"
            fillRule="evenodd"
            d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z"
            clipRule="evenodd"
          />
        </g>
        <path
          stroke="#C9C9C9"
          strokeWidth="2.418"
          d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1="554.061"
          x2="-.48"
          y1=".083"
          y2=".087"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9C9C9" stopOpacity="0" />
          <stop offset=".208" stopColor="#C9C9C9" />
          <stop offset=".792" stopColor="#C9C9C9" />
          <stop offset="1" stopColor="#C9C9C9" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="796.912"
          x2="404.507"
          y1="599.963"
          y2="599.965"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9C9C9" stopOpacity="0" />
          <stop offset=".208" stopColor="#C9C9C9" />
          <stop offset=".792" stopColor="#C9C9C9" />
          <stop offset="1" stopColor="#C9C9C9" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="600.792"
          x2="600.794"
          y1="403.677"
          y2="796.082"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9C9C9" stopOpacity="0" />
          <stop offset=".208" stopColor="#C9C9C9" />
          <stop offset=".792" stopColor="#C9C9C9" />
          <stop offset="1" stopColor="#C9C9C9" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="404.85"
          x2="796.972"
          y1="403.903"
          y2="796.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9C9C9" stopOpacity="0" />
          <stop offset=".208" stopColor="#C9C9C9" />
          <stop offset=".792" stopColor="#C9C9C9" />
          <stop offset="1" stopColor="#C9C9C9" stopOpacity="0" />
        </linearGradient>
        <clipPath id="e">
          <path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z" />
        </clipPath>
      </defs>
    </svg>
  );
}
