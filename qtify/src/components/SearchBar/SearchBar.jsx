import styles from './SearchBar.module.css'
import SearchIcon from '../../assets/search-icon.svg'

export default function SearchBar(){
    return (
        <>
        <form action="" className={styles.searchForm}>
          <input type="search" name="" id="" className={styles.search} placeholder='Search a album of your choice'/>
          <div className={styles.searchicon}>
            <img src={SearchIcon} alt="searchIcon"/>
          </div>
        </form>
        </>
    )
}

