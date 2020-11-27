import styles from './SearchInput.module.css'

const SearchInput = ({...rest}) => {
return(
        <div className={styles.input}>
            <input placeholder="Search by country" {...rest} />
        </div>
    )
}

export default SearchInput