import loading from "./src/assets/loading.svg"
import styles from "../Loading/Loading.module.css"

function Loading() {
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="Loading" />
        </div>
    )
}

export default Loading