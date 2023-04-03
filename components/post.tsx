import Link from 'next/link'
import styles from './post.module.css'

export default function Post({ title, description, url }: { title: string, description: string, url: string }) {
    return (
        <Link href={url} className={styles.link}>
            <div className={styles.box}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>{title}</div>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
        </Link>
    )
}
