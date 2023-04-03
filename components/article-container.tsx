import { ReactNode } from 'react'
import styles from './article-container.module.css'

export default function ArticleContainer({ children }: { children: ReactNode }) {
    return <div className={styles.articleContainer}>
        {children}
    </div>
}
