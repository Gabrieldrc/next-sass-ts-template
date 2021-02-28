import Head from 'next/head'

export default function Home() {
  fechear()
  return (
    <div>
      Hola
    </div>
  )
}

async function fechear() {
  const res = await fetch('/api/hello')
  const data = await res.json()
  console.log(data)
}