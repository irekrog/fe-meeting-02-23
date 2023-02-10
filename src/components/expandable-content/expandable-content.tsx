import type { ReactNode } from 'react';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const expandableContentContainerVariants = {
    initial: {
        height: 0,
    },
    animate: {
        height: 'auto',
        transition: {
            when: 'beforeChildren',
            ease: 'easeInOut',
            duration: 0.225,
        },
    },
    exit: {
        height: 0,
        transition: {
            when: 'afterChildren',
        },
    },
};

const expandableContentChildrenVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.175,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.125,
        },
    },
};

export type ExpandableContentProps = {
    displayContent: boolean;
    initial?: boolean;
    children: ReactNode;
};

export const ExpandableContent = ({
    children,
    displayContent,
    initial = true,
}: ExpandableContentProps) => {
    return (
        <AnimatePresence initial={initial}>
            {displayContent && (
                <motion.div
                    variants={expandableContentContainerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ width: '100%' }}
                >
                    <motion.div
                        style={{ width: '100%' }}
                        variants={expandableContentChildrenVariants}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
