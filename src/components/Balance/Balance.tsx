import React from 'react'
import {selectBalance} from "../../redux/blackJackSlice";
import {useSelector} from "react-redux";
import styles from './Balance.module.css'


export function Balance(){
    const balance = useSelector(selectBalance);

    return (
        <div className={styles.balance_container}>
            <p className={styles.balance_title}>Balance</p>
            <p className={styles.balance_paragraph}>{balance}</p>
        </div>
    )
}