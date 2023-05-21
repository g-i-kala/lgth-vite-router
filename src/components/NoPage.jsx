import styles from "../styles";

const NoPage = () => {
  return (
    <section id='nopage' className={`${styles.paddingY} flex justify-center items-center`} >
        <div className="p-8">
            <p className={`${styles.heading1} text-center`}>
                Ups! I'm afraid the wind just dropped! 
            </p>
        </div>
    </section>
  )
}

export default NoPage