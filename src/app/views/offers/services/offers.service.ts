import { Injectable } from '@angular/core';
import { FiltersInterface, FiltersUrlInterface } from 'src/app/shared/services/filters.service';
import { Subject } from 'rxjs';
import { Params } from '@angular/router';

export interface Offer {
  id: number;
  position: string;
  salaryMin: number;
  salaryMax: number;
  company: string;
  size: number;
  place: string[];
  technologies: string[];
  levels: string[];
  url: string;
  coordinates: number[];
  logo: string;
  emptype: string;
  shortdesc: string;
  skills: {
    name: string;
    leveltitle: string;
    levelnumber: number;
  }[],
  description: string;
}
@Injectable()
export class OffersService {
  private offers: Offer[] = [
    {
      id: 1,
      position: 'Front End Developer',
      salaryMin: 5,
      salaryMax: 12,
      company: 'Netguru',
      size: 500,
      place: [
        "Gdańsk"
      ],
      technologies: [
        "JS", "HTML"
      ],
      levels: [
        "Junior", "Mid"
      ],
      url: "pierwsza-oferta",
      coordinates: [54.386140, 18.646010],
      logo: "https://bucket.justjoin.it/offers/company_logos/original/ece2f66bec63f3ea8beef06989b925f406cf42d1.png?1554922094",
      emptype: "B2B",
      shortdesc: "Lorem ipsum dolor sit amet, consectetur a aliqua. Ut enim ad minim veniam, quis nostrud exdo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills: [
        {
          name: "Linux/Unix",
          leveltitle: "regular",
          levelnumber: 3
        },
        {
          name: "Docker/containers",
          leveltitle: "senior",
          levelnumber: 5,
        },
        {
          name: "Jenkins/CI",
          leveltitle: "mid",
          levelnumber: 3,
        },
        {
          name: "Chef/Ansible/Puppet",
          leveltitle: "regular",
          levelnumber: 3,
        },
        {
          name: "Cloud Computing",
          leveltitle: "junior",
          levelnumber: 1,
        }
      ],
      description: `
      <div>We are Netguru, one of the<a
          href="https://www.netguru.co/blog/netguru-ft1000-list-spotify-skyscanner?utm_campaign=Marketing%20-%20FT1000&amp;utm_content=52384070&amp;utm_medium=social&amp;utm_source=linkedin"
          target="_blank"> fastest growing companies in Europe</a>. We maintain an unshakable passion for developing
        web and mobile applications for our clients worldwide and making a name for ourselves in the world of
        software development.<br><br></div>
      <div>We have built an outstanding organisational culture based on transparency, team spirit, regular feedback,
        and continuous learning. Currently, we’re on the lookout for a passionate <strong>Devops Engineer</strong>
        who could join our team. If you have the talent and the skills it takes, apply NOW!<strong><br></strong><br>
      </div>
      <div><strong>Joining Netguru means:&nbsp;</strong></div>
      <ul>
        <li>working with an <strong>experienced and open-minded team of software specialists</strong>,</li>
        <li>ability to make an impact on the <strong>technological stack</strong> of the whole company,</li>
        <li><strong>constant development</strong> of your hard and soft skills (e.g. internal webinars or
          international and local conferences),</li>
        <li>Learning and polishing the skills which will make a <strong>perfect foundation for a future promotion
            and pay rise at Netguru</strong>,</li>
        <li><strong>flexplace</strong>: work from just about any place in the world and whenever suits you best.
        </li>
      </ul>
      <div><strong><br>Your responsibilities:</strong></div>
      <ul>
        <li>fixing<strong> day-to-day DevOps-related issues</strong> and helping the rest of Dev team deliver and
          ship their work,</li>
        <li><strong>configuring </strong>and<strong> automating processes</strong> related to building and
          maintaining development environments (<strong>using Ansible and Docker</strong>),</li>
        <li>implementing and maintaining monitoring,<strong> Continuous Integration </strong>and<strong>
            log-management systems,</strong></li>
        <li>keeping systems <strong>secure </strong>and<strong> up-to-date,</strong></li>
        <li><strong>creating and reviewing DevOps processes</strong>: e.g. backups and security checks,</li>
        <li><strong>automating</strong> day-to-day tasks.</li>
      </ul>
      <div><strong><br>Must-haves:</strong></div>
      <ul>
        <li>proven wide knowledge of the <strong>Unix environment,</strong></li>
        <li>experience with <strong>Docker </strong>and<strong> at least one orchestration tool</strong>:
          Kubernetes, Swarm, Mesos Marathon,</li>
        <li>experience with <strong>IT automated tools</strong> (like Ansible/Chef),</li>
        <li>usage of <strong>VCS on a daily basis</strong> (Git preferable),</li>
        <li>familiarity with <strong>CI tools</strong> (like Jenkins, CircleCI) and <strong>deployment
            pipelines,</strong></li>
        <li>knowledge of <strong>scripting languages</strong> (Bash/Ruby/Python),</li>
        <li><strong>basics understanding of network management</strong> (DNS, iptables),</li>
        <li>good command of <strong>written and spoken English and Polish (CEFR B2+),</strong></li>
        <li>ability to <strong>work independently</strong>,</li>
        <li>understanding and some experience (or a certificate) with<strong> one of the following cloud
            providers:</strong>
          <ul>
            <li>AWS Amazon services,</li>
            <li>Microsoft Azure,</li>
            <li>Google Cloud Platform.</li>
          </ul>
        </li>
      </ul>
      <div><strong><br>Nice-to-haves:</strong></div>
      <ul>
        <li>knowledge of <strong>load balancing/replication systems,</strong></li>
        <li>familiarity with <strong>NGINX or HAProxy,</strong></li>
        <li>some <strong>web development experience</strong> (super-happy if you know Rails or Node),</li>
        <li>track record of <strong>successful cooperation with developers.</strong></li>
      </ul>
      <div><strong><br>Perks &amp; Benefits:</strong></div>
      <ul>
        <li><strong>MacBook</strong> — we like to work with the best equipment,</li>
        <li>additional <strong>accessories</strong> for your computer,</li>
        <li><strong>private health insurance + MultiSport card,</strong></li>
        <li>individual<strong> co-financed educational plan,</strong></li>
        <li><strong>free sandwiches </strong>and<strong> half-price lunches,</strong></li>
        <li><strong>Team Retreats</strong> and <strong>Team meet-ups,</strong></li>
        <li>If you want to read more about it check our <a href="https://www.netguru.co/blog/reasons-work-netguru"
            target="_blank"><strong>7 reasons to work at Netguru</strong></a>.</li>
      </ul>
      <div><br><strong>We are just getting started 🚀 Ready to face the challenge?</strong></div>
      <div><strong>Don't hold off any longer and apply via the form!</strong></div>
    `,
    },
    {
      id: 2,
      position: "Backend End Developer",
      salaryMin: 12,
      salaryMax: 25,
      company: "Sii",
      size: 200,
      place: [
        "Warszawa", "Gdańsk"
      ],
      technologies: [
        "PHP"
      ],
      levels: [
        "Junior", "Senior"
      ],
      url: "druga-oferta",
      coordinates: [54.414669, 18.566380],
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/5bbf94e9e883484eb971bdf302297789ffef9ea4.png?1556548168",
      emptype: "B2B",
      shortdesc: "e et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills: [
        {
          name: "Linux/Unix",
          leveltitle: "regular",
          levelnumber: 3
        },
        {
          name: "Docker/containers",
          leveltitle: "senior",
          levelnumber: 5,
        },
        {
          name: "Jenkins/CI",
          leveltitle: "mid",
          levelnumber: 3,
        },
        {
          name: "Chef/Ansible/Puppet",
          leveltitle: "regular",
          levelnumber: 3,
        },
        {
          name: "Cloud Computing",
          leveltitle: "junior",
          levelnumber: 1,
        }
      ],
      description: `
      <div>We are Netguru, one of the<a
          href="https://www.netguru.co/blog/netguru-ft1000-list-spotify-skyscanner?utm_campaign=Marketing%20-%20FT1000&amp;utm_content=52384070&amp;utm_medium=social&amp;utm_source=linkedin"
          target="_blank"> fastest growing companies in Europe</a>. We maintain an unshakable passion for developing
        web and mobile applications for our clients worldwide and making a name for ourselves in the world of
        software development.<br><br></div>
      <div>We have built an outstanding organisational culture based on transparency, team spirit, regular feedback,
        and continuous learning. Currently, we’re on the lookout for a passionate <strong>Devops Engineer</strong>
        who could join our team. If you have the talent and the skills it takes, apply NOW!<strong><br></strong><br>
      </div>
      <div><strong>Joining Netguru means:&nbsp;</strong></div>
      <ul>
        <li>working with an <strong>experienced and open-minded team of software specialists</strong>,</li>
        <li>ability to make an impact on the <strong>technological stack</strong> of the whole company,</li>
        <li><strong>constant development</strong> of your hard and soft skills (e.g. internal webinars or
          international and local conferences),</li>
        <li>Learning and polishing the skills which will make a <strong>perfect foundation for a future promotion
            and pay rise at Netguru</strong>,</li>
        <li><strong>flexplace</strong>: work from just about any place in the world and whenever suits you best.
        </li>
      </ul>
      <div><strong><br>Your responsibilities:</strong></div>
      <ul>
        <li>fixing<strong> day-to-day DevOps-related issues</strong> and helping the rest of Dev team deliver and
          ship their work,</li>
        <li><strong>configuring </strong>and<strong> automating processes</strong> related to building and
          maintaining development environments (<strong>using Ansible and Docker</strong>),</li>
        <li>implementing and maintaining monitoring,<strong> Continuous Integration </strong>and<strong>
            log-management systems,</strong></li>
        <li>keeping systems <strong>secure </strong>and<strong> up-to-date,</strong></li>
        <li><strong>creating and reviewing DevOps processes</strong>: e.g. backups and security checks,</li>
        <li><strong>automating</strong> day-to-day tasks.</li>
      </ul>
      <div><strong><br>Must-haves:</strong></div>
      <ul>
        <li>proven wide knowledge of the <strong>Unix environment,</strong></li>
        <li>experience with <strong>Docker </strong>and<strong> at least one orchestration tool</strong>:
          Kubernetes, Swarm, Mesos Marathon,</li>
        <li>experience with <strong>IT automated tools</strong> (like Ansible/Chef),</li>
        <li>usage of <strong>VCS on a daily basis</strong> (Git preferable),</li>
        <li>familiarity with <strong>CI tools</strong> (like Jenkins, CircleCI) and <strong>deployment
            pipelines,</strong></li>
        <li>knowledge of <strong>scripting languages</strong> (Bash/Ruby/Python),</li>
        <li><strong>basics understanding of network management</strong> (DNS, iptables),</li>
        <li>good command of <strong>written and spoken English and Polish (CEFR B2+),</strong></li>
        <li>ability to <strong>work independently</strong>,</li>
        <li>understanding and some experience (or a certificate) with<strong> one of the following cloud
            providers:</strong>
          <ul>
            <li>AWS Amazon services,</li>
            <li>Microsoft Azure,</li>
            <li>Google Cloud Platform.</li>
          </ul>
        </li>
      </ul>
      <div><strong><br>Nice-to-haves:</strong></div>
      <ul>
        <li>knowledge of <strong>load balancing/replication systems,</strong></li>
        <li>familiarity with <strong>NGINX or HAProxy,</strong></li>
        <li>some <strong>web development experience</strong> (super-happy if you know Rails or Node),</li>
        <li>track record of <strong>successful cooperation with developers.</strong></li>
      </ul>
      <div><strong><br>Perks &amp; Benefits:</strong></div>
      <ul>
        <li><strong>MacBook</strong> — we like to work with the best equipment,</li>
        <li>additional <strong>accessories</strong> for your computer,</li>
        <li><strong>private health insurance + MultiSport card,</strong></li>
        <li>individual<strong> co-financed educational plan,</strong></li>
        <li><strong>free sandwiches </strong>and<strong> half-price lunches,</strong></li>
        <li><strong>Team Retreats</strong> and <strong>Team meet-ups,</strong></li>
        <li>If you want to read more about it check our <a href="https://www.netguru.co/blog/reasons-work-netguru"
            target="_blank"><strong>7 reasons to work at Netguru</strong></a>.</li>
      </ul>
      <div><br><strong>We are just getting started 🚀 Ready to face the challenge?</strong></div>
      <div><strong>Don't hold off any longer and apply via the form!</strong></div>
    `,
    },
    {
      id: 3,
      position: "DevOps Engineer",
      salaryMin: 4,
      salaryMax: 6,
      company: "Intitek",
      size: 800,
      place: [
        "Gdynia", "Remote"
      ],
      technologies: [
        "Ruby", "HTML"
      ],
      levels: [
        "Mid"
      ],
      url: "trzecia-oferta",
      coordinates: [54.493850, 18.534860],
      logo: "https://bucket.justjoin.it/offers/company_logos/original/ece2f66bec63f3ea8beef06989b925f406cf42d1.png?1554922094",
      emptype: "o dzieło",
      shortdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidieniam, quis",
      skills: [
        {
          name: "Linux/Unix",
          leveltitle: "regular",
          levelnumber: 3
        },
        {
          name: "Docker/containers",
          leveltitle: "senior",
          levelnumber: 5,
        },
        {
          name: "Jenkins/CI",
          leveltitle: "mid",
          levelnumber: 3,
        },
        {
          name: "Chef/Ansible/Puppet",
          leveltitle: "regular",
          levelnumber: 3,
        },
        {
          name: "Cloud Computing",
          leveltitle: "junior",
          levelnumber: 1,
        }
      ],
      description: `
      <div>We are Netguru, one of the<a
          href="https://www.netguru.co/blog/netguru-ft1000-list-spotify-skyscanner?utm_campaign=Marketing%20-%20FT1000&amp;utm_content=52384070&amp;utm_medium=social&amp;utm_source=linkedin"
          target="_blank"> fastest growing companies in Europe</a>. We maintain an unshakable passion for developing
        web and mobile applications for our clients worldwide and making a name for ourselves in the world of
        software development.<br><br></div>
      <div>We have built an outstanding organisational culture based on transparency, team spirit, regular feedback,
        and continuous learning. Currently, we’re on the lookout for a passionate <strong>Devops Engineer</strong>
        who could join our team. If you have the talent and the skills it takes, apply NOW!<strong><br></strong><br>
      </div>
      <div><strong>Joining Netguru means:&nbsp;</strong></div>
      <ul>
        <li>working with an <strong>experienced and open-minded team of software specialists</strong>,</li>
        <li>ability to make an impact on the <strong>technological stack</strong> of the whole company,</li>
        <li><strong>constant development</strong> of your hard and soft skills (e.g. internal webinars or
          international and local conferences),</li>
        <li>Learning and polishing the skills which will make a <strong>perfect foundation for a future promotion
            and pay rise at Netguru</strong>,</li>
        <li><strong>flexplace</strong>: work from just about any place in the world and whenever suits you best.
        </li>
      </ul>
      <div><strong><br>Your responsibilities:</strong></div>
      <ul>
        <li>fixing<strong> day-to-day DevOps-related issues</strong> and helping the rest of Dev team deliver and
          ship their work,</li>
        <li><strong>configuring </strong>and<strong> automating processes</strong> related to building and
          maintaining development environments (<strong>using Ansible and Docker</strong>),</li>
        <li>implementing and maintaining monitoring,<strong> Continuous Integration </strong>and<strong>
            log-management systems,</strong></li>
        <li>keeping systems <strong>secure </strong>and<strong> up-to-date,</strong></li>
        <li><strong>creating and reviewing DevOps processes</strong>: e.g. backups and security checks,</li>
        <li><strong>automating</strong> day-to-day tasks.</li>
      </ul>
      <div><strong><br>Must-haves:</strong></div>
      <ul>
        <li>proven wide knowledge of the <strong>Unix environment,</strong></li>
        <li>experience with <strong>Docker </strong>and<strong> at least one orchestration tool</strong>:
          Kubernetes, Swarm, Mesos Marathon,</li>
        <li>experience with <strong>IT automated tools</strong> (like Ansible/Chef),</li>
        <li>usage of <strong>VCS on a daily basis</strong> (Git preferable),</li>
        <li>familiarity with <strong>CI tools</strong> (like Jenkins, CircleCI) and <strong>deployment
            pipelines,</strong></li>
        <li>knowledge of <strong>scripting languages</strong> (Bash/Ruby/Python),</li>
        <li><strong>basics understanding of network management</strong> (DNS, iptables),</li>
        <li>good command of <strong>written and spoken English and Polish (CEFR B2+),</strong></li>
        <li>ability to <strong>work independently</strong>,</li>
        <li>understanding and some experience (or a certificate) with<strong> one of the following cloud
            providers:</strong>
          <ul>
            <li>AWS Amazon services,</li>
            <li>Microsoft Azure,</li>
            <li>Google Cloud Platform.</li>
          </ul>
        </li>
      </ul>
      <div><strong><br>Nice-to-haves:</strong></div>
      <ul>
        <li>knowledge of <strong>load balancing/replication systems,</strong></li>
        <li>familiarity with <strong>NGINX or HAProxy,</strong></li>
        <li>some <strong>web development experience</strong> (super-happy if you know Rails or Node),</li>
        <li>track record of <strong>successful cooperation with developers.</strong></li>
      </ul>
      <div><strong><br>Perks &amp; Benefits:</strong></div>
      <ul>
        <li><strong>MacBook</strong> — we like to work with the best equipment,</li>
        <li>additional <strong>accessories</strong> for your computer,</li>
        <li><strong>private health insurance + MultiSport card,</strong></li>
        <li>individual<strong> co-financed educational plan,</strong></li>
        <li><strong>free sandwiches </strong>and<strong> half-price lunches,</strong></li>
        <li><strong>Team Retreats</strong> and <strong>Team meet-ups,</strong></li>
        <li>If you want to read more about it check our <a href="https://www.netguru.co/blog/reasons-work-netguru"
            target="_blank"><strong>7 reasons to work at Netguru</strong></a>.</li>
      </ul>
      <div><br><strong>We are just getting started 🚀 Ready to face the challenge?</strong></div>
      <div><strong>Don't hold off any longer and apply via the form!</strong></div>
    `,
    },
    {
      id: 4,
      position: "PHP/Magento Developer",
      salaryMin: 7,
      salaryMax: 17,
      company: "Ciklum",
      size: 26,
      place: [
        "Wrocław",
      ],
      technologies: [
        "JS", "HTML", "Testing", "Ruby", "PHP"
      ],
      levels: [
        "Junior", "Mid", "Senior"
      ],
      url: "czwarta-oferta",
      coordinates: [51.120440, 17.018420],
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/7a0e41dc3cfd5456e2e4d188c6769834698c5ea4.png?1550497202",
      emptype: "Zlecenie",
      shortdesc: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills: [
        {
          name: "Linux/Unix",
          leveltitle: "regular",
          levelnumber: 3
        },
        {
          name: "Docker/containers",
          leveltitle: "senior",
          levelnumber: 5,
        },
        {
          name: "Jenkins/CI",
          leveltitle: "mid",
          levelnumber: 3,
        },
        {
          name: "Chef/Ansible/Puppet",
          leveltitle: "regular",
          levelnumber: 3,
        },
        {
          name: "Cloud Computing",
          leveltitle: "junior",
          levelnumber: 1,
        }
      ],
      description: `
      <div>We are Netguru, one of the<a
          href="https://www.netguru.co/blog/netguru-ft1000-list-spotify-skyscanner?utm_campaign=Marketing%20-%20FT1000&amp;utm_content=52384070&amp;utm_medium=social&amp;utm_source=linkedin"
          target="_blank"> fastest growing companies in Europe</a>. We maintain an unshakable passion for developing
        web and mobile applications for our clients worldwide and making a name for ourselves in the world of
        software development.<br><br></div>
      <div>We have built an outstanding organisational culture based on transparency, team spirit, regular feedback,
        and continuous learning. Currently, we’re on the lookout for a passionate <strong>Devops Engineer</strong>
        who could join our team. If you have the talent and the skills it takes, apply NOW!<strong><br></strong><br>
      </div>
      <div><strong>Joining Netguru means:&nbsp;</strong></div>
      <ul>
        <li>working with an <strong>experienced and open-minded team of software specialists</strong>,</li>
        <li>ability to make an impact on the <strong>technological stack</strong> of the whole company,</li>
        <li><strong>constant development</strong> of your hard and soft skills (e.g. internal webinars or
          international and local conferences),</li>
        <li>Learning and polishing the skills which will make a <strong>perfect foundation for a future promotion
            and pay rise at Netguru</strong>,</li>
        <li><strong>flexplace</strong>: work from just about any place in the world and whenever suits you best.
        </li>
      </ul>
      <div><strong><br>Your responsibilities:</strong></div>
      <ul>
        <li>fixing<strong> day-to-day DevOps-related issues</strong> and helping the rest of Dev team deliver and
          ship their work,</li>
        <li><strong>configuring </strong>and<strong> automating processes</strong> related to building and
          maintaining development environments (<strong>using Ansible and Docker</strong>),</li>
        <li>implementing and maintaining monitoring,<strong> Continuous Integration </strong>and<strong>
            log-management systems,</strong></li>
        <li>keeping systems <strong>secure </strong>and<strong> up-to-date,</strong></li>
        <li><strong>creating and reviewing DevOps processes</strong>: e.g. backups and security checks,</li>
        <li><strong>automating</strong> day-to-day tasks.</li>
      </ul>
      <div><strong><br>Must-haves:</strong></div>
      <ul>
        <li>proven wide knowledge of the <strong>Unix environment,</strong></li>
        <li>experience with <strong>Docker </strong>and<strong> at least one orchestration tool</strong>:
          Kubernetes, Swarm, Mesos Marathon,</li>
        <li>experience with <strong>IT automated tools</strong> (like Ansible/Chef),</li>
        <li>usage of <strong>VCS on a daily basis</strong> (Git preferable),</li>
        <li>familiarity with <strong>CI tools</strong> (like Jenkins, CircleCI) and <strong>deployment
            pipelines,</strong></li>
        <li>knowledge of <strong>scripting languages</strong> (Bash/Ruby/Python),</li>
        <li><strong>basics understanding of network management</strong> (DNS, iptables),</li>
        <li>good command of <strong>written and spoken English and Polish (CEFR B2+),</strong></li>
        <li>ability to <strong>work independently</strong>,</li>
        <li>understanding and some experience (or a certificate) with<strong> one of the following cloud
            providers:</strong>
          <ul>
            <li>AWS Amazon services,</li>
            <li>Microsoft Azure,</li>
            <li>Google Cloud Platform.</li>
          </ul>
        </li>
      </ul>
      <div><strong><br>Nice-to-haves:</strong></div>
      <ul>
        <li>knowledge of <strong>load balancing/replication systems,</strong></li>
        <li>familiarity with <strong>NGINX or HAProxy,</strong></li>
        <li>some <strong>web development experience</strong> (super-happy if you know Rails or Node),</li>
        <li>track record of <strong>successful cooperation with developers.</strong></li>
      </ul>
      <div><strong><br>Perks &amp; Benefits:</strong></div>
      <ul>
        <li><strong>MacBook</strong> — we like to work with the best equipment,</li>
        <li>additional <strong>accessories</strong> for your computer,</li>
        <li><strong>private health insurance + MultiSport card,</strong></li>
        <li>individual<strong> co-financed educational plan,</strong></li>
        <li><strong>free sandwiches </strong>and<strong> half-price lunches,</strong></li>
        <li><strong>Team Retreats</strong> and <strong>Team meet-ups,</strong></li>
        <li>If you want to read more about it check our <a href="https://www.netguru.co/blog/reasons-work-netguru"
            target="_blank"><strong>7 reasons to work at Netguru</strong></a>.</li>
      </ul>
      <div><br><strong>We are just getting started 🚀 Ready to face the challenge?</strong></div>
      <div><strong>Don't hold off any longer and apply via the form!</strong></div>
    `,
    },
    {
      id: 5,
      position: "Node.js Developer",
      salaryMin: 8,
      salaryMax: 19,
      company: "Netguru",
      size: 99,
      place: [
        "Warszawa"
      ],
      technologies: [
        "JS", "Testing"
      ],
      levels: [
        "Junior", "Mid"
      ],
      url: "piata-oferta",
      coordinates: [52.2279600, 21.007730],
      logo: "https://bucket.justjoin.it/offers/company_logos/thumb/34b34f78b1d6f1cdb1b12515c8a7b967856dfa0d.jpg?1556551838",
      emptype: "UOP",
      shortdesc: "Lorem ipsum dolor sit amet, enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills: [
        {
          name: "Linux/Unix",
          leveltitle: "regular",
          levelnumber: 3
        },
        {
          name: "Docker/containers",
          leveltitle: "senior",
          levelnumber: 5,
        },
        {
          name: "Jenkins/CI",
          leveltitle: "mid",
          levelnumber: 3,
        },
        {
          name: "Chef/Ansible/Puppet",
          leveltitle: "regular",
          levelnumber: 3,
        },
        {
          name: "Cloud Computing",
          leveltitle: "junior",
          levelnumber: 1,
        }
      ],
      description: `
      <div>We are Netguru, one of the<a
          href="https://www.netguru.co/blog/netguru-ft1000-list-spotify-skyscanner?utm_campaign=Marketing%20-%20FT1000&amp;utm_content=52384070&amp;utm_medium=social&amp;utm_source=linkedin"
          target="_blank"> fastest growing companies in Europe</a>. We maintain an unshakable passion for developing
        web and mobile applications for our clients worldwide and making a name for ourselves in the world of
        software development.<br><br></div>
      <div>We have built an outstanding organisational culture based on transparency, team spirit, regular feedback,
        and continuous learning. Currently, we’re on the lookout for a passionate <strong>Devops Engineer</strong>
        who could join our team. If you have the talent and the skills it takes, apply NOW!<strong><br></strong><br>
      </div>
      <div><strong>Joining Netguru means:&nbsp;</strong></div>
      <ul>
        <li>working with an <strong>experienced and open-minded team of software specialists</strong>,</li>
        <li>ability to make an impact on the <strong>technological stack</strong> of the whole company,</li>
        <li><strong>constant development</strong> of your hard and soft skills (e.g. internal webinars or
          international and local conferences),</li>
        <li>Learning and polishing the skills which will make a <strong>perfect foundation for a future promotion
            and pay rise at Netguru</strong>,</li>
        <li><strong>flexplace</strong>: work from just about any place in the world and whenever suits you best.
        </li>
      </ul>
      <div><strong><br>Your responsibilities:</strong></div>
      <ul>
        <li>fixing<strong> day-to-day DevOps-related issues</strong> and helping the rest of Dev team deliver and
          ship their work,</li>
        <li><strong>configuring </strong>and<strong> automating processes</strong> related to building and
          maintaining development environments (<strong>using Ansible and Docker</strong>),</li>
        <li>implementing and maintaining monitoring,<strong> Continuous Integration </strong>and<strong>
            log-management systems,</strong></li>
        <li>keeping systems <strong>secure </strong>and<strong> up-to-date,</strong></li>
        <li><strong>creating and reviewing DevOps processes</strong>: e.g. backups and security checks,</li>
        <li><strong>automating</strong> day-to-day tasks.</li>
      </ul>
      <div><strong><br>Must-haves:</strong></div>
      <ul>
        <li>proven wide knowledge of the <strong>Unix environment,</strong></li>
        <li>experience with <strong>Docker </strong>and<strong> at least one orchestration tool</strong>:
          Kubernetes, Swarm, Mesos Marathon,</li>
        <li>experience with <strong>IT automated tools</strong> (like Ansible/Chef),</li>
        <li>usage of <strong>VCS on a daily basis</strong> (Git preferable),</li>
        <li>familiarity with <strong>CI tools</strong> (like Jenkins, CircleCI) and <strong>deployment
            pipelines,</strong></li>
        <li>knowledge of <strong>scripting languages</strong> (Bash/Ruby/Python),</li>
        <li><strong>basics understanding of network management</strong> (DNS, iptables),</li>
        <li>good command of <strong>written and spoken English and Polish (CEFR B2+),</strong></li>
        <li>ability to <strong>work independently</strong>,</li>
        <li>understanding and some experience (or a certificate) with<strong> one of the following cloud
            providers:</strong>
          <ul>
            <li>AWS Amazon services,</li>
            <li>Microsoft Azure,</li>
            <li>Google Cloud Platform.</li>
          </ul>
        </li>
      </ul>
      <div><strong><br>Nice-to-haves:</strong></div>
      <ul>
        <li>knowledge of <strong>load balancing/replication systems,</strong></li>
        <li>familiarity with <strong>NGINX or HAProxy,</strong></li>
        <li>some <strong>web development experience</strong> (super-happy if you know Rails or Node),</li>
        <li>track record of <strong>successful cooperation with developers.</strong></li>
      </ul>
      <div><strong><br>Perks &amp; Benefits:</strong></div>
      <ul>
        <li><strong>MacBook</strong> — we like to work with the best equipment,</li>
        <li>additional <strong>accessories</strong> for your computer,</li>
        <li><strong>private health insurance + MultiSport card,</strong></li>
        <li>individual<strong> co-financed educational plan,</strong></li>
        <li><strong>free sandwiches </strong>and<strong> half-price lunches,</strong></li>
        <li><strong>Team Retreats</strong> and <strong>Team meet-ups,</strong></li>
        <li>If you want to read more about it check our <a href="https://www.netguru.co/blog/reasons-work-netguru"
            target="_blank"><strong>7 reasons to work at Netguru</strong></a>.</li>
      </ul>
      <div><br><strong>We are just getting started 🚀 Ready to face the challenge?</strong></div>
      <div><strong>Don't hold off any longer and apply via the form!</strong></div>
    `,
    },
    {
      id: 6,
      position: "Test Engineer",
      salaryMin: 6,
      salaryMax: 20,
      company: "Neoteric",
      size: 50,
      place: [
        "Kraków", "Remote"
      ],
      technologies: [
        "Testing", "Ruby", "PHP"
      ],
      levels: [
        "Mid"
      ],
      url: "szosta-oferta",
      coordinates: [50.050140, 19.961570],
      logo: "https://bucket.justjoin.it/offers/company_logos/original/891a7c95f2d06d76a1c46bf416898d81ab03d4b5.png?1558291981",
      emptype: "B2B",
      shortdesc: "ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills: [
        {
          name: "Linux/Unix",
          leveltitle: "regular",
          levelnumber: 3
        },
        {
          name: "Docker/containers",
          leveltitle: "senior",
          levelnumber: 5,
        },
        {
          name: "Jenkins/CI",
          leveltitle: "mid",
          levelnumber: 3,
        },
        {
          name: "Chef/Ansible/Puppet",
          leveltitle: "regular",
          levelnumber: 3,
        },
        {
          name: "Cloud Computing",
          leveltitle: "junior",
          levelnumber: 1,
        }
      ],
      description: `
      <div>We are Netguru, one of the<a
          href="https://www.netguru.co/blog/netguru-ft1000-list-spotify-skyscanner?utm_campaign=Marketing%20-%20FT1000&amp;utm_content=52384070&amp;utm_medium=social&amp;utm_source=linkedin"
          target="_blank"> fastest growing companies in Europe</a>. We maintain an unshakable passion for developing
        web and mobile applications for our clients worldwide and making a name for ourselves in the world of
        software development.<br><br></div>
      <div>We have built an outstanding organisational culture based on transparency, team spirit, regular feedback,
        and continuous learning. Currently, we’re on the lookout for a passionate <strong>Devops Engineer</strong>
        who could join our team. If you have the talent and the skills it takes, apply NOW!<strong><br></strong><br>
      </div>
      <div><strong>Joining Netguru means:&nbsp;</strong></div>
      <ul>
        <li>working with an <strong>experienced and open-minded team of software specialists</strong>,</li>
        <li>ability to make an impact on the <strong>technological stack</strong> of the whole company,</li>
        <li><strong>constant development</strong> of your hard and soft skills (e.g. internal webinars or
          international and local conferences),</li>
        <li>Learning and polishing the skills which will make a <strong>perfect foundation for a future promotion
            and pay rise at Netguru</strong>,</li>
        <li><strong>flexplace</strong>: work from just about any place in the world and whenever suits you best.
        </li>
      </ul>
      <div><strong><br>Your responsibilities:</strong></div>
      <ul>
        <li>fixing<strong> day-to-day DevOps-related issues</strong> and helping the rest of Dev team deliver and
          ship their work,</li>
        <li><strong>configuring </strong>and<strong> automating processes</strong> related to building and
          maintaining development environments (<strong>using Ansible and Docker</strong>),</li>
        <li>implementing and maintaining monitoring,<strong> Continuous Integration </strong>and<strong>
            log-management systems,</strong></li>
        <li>keeping systems <strong>secure </strong>and<strong> up-to-date,</strong></li>
        <li><strong>creating and reviewing DevOps processes</strong>: e.g. backups and security checks,</li>
        <li><strong>automating</strong> day-to-day tasks.</li>
      </ul>
      <div><strong><br>Must-haves:</strong></div>
      <ul>
        <li>proven wide knowledge of the <strong>Unix environment,</strong></li>
        <li>experience with <strong>Docker </strong>and<strong> at least one orchestration tool</strong>:
          Kubernetes, Swarm, Mesos Marathon,</li>
        <li>experience with <strong>IT automated tools</strong> (like Ansible/Chef),</li>
        <li>usage of <strong>VCS on a daily basis</strong> (Git preferable),</li>
        <li>familiarity with <strong>CI tools</strong> (like Jenkins, CircleCI) and <strong>deployment
            pipelines,</strong></li>
        <li>knowledge of <strong>scripting languages</strong> (Bash/Ruby/Python),</li>
        <li><strong>basics understanding of network management</strong> (DNS, iptables),</li>
        <li>good command of <strong>written and spoken English and Polish (CEFR B2+),</strong></li>
        <li>ability to <strong>work independently</strong>,</li>
        <li>understanding and some experience (or a certificate) with<strong> one of the following cloud
            providers:</strong>
          <ul>
            <li>AWS Amazon services,</li>
            <li>Microsoft Azure,</li>
            <li>Google Cloud Platform.</li>
          </ul>
        </li>
      </ul>
      <div><strong><br>Nice-to-haves:</strong></div>
      <ul>
        <li>knowledge of <strong>load balancing/replication systems,</strong></li>
        <li>familiarity with <strong>NGINX or HAProxy,</strong></li>
        <li>some <strong>web development experience</strong> (super-happy if you know Rails or Node),</li>
        <li>track record of <strong>successful cooperation with developers.</strong></li>
      </ul>
      <div><strong><br>Perks &amp; Benefits:</strong></div>
      <ul>
        <li><strong>MacBook</strong> — we like to work with the best equipment,</li>
        <li>additional <strong>accessories</strong> for your computer,</li>
        <li><strong>private health insurance + MultiSport card,</strong></li>
        <li>individual<strong> co-financed educational plan,</strong></li>
        <li><strong>free sandwiches </strong>and<strong> half-price lunches,</strong></li>
        <li><strong>Team Retreats</strong> and <strong>Team meet-ups,</strong></li>
        <li>If you want to read more about it check our <a href="https://www.netguru.co/blog/reasons-work-netguru"
            target="_blank"><strong>7 reasons to work at Netguru</strong></a>.</li>
      </ul>
      <div><br><strong>We are just getting started 🚀 Ready to face the challenge?</strong></div>
      <div><strong>Don't hold off any longer and apply via the form!</strong></div>
    `,
    }
  ];

  paramsFromOffer = new Subject<Params>();

  getOffers() {
    return this.offers.slice();
  }

  getOffer(url: string) {
    const offer = this.offers.find(
      (s) => {
        return s.url === url;
      }
    );
    return offer;
  }

  filterOffers(filtersSetup: FiltersInterface) {
    let filteredOffers: Offer[];

    filteredOffers = this.offers.filter(function (el) {
      let placeFilter: Boolean;
      let techFilter: Boolean;
      let levelFilter: Boolean;
      let salaryMinFilter: Boolean;
      let salaryMaxFilter: Boolean;

      if (filtersSetup.place == "all" || filtersSetup.place == "All") {
        placeFilter = true;
      }
      else {
        placeFilter = el.place.some(function (pl) {
          return pl === filtersSetup.place;
        });
      }

      if (filtersSetup.tech == "all" || filtersSetup.tech == "All") {
        techFilter = true;
      }
      else {
        techFilter = el.technologies.some(function (te) {
          return te === filtersSetup.tech;
        });
      }

      if (filtersSetup.level == "all" || filtersSetup.level == "All") {
        levelFilter = true;
      }
      else {
        levelFilter = el.levels.some(function (lv) {
          return lv === filtersSetup.level;
        });
      }

      if (filtersSetup.salaryMin == 0 || filtersSetup.salaryMin <= el.salaryMin) {
        salaryMinFilter = true;
      }
      else {
        return false;
      }


      if (filtersSetup.salaryMax == 0 || filtersSetup.salaryMax >= el.salaryMax) {
        salaryMaxFilter = true;
      }
      else {
        return false;
      }


      return placeFilter && techFilter && levelFilter && salaryMinFilter && salaryMaxFilter;
    });

    return filteredOffers;
  }


  constructor() { }

}
