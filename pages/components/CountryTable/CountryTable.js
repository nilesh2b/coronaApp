import styles from './CountryTable.module.css'

const CountryTable = ({ countries }) => {
const countryName = countries
return(
    <>
    <div className={styles.country_list}>
            <ul className={styles.country_card}>
            <li><h3>Country Name</h3></li>
            <li className={styles.confirmed}><h3>Total Active Cases</h3></li>
            </ul>
    </div>
    
    <div className={styles.country_list}>
            {countryName.map((contry) => {
                return <ul className={styles.country_card} key={contry.CountryCode}>
                    <li>{contry.Country}</li>
                    <li className={styles.confirmed}>{contry.TotalConfirmed}</li>
                    </ul>
            })}
    </div>
    </>
    )
}

export default CountryTable