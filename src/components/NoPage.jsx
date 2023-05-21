import styles from "../styles";

const NoPage = () => {
  return (
    <div className="flex h-screen justify-center items-center" >
        <div className="p-8">
            <p className={`${styles.heading1} text-center`}>
                Ups! I'm afraid the wind just dropped! 
            </p>
        </div>
    </div>
  )
}

export default NoPage