"use client"

import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { Suspense } from "react"

function SignInForm() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
          
          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
              <h2 className="text-red-400 font-bold mb-2">Authentication Error</h2>
              {error === 'OAuthAccountNotLinked' && (
                <p className="text-red-300">
                  An account with this email already exists. Please sign in with your original method or use a different email.
                </p>
              )}
              {error === 'CredentialsSignin' && (
                <p className="text-red-300">
                  Invalid email or password. Please try again.
                </p>
              )}
              {error === 'Configuration' && (
                <p className="text-red-300">
                  There is a problem with the server configuration. Please try again later.
                </p>
              )}
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={() => signIn('google', { callbackUrl: '/' })}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Continue with Google
            </button>
            
            <button
              onClick={() => signIn('github', { callbackUrl: '/' })}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Continue with GitHub
            </button>
            
            <div className="text-center text-gray-400">or</div>
            
            <Link
              href="/"
              className="block w-full bg-white/10 hover:bg-white/15 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
            <div className="text-center text-gray-400">Loading...</div>
          </div>
        </div>
      </div>
    }>
      <SignInForm />
    </Suspense>
  )
}


