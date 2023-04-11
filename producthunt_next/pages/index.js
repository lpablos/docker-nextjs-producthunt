import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Iinicio</h1>
      <style jsx>
      {`
        h1{
          color:red;
        }
      
      `}
      </style>
    </div>
  )
}
