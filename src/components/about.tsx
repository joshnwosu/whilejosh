import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Nav from './nav';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoIosRedo,
  IoIosCode,
  IoIosMoon,
  IoIosSunny,
} from 'react-icons/io';
import themeContext from '@/components/themeContext';
import { data } from 'portfolio.config';

const DATA = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/whilejosh',
    icon: <IoLogoTwitter size={20} />,
  },
  {
    title: 'Github',
    href: 'https://github.com/joshnwosu',
    icon: <IoLogoGithub size={20} />,
  },
];

const About: React.FC = () => {
  const theme = React.useContext(themeContext);
  const [mode, setMode] = React.useState(false);

  const handleToggle = () => {
    setMode(!mode);
    theme.toggleTheme(!mode);
  };

  return (
    <div className={styles.about}>
      <div>
        <div>
          <div>
            <h1 className={styles.name}>
              {data.author}{' '}
              <span className={styles.theme_icon} onClick={handleToggle}>
                {mode ? (
                  <IoIosMoon size={20} color={theme.themeProps['textColor']} />
                ) : (
                  <IoIosSunny size={20} color={theme.themeProps['textColor']} />
                )}
              </span>
            </h1>
            <h2 className={styles.title}>
              <IoIosCode
                size={16}
                style={{ marginRight: 5, color: 'var(--text-color-light)' }}
              />
              <span>Software Engineer</span>
            </h2>
          </div>
          {/* <div>
            <p className={[styles.desc, styles.mt_32].join(" ")}>
              Hi, I&apos;m Joshua Nwosu a software engineer (and sometimes UI/UX
              designer).
            </p>
            <p className={[styles.desc, styles.mt_8].join(" ")}>
              I build open-source{" "}
              <a
                href="https://github.com/joshnwosu"
                target="_blank"
                rel="noreferrer"
              >
                front-end libraries
              </a>{" "}
              and also contribute to open-source projects with over 5+ years of
              experience.
            </p>
            <p className={[styles.desc, styles.mt_8].join(" ")}>
              When I am not occupied with my daily responsibilities, I like to
              share my knowledge and experiences with others by posting about
              the things I have learned. I find it to be a fulfilling way to
              reflect on my growth and help others in the process.
            </p>
          </div> */}
          <div>
            <p className={[styles.desc, styles.mt_32].join(' ')}>
              Hi, I am {data.author}, a {data.title} with over five years of
              experience in the tech industry. My expertise lies in creating
              efficient and user-friendly software solutions. I am driven by my
              passion for programming and constantly seeking new challenges to
              improve my skills.
            </p>
            <p className={[styles.desc, styles.mt_8].join(' ')}>
              I am also an active member of the open-source community,{' '}
              <a
                href="https://github.com/joshnwosu"
                target="_blank"
                rel="noreferrer"
              >
                building libraries
              </a>{' '}
              and contributing to projects. I believe in sharing my knowledge
              and helping others to grow in the field of technology. I am always
              striving to create top-notch software that makes a positive
              impact.
            </p>
          </div>
        </div>
        <Nav />
      </div>

      <div className={styles.footer}>
        <div className={styles.profile_pic}>
          <Image
            src="https://media.licdn.com/dms/image/C5603AQEEfwyQYyHXHw/profile-displayphoto-shrink_800_800/0/1613826760366?e=1680134400&v=beta&t=sltVISQB9nr2CCn4VSuxDsUItup-uaT7HRc-olvo7Tc"
            alt="My Image"
            width={40}
            height={40}
          />
          ;
        </div>
        <ul className={styles.socials}>
          {DATA.map(({ title, icon, href }, index) => (
            <li key={index} className={styles.socials_li}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.socials_link}
              >
                {icon}
                <span className={styles.socials_title}>{title}</span>
                <IoIosRedo />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
