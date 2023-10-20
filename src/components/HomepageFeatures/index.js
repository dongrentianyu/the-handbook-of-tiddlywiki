import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '太微中文教程',
    Svg: require('@site/static/img/TiddlyWikiIconBlack.svg').default,
    link: 'https://tw-cn.netlify.app/',
    description: (
      <>
        中文社区共建的TiddlyWiki教程，体验从入门到知识管理大师之路
      </>
    ),
  },
  {
    title: '太微中文论坛',
    Svg: require('@site/static/img/TiddlyWikiIconBlue.svg').default,
    link: 'https://talk.tidgi.fun/topic/6/',
    description: (
      <>
        来太微中文论坛讨论吧，把内容沉淀下去，共同发展
      </>
    ),
  },
  {
    title: 'CPL',
    Svg: require('@site/static/img/阴阳猫.svg').default,
    link: 'https://tw-cpl.netlify.app/',
    description: (
      <>
        太微插件聚合中心
      </>
    ),
  },

  {
    title: 'TiddlyWiki XP',
    Svg: require('@site/static/img/tiddlywiki-xp.svg').default,
    link: 'https://keatonlao.github.io/tiddlywiki-xp/',
    description: (
      <>
        TiddlyWiki XP 在官方英文空白版本上装配了一些必备插件，让新手可以快速体验TiddlyWiki的魅力。
      </>
    ),
  },
];

function Feature({ Svg, title, link, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link} target="_blank"><h3>{title}</h3></a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
