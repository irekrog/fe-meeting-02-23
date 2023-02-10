'use client';
import { Layout } from '@/components';
import styles from './framer-motion-page.module.scss';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExpandableContent } from '@/components/expandable-content/expandable-content';
import { useForm } from 'react-hook-form';

const list = {
    hidden: {
        opacity: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.05,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.05,
        },
    },
};

const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const FramerMotionPage = () => {
    const [items, setItems] = useState(() => Array.from({ length: 10 }));
    const [isOpen, setIsOpen] = useState(true);

    const handleAdd = () => {
        setItems((prevState) => [...prevState, +new Date()]);
    };

    const {
        register,
        formState: { errors },
    } = useForm({
        mode: 'all',
    });

    console.log('errors', errors);

    return (
        <Layout>
            <button onClick={() => setIsOpen((prevState) => !prevState)}>Click!</button>
            <button onClick={handleAdd}>Add</button>
            <div className={styles.container}>
                <div>
                    {isOpen && (
                        <motion.ul initial="hidden" animate="visible" variants={list}>
                            {items.map((_, i) => (
                                <motion.li variants={item} key={i}>
                                    Item {i}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </div>
                <div>
                    {isOpen && (
                        <ul>
                            {items.map((_, i) => (
                                <li key={i}>Item {i}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={styles.wrapper}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" {...register('name', { required: true })} />
                        <ExpandableContent displayContent={!!errors?.name}>
                            <p className={styles.error}>Field is required</p>
                        </ExpandableContent>
                    </div>
                    <div>
                        <label htmlFor="name">Tel</label>

                        <input id="tel" {...register('tel', { required: true })} />
                        <ExpandableContent displayContent={!!errors?.tel}>
                            <p className={styles.error}>Field is required</p>
                        </ExpandableContent>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default FramerMotionPage;
