'use client' // Error boundaries must be Client Components
import { useEffect } from 'react'
export default function ErrorPage({ error, retry }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <html>
      <body>
        <div>
          <h2>Something went wrong on Global boundary!</h2>
          <button
            onClick={
              // Attempt to recover by re-fetching and re-rendering the segment
              () => retry()
            }
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
