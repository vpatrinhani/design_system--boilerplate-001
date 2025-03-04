// 'use client'
import dynamic from 'next/dynamic';

// const MylibButton = dynamic(() =>
//   import('@my-lib-org/mylib/bindings/react').then((mod) => mod.MylibButton),
//   {
//     ssr: false,
//     loading: () => <p>Loading Mylib Button...</p>,
//   }
// )

const ClientComponent = dynamic(() => import('./components/hello'),
  {
    ssr: false,
    loading: () => <p>Loading Mylib Button...</p>,
  }
)

// import { MylibButton } from '@my-lib-org/mylib/bindings/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ padding: "64px" }}>
        {/* <MylibButton type="button" label="Test" variant="base" icon="cmdEdit16" size="md">
        </MylibButton> */}
        <ClientComponent />
      </div>
    </main>
  )
}
