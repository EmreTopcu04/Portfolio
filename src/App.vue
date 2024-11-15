<template>
  <div class="app-c">
    <div class="scroll-wrapper">
      <div class="left-side">
        <div class="image">
          <img src="../src/assets/photo.jpeg" alt="profile" class="image" />
        </div>
        <div class="name">Emre Topcu</div>
        <div class="occupation">Computer Science Engineering Student</div>
        <div class="location">📍 Antalya, Turkey 🇹🇷</div>
        <div class="brief-text">
          Building Real Products For Real Clients, Not Just More Projects
        </div>
        <div class="work-together-section">
          <div class="work-together-text">Let's Work Together</div>
        </div>
        <div class="lower-part">
          <div class="resume">
            <img src="../src/assets/icons/folder_icon.svg" alt="folder" class="folder-image" />
            <a
              href="https://drive.google.com/file/d/1dGNVsC6R08RiJlk8kJNA079frqcIoZPy/view?usp=sharing"
              target="_blank"
              class="resume-link"
              >Resume</a
            >
          </div>
          <div class="links">
            <div class="links">
              <a href="https://github.com/EmreTopcu04" target="_blank" class="link">
                <img src="../src/assets/icons/github.svg" alt="github" class="icon" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info.etopcu@gmail.com"
                target="_blank"
                class="link"
              >
                <img src="../src/assets/icons/email.svg" alt="gmail" class="icon" />
              </a>
              <a href="https://www.linkedin.com/in/emre-topcu04/" target="_blank" class="link">
                <img src="../src/assets/icons/linkedin.svg" alt="linkedin" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="about-me-wrapper">
          <h1>About Me</h1>
          <div class="paragraph-wrapper">
            <p>
              I'm a 20-year-old Computer Science Engineering student at Akdeniz University,
              passionate about learning new technologies and building impactful projects.
            </p>
            <p>
              While I’m still a student, I've gained valuable experience in both frontend and
              backend development, allowing me to tackle full-stack solutions with confidence. I
              thrive on the excitement of discovering new tools, frameworks, and methods to improve
              my skills and deliver meaningful work.
            </p>
            <p>
              I'm constantly seeking opportunities to grow, and I look forward to contributing to
              the tech world in innovative and impactful ways.
            </p>
          </div>
        </div>
        <div class="skills-wrapper">
          <h1>Skills</h1>
          <div class="languages-wrapper">
            <h2>Languages</h2>
            <div class="languages">
              <div class="skill-wrapper" v-for="language in languages" :key="language">
                <div class="skill">{{ language }}</div>
              </div>
            </div>
          </div>
          <div class="frameworks-wrapper">
            <h2>Frameworks & Libraries</h2>
            <div class="frameworks">
              <div class="skill-wrapper" v-for="framework in frameworks" :key="framework">
                <div class="skill">{{ framework }}</div>
              </div>
            </div>
          </div>
          <div class="databases-wrapper">
            <h2>Databases</h2>
            <div class="databases">
              <div class="skill-wrapper" v-for="database in databases" :key="database">
                <div class="skill">{{ database }}</div>
              </div>
            </div>
          </div>
          <div class="practises-wrapper">
            <h2>Practises</h2>
            <div class="practises">
              <div class="skill-wrapper" v-for="practise in practises" :key="practise">
                <div class="skill">{{ practise }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="experience-wrapper">
          <h1>Experience</h1>
          <JobCard
            v-for="experience in experiences"
            :key="experience.title"
            :image="experience.image"
            :title="experience.title"
            :location="experience.location"
            :time="experience.time"
            :description="experience.description"
            :company="experience.company"
          />
        </div>
        <div class="education-wrapper">
          <h1>Education</h1>
          <JobCard
            v-for="education in educations"
            :key="education.title"
            :image="education.image"
            :title="education.title"
            :location="education.location"
            :time="education.time"
            :description="education.description"
            :company="education.company"
          />
        </div>
        <div class="project-wrapper">
          <h1>Projects</h1>
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :image="project.image"
            :title="project.title"
            :description="project.description"
            :link="project.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from './components/JobCard.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'App',
  components: {
    ProjectCard,
    JobCard,
  },
  data() {
    return {
      languages: ['Java', 'Kotlin', 'JavaScript', 'TypeScript', 'Python', 'Assembly', 'C', 'C++'],
      frameworks: ['ReactJS', 'Vue.js', 'SpaCy', 'Pandas', 'Numpy', 'Scikit-Learn', 'NLTK'],
      databases: ['SQL', 'Elasticsearch'],
      practises: ['Git', 'Agile', 'Design Patterns', 'Test-driven development', 'Virtualization'],
      experiences: [
        {
          image: 'gts',
          title: 'Intern',
          location: 'Antalya, Turkey',
          time: 'July 2024 - August 2024 · 2 Months',
          description:
            'Worked as a frontend developer intern at GTS, I developed various components using the Vue.js framework.',
          company: 'GTS Global Travel Services',
        },
        {
          image: 'tusaş',
          title: 'Candidate Engineer',
          location: 'Antalya, Turkey',
          time: 'November 2024 - Ongoing',
          description:
            "Working as a candidate engineer at Turkish Aerospace Industries, I'm responsible for developing and maintaining the company's internal software.",
          company: 'Türk Havacılık ve Uzay Sanayii',
        },
      ],
      educations: [
        {
          image: 'akdeniz',
          title: 'Bachelor of Computer Science and Engineering',
          location: 'Antalya, Turkey',
          time: 'September 2022 - Ongoing',
          description: 'Currently studying Computer Science Engineering at Akdeniz University.',
          company: 'Akdeniz University',
        },
      ],
      projects: [
        {
          image: 'chess_bot',
          title: 'Chess Bot',
          description:
            'Chess bot that plays in the terminal where it detects the best 3 moves and moves the pieces randomly. The PDF file about this script will be available in this repository.',
          link: 'https://github.com/EmreTopcu04/Chess_Bot',
        },
        {
          image: 'assembly',
          title: 'Assembly Projects',
          description:
            'This repository contains various assembly language projects developed as part of my coursework. The projects cover a wide range of topics, from basic arithmetic operations to more complex algorithms, all implemented in assembly language to interact directly with hardware and demonstrate low-level programming skills.',
          link: 'https://github.com/EmreTopcu04/Assembly_Projects',
        },
        {
          image: 'recipe',
          title: 'Recipe Website',
          description:
            'Basic recipe book page made with CSS, JavaScript, and HTML for user interface design studies.',
          link: 'https://github.com/EmreTopcu04/Recipe-Book-App',
        },
        {
          image: 'subscription',
          title: 'Email Subscription Website',
          description:
            'Basic email subscription page made with CSS, JavaScript, and HTML for user interface design studies.',
          link: 'https://github.com/EmreTopcu04/Email-Subscription-Page',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.app-c {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .scroll-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 3rem 3rem;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    .left-side {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 3rem 3rem;
      height: 100%;
      .image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
      .name {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: bold;
        color: #f1f1f1;
      }
      .occupation {
        font-size: 1.2rem;
      }
      .location {
        margin-top: 1rem;
        font-size: 1rem;
      }
      .brief-text {
        margin-top: 1rem;
        font-size: 0.8rem;
        text-align: start;
        color: hsl(0, 0%, 85%);
      }
      .lower-part {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        width: 100%;
        margin-top: 1.5rem;

        .resume {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10%;
          text-decoration: none;
          color: #f1f1f1;
          font-size: 80%;
          padding: 0.2rem 0.4rem;
          border: 1px solid #f1f1f1;
          border-radius: 5px;
          background-color: transparent;
          transition: all 0.3s;

          &:hover {
            background-color: #f1f1f1;
            color: #000;
            cursor: pointer;
            .folder-image {
              filter: invert(100%);
            }
            .resume-link {
              color: #000;
            }
          }
          .folder-image {
            width: 15%;
            height: 15%;
          }
          .resume-link {
            text-decoration: none;
            color: #f1f1f1;
          }
        }
        .links {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-evenly;
          .link {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            .icon {
              width: 25px;
              height: 25px;
              filter: invert(80%);
              &:hover {
                filter: invert(100%);
                cursor: pointer;
              }
            }
          }
        }
      }
      .work-together-section {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        margin-top: 2rem;
        .work-together-text {
          font-size: 1.5rem;
          color: #f1f1f1;
          font-weight: bold;
        }
        .work-together-button {
          margin-top: 1rem;
          padding: 0.5rem 2rem;
          border: 1px solid #f1f1f1;
          border-radius: 5px;
          color: #f1f1f1;
          font-size: 1rem;
          transition: all 0.3s;
          &:hover {
            background-color: #f1f1f1;
            color: #000;
            cursor: pointer;
          }
        }
      }
    }
    .right-side {
      width: 75%;
      height: 100%;
      overflow-y: scroll;
      padding: 3rem 3rem;
      -ms-overflow-style: none;
      scrollbar-width: none;
      .about-me-wrapper {
        h1 {
          font-size: 2rem;
          font-weight: bold;
          color: #f1f1f1;
        }
        .paragraph-wrapper {
          margin-top: 1rem;

          p {
            margin-top: 0.5rem;
            font-size: 1rem;
            color: hsl(0, 0%, 80%);
          }
        }
      }
      .skills-wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        h1 {
          font-size: 2rem;
          font-weight: bold;
          color: #f1f1f1;
        }
        .languages-wrapper {
          margin-top: 1rem;
          h2 {
            font-size: 1.2rem;
            font-weight: bold;
            color: #f1f1f1;
          }
          .languages {
            padding-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            .skill-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #1e3356;
              border-radius: 100px;
              .skill {
                padding: 0.2rem 0.8rem;
                color: hsl(217, 61%, 57%);
                font-weight: bold;
                font-size: 0.8rem;
              }
            }
          }
        }
        .frameworks-wrapper {
          margin-top: 1rem;
          h2 {
            font-size: 1.2rem;
            font-weight: bold;
            color: #f1f1f1;
          }
          .frameworks {
            padding-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            .skill-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #164728;
              border-radius: 100px;
              .skill {
                padding: 0.2rem 0.8rem;
                color: #1d9648;
                font-weight: bold;
                font-size: 0.8rem;
              }
            }
          }
        }
        .databases-wrapper {
          margin-top: 1rem;
          h2 {
            font-size: 1.2rem;
            font-weight: bold;
            color: #f1f1f1;
          }
          .databases {
            padding-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            .skill-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: hsl(12, 53%, 18%);
              border-radius: 100px;
              .skill {
                padding: 0.2rem 0.8rem;
                color: hsl(12, 53%, 48%);
                font-weight: bold;
                font-size: 0.8rem;
              }
            }
          }
        }
        .practises-wrapper {
          margin-top: 1rem;
          h2 {
            font-size: 1.2rem;
            font-weight: bold;
            color: #f1f1f1;
          }
          .practises {
            padding-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            .skill-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: hsl(51, 53%, 18%);
              border-radius: 100px;
              .skill {
                padding: 0.2rem 0.8rem;
                color: hsl(51, 53%, 48%);
                font-weight: bold;
                font-size: 0.8rem;
              }
            }
          }
        }
      }
      .experience-wrapper {
        margin-top: 2rem;
        h1 {
          font-size: 2rem;
          font-weight: bold;
          color: #f1f1f1;
        }
      }
      .education-wrapper {
        margin-top: 2rem;
        h1 {
          font-size: 2rem;
          font-weight: bold;
          color: #f1f1f1;
        }
      }
      .project-wrapper {
        margin-top: 2rem;
        h1 {
          font-size: 2rem;
          font-weight: bold;
          color: #f1f1f1;
        }
      }
    }
    .right-side::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: max-content;
    .scroll-wrapper {
      flex-direction: column;
      justify-content: start;
      padding: 2rem;
      box-sizing: border-box;
      .left-side {
        width: 100%;
        padding: 1rem;
      }
      .right-side {
        width: 100%;
        padding: 1rem;
        overflow: visible;

        .experience-wrapper {
          h1 {
            font-size: 1.5rem;
          }
        }
        .about-me-wrapper {
          h1 {
            font-size: 1.5rem;
          }
          .paragraph-wrapper {
            p {
              font-size: 1rem;
            }
          }
        }
        .experience-wrapper {
          h1 {
            font-size: 1.5rem;
          }
        }
        .education-wrapper {
          h1 {
            font-size: 1.5rem;
          }
        }
        .project-wrapper {
          h1 {
            font-size: 1.5rem;
          }
        }
        .skills-wrapper {
          h1 {
            font-size: 1.5rem;
          }
          .languages-wrapper {
            h2 {
              font-size: 1rem;
            }
            .languages {
              .skill-wrapper {
                .skill {
                  font-size: 0.8rem;
                }
              }
            }
          }
          .frameworks-wrapper {
            h2 {
              font-size: 1rem;
            }
            .frameworks {
              .skill-wrapper {
                .skill {
                  font-size: 0.8rem;
                }
              }
            }
          }
          .databases-wrapper {
            h2 {
              font-size: 1rem;
            }
            .databases {
              .skill-wrapper {
                .skill {
                  font-size: 0.8rem;
                }
              }
            }
          }
          .practises-wrapper {
            h2 {
              font-size: 1rem;
            }
            .practises {
              .skill-wrapper {
                .skill {
                  font-size: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: max-content;
    .scroll-wrapper {
      flex-direction: column;
      justify-content: start;
      padding: 2rem;
      box-sizing: border-box;
      .left-side {
        width: 100%;
        padding: 1rem;
      }
      .right-side {
        width: 100%;
        padding: 1rem;
        overflow: visible;

        .experience-wrapper {
          h1 {
            font-size: 1.5rem;
          }
        }
        .about-me-wrapper {
          h1 {
            font-size: 1.5rem;
          }
          .paragraph-wrapper {
            p {
              font-size: 1rem;
            }
          }
        }
        .experience-wrapper {
          h1 {
            font-size: 1.5rem;
          }
        }
        .education-wrapper {
          h1 {
            font-size: 1.5rem;
          }
        }
        .project-wrapper {
          h1 {
            font-size: 1.5rem;
          }
        }
        .skills-wrapper {
          h1 {
            font-size: 1.5rem;
          }
          .languages-wrapper {
            h2 {
              font-size: 1rem;
            }
            .languages {
              .skill-wrapper {
                .skill {
                  font-size: 0.8rem;
                }
              }
            }
          }
          .frameworks-wrapper {
            h2 {
              font-size: 1rem;
            }
            .frameworks {
              .skill-wrapper {
                .skill {
                  font-size: 0.8rem;
                }
              }
            }
          }
          .databases-wrapper {
            h2 {
              font-size: 1rem;
            }
            .databases {
              .skill-wrapper {
                .skill {
                  font-size: 0.8rem;
                }
              }
            }
          }
          .practises-wrapper {
            h2 {
              font-size: 1rem;
            }
            .practises {
              .skill-wrapper {
                .skill {
                  font-size: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-height: 768px) {
    .scroll-wrapper {
      width: 100%;
      height: 100%;
      .left-side {
        padding: 1rem;
        width: 100%;

        .image {
          width: 50%;
          height: auto;
        }
        .name {
          margin-top: 0.6rem;
          font-size: 1.2rem;
        }
        .occupation {
          font-size: 0.8rem;
        }
        .location {
          margin-top: 0.3rem;
          font-size: 0.8rem;
        }
        .brief-text {
          margin-top: 0.6rem;
          font-size: 0.6rem;
        }
        .work-together-section {
          margin-top: 0.8rem;
          .work-together-text {
            font-size: 0.8rem;
          }
          .work-together-button {
            font-size: 0.6rem;
          }
        }
        .lower-part {
          margin-top: 0.8rem;
          .resume {
            .resume-link {
              font-size: 0.8rem;
            }
          }
          .links {
            .link {
              .icon {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }

      .right-side {
        width: 100%;
        .about-me-wrapper {
          h1 {
            font-size: 1.2rem;
          }
          .paragraph-wrapper {
            p {
              font-size: 0.8rem;
            }
          }
        }
        .skills-wrapper {
          h1 {
            font-size: 1.2rem;
          }
          .languages-wrapper {
            h2 {
              font-size: 0.8rem;
            }
            .languages {
              .skill-wrapper {
                .skill {
                  font-size: 0.6rem;
                }
              }
            }
          }
          .frameworks-wrapper {
            h2 {
              font-size: 0.8rem;
            }
            .frameworks {
              .skill-wrapper {
                .skill {
                  font-size: 0.6rem;
                }
              }
            }
          }
          .databases-wrapper {
            h2 {
              font-size: 0.8rem;
            }
            .databases {
              .skill-wrapper {
                .skill {
                  font-size: 0.6rem;
                }
              }
            }
          }
          .practises-wrapper {
            h2 {
              font-size: 0.8rem;
            }
            .practises {
              .skill-wrapper {
                .skill {
                  font-size: 0.6rem;
                }
              }
            }
          }
        }
        .experience-wrapper {
          h1 {
            font-size: 1.2rem;
          }
        }
        .education-wrapper {
          h1 {
            font-size: 1.2rem;
          }
        }
        .project-wrapper {
          h1 {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
