import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: (
            <Translate id="homepage.features.foundations.title">Blockchain Foundations</Translate>
        ) as unknown as string,
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <Translate id="homepage.features.foundations.description">
                Deep dives into Bitcoin, Ethereum, Solana, and other Layer 1 blockchains — covering consensus mechanisms, cryptography, and network architecture.
            </Translate>
        ),
    },
    {
        title: (
            <Translate id="homepage.features.defi.title">DeFi & Market Infrastructure</Translate>
        ) as unknown as string,
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <Translate id="homepage.features.defi.description">
                Understand decentralized finance, market structure, MEV, stablecoins, and the infrastructure powering modern crypto markets.
            </Translate>
        ),
    },
    {
        title: (
            <Translate id="homepage.features.frontiers.title">Emerging Frontiers</Translate>
        ) as unknown as string,
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <Translate id="homepage.features.frontiers.description">
                Explore governance, DePIN, quantum resistance, prediction markets, and the latest innovations shaping the future of crypto.
            </Translate>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
