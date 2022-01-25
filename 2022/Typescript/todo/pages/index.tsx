import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Todo from '../components/Todo'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Todo />
    </div>
  )
}

export default Home
