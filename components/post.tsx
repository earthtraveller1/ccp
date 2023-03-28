import styles from './post.module.css'

export default function Post({ title, description }: { title: string, description: string }) {
    return <div className={styles.box}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
    </div>
}
