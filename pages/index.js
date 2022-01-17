import Image from "next/image";
import TwitterLogo from "../assets/images/twitter-logo.svg"
import GoogleLogo from "../assets/images/google-logo.svg"
import AppleLogo from "../assets/images/apple-logo.svg"




export default function Home() {
  return (
    <div className="min-h-screeen flex flex-col">
      <div className="min-h-screen grid grid-cols-12">

<div className="h-full col-span-7 relative">
    <Image 
    layout="fill" 
    src="/images/landing-page-image.png" 
    alt="twitter"
    className="object-cover"
    />
</div>

<div className="col-span-5 px-8 flex items-center">
  <div>
  <TwitterLogo className="w-12 h-12 text-primary-500"></TwitterLogo>
  <h1 className="text-5xl font-bold font-black mt-16">Happening now</h1>
  <div className="mt-16">
  <h2 className="font-bold text-xl mb-8">Join Twitter today.</h2>

  <div className="w-72">
  <button className="w-full py-2 px-6 bg-white hover:bg-slate-50 text-gray-400 rounded-full border border-gray-300 font-bold"><GoogleLogo className="w-8 h-8 flex justify-center"></GoogleLogo>Sign up with Google</button>
  <button className="mt-2 w-full py-2 px-6 bg-white hover:bg-slate-50 text-black rounded-full border border-gray-300 font-bold"><AppleLogo className="w-7 h-7 flex justify-center"></AppleLogo>Sign up with Apple</button>
  <span className="flex justify-center mt-2 mb-2">or</span>
  <button className="w-full py-2 px-6 bg-primary hover:bg-primary-600 text-white rounded-full font-bold">Sign up with phone or email</button>
  <div className="text-xs text-gray-400 mt-2">
              By signing up, you agree to the{" "}
              <a
                className="text-primary"
                href="https://twitter.com/en/tos"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-primary" href="Privacy Policy">
                privacy policy
              </a>
              , including{" "}
              <a className="text-primary" href="Cookie Use">
                Cookie Use
              </a>
              .
  </div>

  <div className="mt-8">
  <h2 className="text-lg font-bold">Already have an account?</h2>
    <button className=" mt-4 w-full py-2 px-6 border border-gray-200  text-primary hover:bg-slate-50 rounded-full">Sign in</button>
  </div>
  </div>
  

 
  </div>
  


  </div>
  

</div>


</div>

<footer className="bg-gray-100 py-4">
          <div className="container mx-auto text-sm flex justify-center space-x-4 text-gray-500 ">
            <a className="hover:text-gray-800" href="https://twitter.com">About</a>
            <a className="hover:text-gray-800" href="https://twitter.com">Help Center</a>
            <a className="hover:text-gray-800" href="https://twitter.com">Terms of Service</a>
            <a className="hover:text-gray-800" href="https://twitter.com">Privacy Policy</a>
            <a className="hover:text-gray-800" href="https://twitter.com">Imprint</a>
            <a className="hover:text-gray-800" href="https://twitter.com">Accessibility</a>
            <a className="hover:text-gray-800" href="https://twitter.com">Ads Info</a>
            <a className="hover:text-gray-800" href="https://twitter.com">Blog</a>
            <a className="hover:text-gray-800" href="https://twitter.com">Accessibility</a>
          </div>
        </footer>
    </div>
  )
}
