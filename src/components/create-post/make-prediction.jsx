import styles from './make.module.scss';

export default function MakePrediction({ setPage }) {
    return (
        <div className={styles.root}>
            I think
            <button type="button" onClick={() => setPage(0)}>stock</button>
            will go
            <button type="button" onClick={() => setPage(1)}>movement</button>
            by
            <button type="button" onClick={() => setPage(2)}>date</button>
        </div>
    )
}