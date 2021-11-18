import React from 'react';
import { Card } from 'antd';

import { Props } from './types';
import styles from './TemplateCard.module.scss';

const TemplateCard = (props: Props) => {
    const {imageUrl, title} = props;
    const { Meta } = Card;

    return (
        <Card hoverable className={styles.card}>
            <img className={styles.cardImage} alt="example" src={imageUrl} />
            <Meta title={title} />
        </Card>
    );
}

export default TemplateCard;