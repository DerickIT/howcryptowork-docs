import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    docsSidebar: [
        'preface',
        {
            type: 'category',
            label: 'Blockchain Foundations',
            collapsed: false,
            items: [
                'bitcoin',
                'ethereum',
                'solana',
                'l1-blockchains',
            ],
        },
        {
            type: 'category',
            label: 'Infrastructure & Security',
            items: [
                'custody',
                'market-structure',
            ],
        },
        {
            type: 'category',
            label: 'DeFi & Markets',
            items: [
                'defi',
                'mev',
                'stablecoins-rwas',
                'hyperliquid',
            ],
        },
        {
            type: 'category',
            label: 'Digital Assets & Governance',
            items: [
                'nfts',
                'governance',
            ],
        },
        {
            type: 'category',
            label: 'Emerging Frontiers',
            items: [
                'depin',
                'quantum-resistance',
                'prediction-markets',
            ],
        },
    ],
};

export default sidebars;
