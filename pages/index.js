import {useState} from 'react'
import Layout from './components/Layout/Layout'
import SearchInput from './components/SearchInput/SearchInput'
import CountryTable from './components/CountryTable/CountryTable'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  console.log(data)
 
  const[keyword, setKeyword] = useState("")

  const filteredCountries = data.Countries.filter((country) =>
  country.Country.toLowerCase().includes(keyword) || country.CountryCode.toLowerCase().includes(keyword)
  )

  const handleChange = (e) => {
    e.preventDefault()
    setKeyword(e.target.value.toLowerCase())
  }

  return (
  <Layout>
    <div className={styles.main_data}>
      <h1>Coronavirus App</h1>
      <div className={styles.head}>
        <div className={styles.head_body}>
          Total Deaths <br /><strong>{data.Global.TotalDeaths}</strong>
        </div>
        <div className={styles.head_body}>
          Total Recovered <br /><strong>{data.Global.TotalRecovered}</strong>
        </div>
      </div> 
      <SearchInput onChange={handleChange} />
      <CountryTable countries={filteredCountries} />
    </div>
  </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.covid19api.com/summary')
  const data = await res.json()
  
  return {
    props: {
      data
    },
  }
}