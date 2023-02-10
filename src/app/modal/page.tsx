'use client';

import { useEffect, useRef, useState } from 'react';
import { Layout } from '@/components';
import styles from './modal.module.scss';

const ModalPage = () => {
    const ref = useRef<HTMLDialogElement>(null);

    const onShowModal = () => {
        if (ref.current) {
            ref.current.showModal();
        }
    };

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('click', (event) => {
                if (event.target.nodeName === 'DIALOG') {
                    ref.current.close();
                }
            });
        }
    }, []);

    return (
        <Layout>
            <button onClick={onShowModal}>showModal()</button>
            <dialog ref={ref} className={styles.modal}>
                Hello from showModal() <input placeholder="Name" /> <input placeholder="Email" />
                <button onClick={() => ref.current.close()}>X</button>
            </dialog>
        </Layout>
    );
};

export default ModalPage;
