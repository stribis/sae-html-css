import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Intro to Web',
    Svg: require('@site/static/img/undraw_web_devices_re_m8sc.svg').default,
    description: (
      <>
        Let's kick things off by exploring the wild and wonderful world of the web! We'll cover the basics - how data zips around online, what makes up a website, and why the internet is the way it is.
      </>
    ),
  },
  {
    title: 'HTML/CSS',
    Svg: require('@site/static/img/undraw_static_website_re_x70h.svg').default,
    description: (
      <>
        Time to get hands-on! HTML is our language for structuring web content, while CSS is our secret sauce for making it look stunning. We'll play with tags, spice things up with styles, and learn how to create web pages that not only work but also look good doing it.
      </>
    ),
  },
  {
    title: 'Responsive Design',
    Svg: require('@site/static/img/undraw_web_devices_re_m8sc.svg').default,
    description: (
      <>
        Responsive Design is all about making our creations look awesome on any screen - big, small, or in between. Get ready to make your websites flex and adapt like digital acrobats!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
