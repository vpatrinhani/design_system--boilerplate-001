'use client'
import { MylibButton } from '@my-lib-org/mylib/bindings/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ padding: "64px" }}>
        <MylibButton type="button" label="Test" variant="base" icon="cmdEdit16" size="md">
        </MylibButton>
      </div>
    </main>
  )
}
