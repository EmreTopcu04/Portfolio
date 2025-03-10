<template>
  <div class="app-c">
    <div class="content-wrapper">
      <div class="top-bar">
        <div :class="theme">
          <div class="theme-toggle">
            <img
              v-if="theme === 'light'"
              class="theme-button-light"
              src="/src/assets/icons/mode-light.svg"
              @click="toggleTheme"
              alt="light-mode"
            />
            <img
              v-else
              class="theme-button-dark"
              src="/src/assets/icons/mode-dark.svg"
              @click="toggleTheme"
              alt="dark-mode"
            />
          </div>
        </div>
        <div class="flags">
          <div class="flags-wrapper">
            <img
              src="../src/assets/icons/tr.png"
              alt="turkey-flag"
              class="flag"
              :class="{ active: !isEnglish }"
              @click="changeLanguage(false)"
            />
            <img
              src="../src/assets/icons/uk.png"
              alt="united-kingdom-flag"
              class="flag"
              :class="{ active: isEnglish }"
              @click="changeLanguage(true)"
            />
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div class="scroll-wrapper" :key="isEnglish">
          <div class="left-side">
            <div class="image-wrapper">
              <img src="../src/assets/photo.jpeg" alt="profile" class="image" />
            </div>
            <div class="name">Emre Topcu</div>
            <div class="occupation" v-if="isEnglish">Computer Science Engineering Student</div>
            <div class="occupation" v-else>Bilgisayar Mühendisliği Öğrencisi</div>
            <div class="location" v-if="isEnglish">📍 Antalya, Turkey 🇹🇷</div>
            <div class="location" v-else>📍 Antalya, Türkiye 🇹🇷</div>
            <div class="brief-text" v-if="isEnglish">
              Building Real Products For Real Clients, Not Just More Projects
            </div>
            <div class="brief-text" v-else>
              Yalnızca Proje Değil, Gerçek Müşterilere, Gerçek Ürünler İnşa Ediyorum.
            </div>

            <div class="work-together-section">
              <div class="work-together-text" v-if="isEnglish">Let's Work Together</div>
              <div class="work-together-text" v-else>Birlikte Çalışalım</div>
            </div>
            <div class="lower-part">
              <a
                href="https://drive.google.com/file/d/1mtwozFa9LELwM9Ve9NZs4D6-0qjJStex/view?usp=sharing"
                target="_blank"
                class="resume-link"
                v-if="isEnglish"
              >
                <div class="resume">
                  <img
                    src="../src/assets/icons/folder_icon.svg"
                    alt="folder"
                    class="folder-image"
                  />
                  <div class="resume-text" v-if="isEnglish">Resume</div>
                  <div class="resume-text" v-else>Özgeçmiş</div>
                </div>
              </a>
              <a
                href="https://drive.google.com/file/d/1M25Tt7TFSTBfmsy92y_grJ3KZnZ8e6-V/view?usp=sharing"
                target="_blank"
                class="resume-link"
                v-else
              >
              <div class="resume">
                  <img
                    src="../src/assets/icons/folder_icon.svg"
                    alt="folder"
                    class="folder-image"
                  />
                  <div class="resume-text" v-if="isEnglish">Resume</div>
                  <div class="resume-text" v-else>Özgeçmiş</div>
                </div>
              </a>

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
          <div class="right-side" ref="rightSide">
            <div class="about-me-wrapper" v-if="isEnglish">
              <h1>About Me</h1>
              <div class="paragraph-wrapper">
                <p>
                  I am a 20-year-old Computer Science Engineering student at Akdeniz University,
                  passionate about learning new technologies and building impactful projects.
                </p>
                <p>
                  I have gained significant experience in both front-end development and machine
                  learning, allowing me to broaden my understanding of cutting-edge technologies and
                  fueling my desire for continuous learning.
                </p>
                <p>
                  I'm constantly seeking opportunities to grow, and I look forward to contributing
                  to the tech world in innovative and impactful ways.
                </p>
              </div>
            </div>
            <div class="about-me-wrapper" v-else>
              <h1>Hakkımda</h1>
              <div class="paragraph-wrapper">
                <p>
                  Akdeniz Üniversitesi Bilgisayar Mühendisliği bölümünde okuyan 20 yaşında bir
                  öğrenciyim. Yeni teknolojileri öğrenmeye ve etkili projeler geliştirmeye meraklı
                  birisiyim.
                </p>
                <p>
                  Hem ön uç geliştirme hem de makine öğrenimi konusunda önemli deneyimler kazandım;
                  bu da son teknolojiler hakkındaki bilgilerimi genişletmemi sağladı ve bunun yanı
                  sıra aynı zamanda sürekli öğrenme isteğimi pekiştirdi.
                </p>
                <p>
                  Sürekli olarak kendimi geliştirme fırsatları arıyorum ve teknoloji dünyasına
                  yenilikçi ve etkili yollarla katkıda bulunmayı dört gözle bekliyorum.
                </p>
              </div>
            </div>
            <div class="skills-wrapper" v-if="isEnglish">
              <h1>Skills</h1>
              <div class="languages-wrapper">
                <h2>Languages</h2>
                <div class="languages">
                  <div class="skill-wrapper" v-for="language in data.languages.en" :key="language">
                    <div class="skill">{{ language }}</div>
                  </div>
                </div>
              </div>
              <div class="frameworks-wrapper">
                <h2>Frameworks & Libraries</h2>
                <div class="frameworks">
                  <div
                    class="skill-wrapper"
                    v-for="framework in data.frameworks.en"
                    :key="framework"
                  >
                    <div class="skill">{{ framework }}</div>
                  </div>
                </div>
              </div>
              <div class="databases-wrapper">
                <h2>Databases</h2>
                <div class="databases">
                  <div class="skill-wrapper" v-for="database in data.databases.en" :key="database">
                    <div class="skill">{{ database }}</div>
                  </div>
                </div>
              </div>
              <div class="practises-wrapper">
                <h2>Practises</h2>
                <div class="practises">
                  <div class="skill-wrapper" v-for="practise in data.practises.en" :key="practise">
                    <div class="skill">{{ practise }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="skills-wrapper" v-else>
              <h1>Yetenekler</h1>
              <div class="languages-wrapper">
                <h2>Yazılım Dilleri</h2>
                <div class="languages">
                  <div class="skill-wrapper" v-for="language in data.languages.tr" :key="language">
                    <div class="skill">{{ language }}</div>
                  </div>
                </div>
              </div>
              <div class="frameworks-wrapper">
                <h2>Çerçeveler & Kütüphaneler</h2>
                <div class="frameworks">
                  <div
                    class="skill-wrapper"
                    v-for="framework in data.frameworks.tr"
                    :key="framework"
                  >
                    <div class="skill">{{ framework }}</div>
                  </div>
                </div>
              </div>
              <div class="databases-wrapper">
                <h2>Veritabanları</h2>
                <div class="databases">
                  <div class="skill-wrapper" v-for="database in data.databases.tr" :key="database">
                    <div class="skill">{{ database }}</div>
                  </div>
                </div>
              </div>
              <div class="practises-wrapper">
                <h2>Uygulamalar</h2>
                <div class="practises">
                  <div class="skill-wrapper" v-for="practise in data.practises.tr" :key="practise">
                    <div class="skill">{{ practise }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="experience-wrapper" v-if="isEnglish">
              <h1>Experience</h1>
              <JobCard
                v-for="experience in data.experiences.en"
                :key="experience.title"
                :image="experience.image"
                :title="experience.title"
                :location="experience.location"
                :time="experience.time"
                :description="experience.description"
                :company="experience.company"
              />
            </div>
            <div class="experience-wrapper" v-else>
              <h1>Deneyim</h1>
              <JobCard
                v-for="experience in data.experiences.tr"
                :key="experience.title"
                :image="experience.image"
                :title="experience.title"
                :location="experience.location"
                :time="experience.time"
                :description="experience.description"
                :company="experience.company"
              />
            </div>
            <div class="education-wrapper" v-if="isEnglish">
              <h1>Education</h1>
              <EducationCard
                v-for="education in data.educations.en"
                :key="education.title"
                :image="education.image"
                :title="education.title"
                :location="education.location"
                :time="education.time"
                :school="education.school"
                :gpa="education.gpa"
                :class_name="education.class"
                :years="education.years"
                :isEnglish="true"
              />
            </div>
            <div class="education-wrapper" v-else>
              <h1>Eğitim</h1>
              <EducationCard
                v-for="education in data.educations.tr"
                :key="education.title"
                :image="education.image"
                :title="education.title"
                :location="education.location"
                :time="education.time"
                :school="education.school"
                :gpa="education.gpa"
                :class_name="education.class"
                :years="education.years"
                :isEnglish="false"
              />
            </div>
            <div class="project-wrapper" v-if="isEnglish">
              <h1>Projects</h1>
              <ProjectCard
                v-for="project in data.projects.en"
                :key="project.title"
                :image="project.image"
                :title="project.title"
                :description="project.description"
                :link="project.link"
              />
            </div>
            <div class="project-wrapper" v-else>
              <h1>Projeler</h1>
              <ProjectCard
                v-for="project in data.projects.tr"
                :key="project.title"
                :image="project.image"
                :title="project.title"
                :description="project.description"
                :link="project.link"
              />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import EducationCard from './components/EducationCard.vue'
import JobCard from './components/JobCard.vue'
import ProjectCard from './components/ProjectCard.vue'
import data from './components/data.json'

export default {
  name: 'App',
  components: {
    ProjectCard,
    JobCard,
    EducationCard,
  },
  data() {
    return {
      isEnglish: true,
      data: data,
      rightSideScrollPosition: 0,
      theme: localStorage.getItem('theme') || 'light',
    }
  },
  methods: {
    changeLanguage(isEnglish) {
      this.$nextTick(() => {
        if (this.$refs.rightSide) {
          this.rightSideScrollPosition = this.$refs.rightSide.scrollTop
        }
        this.isEnglish = isEnglish
      })
    },

    toggleTheme() {
      const appElement = document.querySelector('.app-c')
      appElement.classList.add('theme-transition')

      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme)
      document.documentElement.setAttribute('data-theme', this.theme)

      setTimeout(() => {
        appElement.classList.remove('theme-transition')
      }, 500)
    },
  },
  created() {
    this.theme = 'light'
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
  },
}
</script>

<style scoped lang="scss">
.app-c {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(100);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &.theme-transition {
    animation: themeTransition 0.5s ease;
  }

  @keyframes themeTransition {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 1rem);
    .top-bar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 1rem;
      .flags {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-left: 3px solid var(--color-border);
        padding: 0rem 1rem;
        .flags-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          border-radius: 5px;

          .flag {
            width: 30px;
            height: 30px;
            border: var(--color-border) 2px solid;
            border-radius: 50%;
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;

            &.active {
              border: var(--color-border) 2px solid;
              transform: scale(1.1);
            }

            &:hover {
              cursor: pointer;
              opacity: 0.8;
            }
          }
        }
      }
      .theme-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-heading);
        border-radius: 5px;

        padding: 0rem 1rem;
        user-select: none;

        &:hover {
          cursor: pointer;
        }

        .theme-button-light {
          width: 30px;
          height: 30px;
          filter: var(--image);
          &:hover {
            filter: var(--image-invert);
          }
        }
        .theme-button-dark {
          width: 30px;
          height: 30px;
          filter: var(--image);

          &:hover {
            filter: var(--image-invert);
          }
        }
      }
    }
    .scroll-wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 0rem 1rem;
      gap: 2rem;
      justify-content: center;
      align-items: center;

      .left-side {
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 0rem 2rem;
        height: 100%;
        animation: fadeIn 1s;

        .image-wrapper {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 3px solid var(--color-border);
          .image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .name {
          margin-top: 1rem;
          font-size: 2rem;
          font-weight: bold;
          color: var(--color-heading);
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
          color: var(--color-text);
        }
        .work-together-text {
          font-size: 1.5rem;
          color: var(--color-text);
          font-weight: bold;
          margin-top: 1rem;
        }
        .lower-part {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          width: 100%;
          margin-top: 1.5rem;
          .resume-link {
            text-decoration: none;
            .resume {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 10%;
              color: var(--color-text);
              font-size: 100%;
              padding: 0.2rem 0.4rem;
              border: 1px solid var(--color-border);
              border-radius: 5px;
              background-color: transparent;
              transition:
                background-color 0.3s,
                border-color 0.3s,
                filter 0.3s;

              .folder-image {
                width: 20%;
                height: 20%;
                filter: var(--image);
              }

              &:hover {
                background-color: var(--color-background-invert);
                color: var(--color-text-invert);
                cursor: pointer;
                .folder-image {
                  filter: var(--image-invert);
                }
              }
              .resume-text {
                display: flex;
                text-align: center;
                font-size: 1rem;
              }
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
                filter: var(--image);
                &:hover {
                  filter: var(--image-invert);
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

          .work-together-button {
            margin-top: 1rem;
            padding: 0.5rem 2rem;
            border: 1px solid var(--color-background);
            border-radius: 5px;
            color: var(--color-text);
            font-size: 1rem;
            transition: all 0.3s;
            &:hover {
              background-color: var(--color-background-invert);
              color: var(--color-text-invert);
              cursor: pointer;
            }
          }
        }
      }
      .right-side {
        width: 75%;
        height: 100%;
        overflow-y: scroll;
        padding: 0rem 2rem;
        -ms-overflow-style: none;
        scrollbar-width: none;
        animation: fadeIn 1s;

        .about-me-wrapper {
          h1 {
            font-size: 2rem;
            font-weight: bold;
            color: var(--color-heading);
          }
          .paragraph-wrapper {
            margin-top: 1rem;

            p {
              margin-top: 0.5rem;
              font-size: 1rem;
              color: var(--color-text);
            }
          }
        }
        .skills-wrapper {
          display: flex;
          flex-direction: column;
          h1 {
            font-size: 2rem;
            font-weight: bold;
            color: var(--color-heading);
          }
          .languages-wrapper {
            h2 {
              font-size: 1.2rem;
              font-weight: bold;
              color: var(--color-text);
            }
            .languages {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              .skill-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--languages-background);
                border-radius: 100px;
                .skill {
                  padding: 0.2rem 0.8rem;
                  color: var(--languages-text);
                  font-weight: 600;
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
              color: var(--color-text);
            }
            .frameworks {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              .skill-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--frameworks-libraries-background);
                border-radius: 100px;
                .skill {
                  padding: 0.2rem 0.8rem;
                  color: var(--frameworks-libraries-text);
                  font-weight: 600;
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
              color: var(--color-text);
            }
            .databases {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              .skill-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--databases-background);
                border-radius: 100px;
                .skill {
                  padding: 0.2rem 0.8rem;
                  color: var(--databases-text);
                  font-weight: 600;
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
              color: var(--color-text);
            }
            .practises {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              .skill-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--practises-background);
                border-radius: 100px;
                .skill {
                  padding: 0.2rem 0.8rem;
                  color: var(--practises-text);
                  font-weight: 600;
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
            color: var(--color-heading);
          }
        }
        .education-wrapper {
          margin-top: 2rem;
          h1 {
            font-size: 2rem;
            font-weight: bold;
            color: var(--color-heading);
          }
        }
        .project-wrapper {
          margin-top: 2rem;
          h1 {
            font-size: 2rem;
            font-weight: bold;
            color: var(--color-heading);
          }
        }
      }
      .right-side::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: max-content;

    .content-wrapper {
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
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: max-content;

    .content-wrapper {
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
  }
  @media (max-height: 480px) {
    .scroll-wrapper {
      width: 100%;
      height: 100%;
      .left-side {
        padding: 0rem 3rem;
        width: 100%;

        .image {
          width: 50%;
          height: auto;
        }
        .name {
          margin-top: 0.6rem;
          font-size: 1.5rem;
        }
        .occupation {
          font-size: 1rem;
        }
        .location {
          margin-top: 0.3rem;
          font-size: 1rem;
        }
        .brief-text {
          margin-top: 0.6rem;
          font-size: 0.8rem;
        }
        .work-together-section {
          margin-top: 0.8rem;
          .work-together-text {
            font-size: 1rem;
          }
          .work-together-button {
            font-size: 0.8rem;
          }
        }
        .lower-part {
          margin-top: 0.8rem;
          .resume {
            padding: 0;
            .resume-link {
              font-size: 1rem;
            }
          }
          .links {
            .link {
              .icon {
                width: 25px;
                height: 25px;
              }
            }
          }
        }
      }

      .right-side {
        width: 100%;
        padding: 0rem 3rem;

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
      }
    }
  }
}
</style>
