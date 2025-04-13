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
            <div class="profile">
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
                    <a
                      href="https://www.linkedin.com/in/emre-topcu04/"
                      target="_blank"
                      class="link"
                    >
                      <img src="../src/assets/icons/linkedin.svg" alt="linkedin" class="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="chatbot-container">
              <transition name="slide-fade">
                <div class="chatbot-dialog" v-if="isChatbotOpen">
                  <div class="chatbot-dialog-header">
                    <div class="chatbot-dialog-title" v-if="isEnglish">Emre's Assistant</div>
                    <div class="chatbot-dialog-title" v-else>Emre'nin Asistanı</div>
                    <div class="chatbot-close-button" @click="toggleChatbot">
                      <img src="../src/assets/icons/x.svg" alt="close" class="chatbot-close-icon" />
                    </div>
                  </div>
                  <div class="chatbot-message-area" ref="chatMessages">
                    <div v-if="isEnglish" class="chatbot-welcome-message">
                      Hi there! Ask me anything about Emre.
                    </div>
                    <div v-else class="chatbot-welcome-message">
                      Merhaba! Emre ile ilgili her şeyi bana sorabilirsin.
                    </div>
                    <div
                      v-for="(message, index) in messages"
                      :key="index"
                      :class="['message', message.sender]"
                    >
                      {{ message.text }}
                    </div>
                    <div v-if="isTyping" class="message bot typing">
                      <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div class="chatbot-input-area">
                    <input
                      type="text"
                      v-model="userMessage"
                      :placeholder="isEnglish ? 'Type your message...' : 'Mesajınızı yazın...'"
                      @keyup.enter="sendMessage"
                      class="chatbot-input-field"
                    />
                    <button @click="sendMessage" class="chatbot-send-button">
                      <span v-if="isEnglish" class="chatbot-send-button-text">Send</span>
                      <span v-else class="chatbot-send-button-text">Gönder</span>
                    </button>
                  </div>
                </div>
              </transition>
              <div class="chatbot-toggle" @click="toggleChatbot">
                <div class="chatbot-label" v-if="isEnglish">Click To Chat With Me!</div>
                <div class="chatbot-label" v-else>Benimle Konuşmak İçin Buraya Tıkla</div>
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
  components: { ProjectCard, JobCard, EducationCard },
  data() {
    return {
      isEnglish: true,
      isRequestInProgress: false,
      data: data,
      rightSideScrollPosition: 0,
      theme: localStorage.getItem('theme') || 'light',
      isChatbotOpen: false,
      userMessage: '',
      lastMessageTime: 0,
      messageCooldown: 500,
      messages: [],
      isTyping: false,
      apiKey: import.meta.env.VITE_GEMINI_API_KEY,
      systemPrompt: `

        You are a helpful assistant on Emre's personal website. Here is information about Emre:

        Location: Based in Istanbul / Antalya, Turkey
        Education:
        - BSc in Computer Science Engineering, English medium, at Akdeniz University
        - GPA 3.89 out of 4.00
        - Expected to graduate among the top 3 in his class

        Experience:
        - Candidate Engineer at Turkish Aerospace Industries, 2024 to present
        - Front End Developer Intern at GTS Global Travel Services, where he worked on the admin panel using Vue.js

        Skills:
        - Programming Languages: Java, Kotlin, JavaScript, TypeScript, Python, Assembly, C, C++
        - Frameworks and Libraries: ReactJS, Vue.js, .NET, SpaCy, Pandas, NumPy, Scikit-Learn, NLTK, Transformers
        - Databases and Tools: MySQL, SQL, Elasticsearch, Git
        - Core Knowledge: Data Structures and Algorithms, Agile, Design Patterns, Test Driven Development, Virtualization
        - Soft Skills: Leadership, Organization, Communication, Problem Solving, Analytical Thinking

        Projects:
        - AI Chess Bot where two bots simulate games by picking randomly among the top 3 best moves
        - AI-Powered Trading Bot that uses machine learning to predict cryptocurrency prices and suggest trades
        - Solstice Android app designed to help users manage education and health activities
        - Fine-Tuning Gemma2 Model to improve Turkish text understanding and generation
        - Assembly Projects involving low-level programming and system control logic

        Activities and Volunteering:
        - Student Representative in the Quality Control Committee at Akdeniz University
        - Lecturer at the Turkish Education Volunteers Foundation
        - Chair of the Blockchain Community in IEEE Akdeniz Student Branch
        - Member of Google Developer Student Club Akdeniz
        - Participant in Best Buddies social initiative

        Achievements:
        - Participant in Is Hayati 101 program hosted by ASELSAN
        - Participant in Savunma Sanayi 101 and 401 programs hosted by the Ministry of Defence

        Now Turkish:

        Konum: İstanbul / Antalya, Türkiye
        Eğitim:
        - Bilgisayar Mühendisliği Lisans, Akdeniz Üniversitesi, İngilizce, 2022 – Devam Ediyor
        - GANO: 3.89/4.0
        - Sınıf: 3. Sınıf

        Deneyim:
        - Aday Mühendis, Türk Havacılık ve Uzay Sanayii, 2024 – Devam Ediyor
        - Front End Developer Stajyeri, GTSFly, 2024 – Vue.js framework ile yönetici sayfası üzerinde çalıştı

        Beceriler:
        - Programlama Dilleri: Java, Kotlin, JavaScript, TypeScript, Python, Assembly, C, C++
        - Kütüphaneler ve Çatılar: ReactJS, Vue.js, .NET, SpaCy, Pandas, NumPy, Scikit-Learn, NLTK, Transformers
        - Veritabanları ve Araçlar: MySQL, SQL, Elasticsearch, Git
        - Temel Bilgiler: Veri Yapıları ve Algoritmalar, Agile, Tasarım Desenleri, Test Tabanlı Geliştirme, Sanallaştırma
        - Sosyal Beceriler: Liderlik, Organizasyon, İletişim, Problem Çözme, Analitik Düşünme

        Projeler:
        - AI Satranç Botu: İki botun kullanıcı tarafından belirlenen sayıda satranç oyunu oynayarak rastgele bir hamle seçtiği basit bir program
        - AI Destekli Trading Bot: Kripto fiyat tahmini ve karlı işlemler için makine öğrenmesi kullanan bir bot
        - Solstice: Kullanıcıların eğitim ve sağlık faaliyetlerini yönetmesine yardımcı olan Android uygulaması
        - Gemma2 Modelinin İnce Ayarlanması: Türkçe metinlerin daha iyi anlaşılması ve üretilmesi için Gemma2 modelinin fine-tuning çalışması
        - Assembly Projeleri: Düşük seviyede programlama ve sistem kontrolü içeren projeler

        Sosyal Aktiviteler ve Gönüllülük:
        - Öğrenci Temsilcisi, Kalite Kontrol Komitesi, Akdeniz Üniversitesi, 2025 – Devam Ediyor
        - Eğitmen, Türkiye Eğitim Gönüllüleri Vakfı, 2025 – Devam Ediyor
        - Başkan, Blockchain Komitesi, IEEE Akdeniz Öğrenci Kolu, 2023
        - Katılımcı, Google Developer Student Club Akdeniz, 2022
        - Katılımcı, Best Buddies, 2018 – 2021

        Başarılar:
        - İş Hayatı 101 Katılımcısı ASELSAN
        - Savunma Sanayi 101 & 401 Katılımcısı Savunma Sanayii Başkanlığı

        Beceriler:
        - Programlama Dilleri: Java, Kotlin, JavaScript, TypeScript, Python, Assembly, C, C++, MySQL
        - Kütüphaneler: SpaCy, Pandas, NumPy, Scikit-Learn, NLTK
        - Çatılar: React.js, Vue.js, .NET
        - Versiyon Kontrolü: Git
        - Temel Konseptler: Veri Yapıları ve Algoritmalar
        - Yazılım Pratikleri: Agile, Tasarım Desenleri, Test-Temelli Geliştirme, Sanallaştırma
        - Sosyal Beceriler: Takım Liderliği, Organizasyon, Etkinlik Planlama, Liderlik, İletişim, Problem Çözme, Analitik Beceriler
        - Diller: İngilizce C1

        Keep responses brief, friendly, and informative. Only answer questions about Emre's professional background, skills, projects, education, and experience.
`,
    }
  },

  methods: {
    changeLanguage(isEnglish) {
      this.$nextTick(() => {
        if (this.$refs.rightSide) {
          this.rightSideScrollPosition = this.$refs.rightSide.scrollTop
        }
        this.isEnglish = isEnglish
        localStorage.setItem('language', isEnglish ? 'en' : 'tr')
        this.systemPrompt = this.systemPrompt.replace(/Language instruction:.*/g, '')

        if (!isEnglish) {
          this.systemPrompt += '\nLanguage instruction: Please respond in Turkish.'
        }

        this.toggleChatbot()
        this.messages = []
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

    toggleChatbot() {
      this.isChatbotOpen = !this.isChatbotOpen

      if (this.isChatbotOpen) {
        this.$nextTick(() => {
          this.scrollToBottom()
        })
      }
    },

    async sendMessage() {
      if (this.isRequestInProgress) {
        return
      }

      const currentTime = Date.now()
      if (currentTime - this.lastMessageTime < this.messageCooldown) {
        return
      }

      this.isRequestInProgress = true
      this.messages.push({
        text: this.userMessage,
        sender: 'user',
      })

      this.$nextTick(() => {
        this.scrollToBottom()
      })

      const userQuery = this.userMessage
      this.userMessage = ''
      this.isTyping = true

      try {
        const response = await this.callGeminiAPI(userQuery)

        this.isTyping = false
        this.messages.push({
          text: response,
          sender: 'bot',
        })
      } catch (error) {
        this.isTyping = false
        const fallbackMessage = this.isEnglish
          ? 'Şu anda bağlantı sorunları yaşıyorum. Lütfen birazdan tekrar deneyin.'
          : 'Bağlantı hatası. Lütfen daha sonra tekrar deneyin.'
        this.messages.push({
          text: fallbackMessage + error.message,
          sender: 'bot',
        })
      }

      this.isRequestInProgress = false
      this.lastMessageTime = Date.now()

      this.$nextTick(() => {
        this.scrollToBottom()
      })
    },

    sendDebouncedMessage() {
      clearTimeout(this.typingTimeout)

      this.typingTimeout = setTimeout(this.sendMessage, this.debounceDelay)
    },

    scrollToBottom() {
      if (this.$refs.chatMessages) {
        this.$refs.chatMessages.scrollTop = this.$refs.chatMessages.scrollHeight
      }
    },
    async callGeminiAPI(userMessage) {
      const formattedMessages = []

      formattedMessages.push({
        role: 'user',
        parts: [{ text: this.systemPrompt }],
      })

      formattedMessages.push({
        role: 'model',
        parts: [
          {
            text: "I understand. I'll act as an assistant on Emre's website, providing brief and helpful information about his background, skills, projects, education, and experience.",
          },
        ],
      })

      let skipNext = false
      for (let i = 0; i < this.messages.length; i++) {
        if (skipNext) {
          skipNext = false
          continue
        }

        const message = this.messages[i]
        const role = message.sender === 'user' ? 'user' : 'model'

        formattedMessages.push({
          role: role,
          parts: [{ text: message.text }],
        })
      }

      formattedMessages.push({
        role: 'user',
        parts: [{ text: userMessage }],
      })

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: formattedMessages,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1000,
              topP: 0.8,
              topK: 40,
            },
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`API response: ${response.status}`)
      }

      const data = await response.json()

      if (
        data.candidates &&
        data.candidates.length > 0 &&
        data.candidates[0].content &&
        data.candidates[0].content.parts &&
        data.candidates[0].content.parts.length > 0
      ) {
        return data.candidates[0].content.parts[0].text
      } else {
        throw new Error('Invalid response format from Gemini API')
      }
    },
  },
  beforeMount() {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      this.isEnglish = savedLanguage === 'en'
    } else {
      this.isEnglish = true
    }
    if (!this.isEnglish) {
      this.systemPrompt += '\nLanguage instruction: Please respond in Turkish.'
    }
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

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(20px);
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

  @keyframes slideInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
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

  @keyframes typing {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
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
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-background);
        border-radius: 5px;
        .chatbot-container {
          justify-content: center;
          align-items: center;
          position: relative;
          margin-top: 1rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          animation: fadeIn 1s;

          .chatbot-toggle {
            background: linear-gradient(
              90deg,
              var(--color-background-soft) 0%,
              var(--color-background-mute) 100%
            );
            border-radius: 20px;
            padding: 0.8rem;
            cursor: pointer;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid var(--color-border);

            &:hover {
              opacity: 0.8;
            }

            &:active {
              transform: translateY(0);
            }

            .chatbot-label {
              font-size: 0.8rem;
              color: var(--color-heading);
              font-weight: 600;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
            }
          }

          .chatbot-dialog {
            position: absolute;
            bottom: 120%;
            left: 0;
            width: 100%;
            height: 500px;
            background-color: var(--color-background-soft);
            border-radius: 10px;
            z-index: 100;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            animation: slideInUp 0.3s;

            .chatbot-dialog-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.7rem 1rem;
              background-color: var(--color-background-mute);
              border-bottom: 1px solid var(--color-border);

              .chatbot-dialog-title {
                font-weight: 600;
                color: var(--color-heading);
              }

              .chatbot-close-button {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                transition: background-color 0.2s;

                &:hover {
                  .chatbot-close-icon {
                    filter: var(--image-invert);
                  }
                }

                .chatbot-close-icon {
                  width: 12px;
                  height: 12px;
                  filter: var(--image);
                }
              }
            }

            .chatbot-message-area {
              flex-grow: 1;
              padding: 1rem;
              display: flex;
              flex-direction: column;
              gap: 0.8rem;
              overflow: auto;
              scrollbar-width: none;
              -ms-overflow-style: none;

              &::-webkit-scrollbar {
                display: none;
              }

              .chatbot-welcome-message {
                font-size: 1.5rem;
                background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
                text-align: center;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                animation: fadeIn 0.5s;
              }

              .message {
                max-width: 80%;
                padding: 0.6rem;
                border-radius: 15px;
                font-size: 1rem;
                word-break: break-word;
                animation: fadeIn 0.3s;

                &.user {
                  align-self: flex-end;
                  background-color: var(--color-background-mute);
                  color: var(--color-heading);
                  border-bottom-right-radius: 5px;
                }

                &.bot {
                  align-self: flex-start;
                  background-color: var(--color-border);
                  color: var(--color-heading);
                  border-bottom-left-radius: 5px;
                }

                &.typing {
                  padding: 1rem;

                  .typing-indicator {
                    display: flex;
                    gap: 0.5rem;

                    span {
                      display: inline-block;
                      width: 6px;
                      height: 6px;
                      background-color: var(--color-heading);
                      border-radius: 50%;
                      opacity: 0.7;
                      animation: typing 1.4s infinite;

                      &:nth-child(2) {
                        animation-delay: 0.2s;
                      }

                      &:nth-child(3) {
                        animation-delay: 0.4s;
                      }
                    }
                  }
                }
              }
            }

            .chatbot-input-area {
              display: flex;
              padding: 0.7rem;
              border-top: 1px solid var(--color-border);
              width: 100%;

              .chatbot-input-field {
                flex-grow: 1;
                width: 100%;
                padding: 0.5rem;
                border: 1px solid var(--color-border);
                border-radius: 5px;
                background-color: var(--color-background);
                color: var(--color-text);
                transition: border-color 0.3s;

                &:focus {
                  outline: none;
                  border-color: var(--color-border-hover);
                }
              }

              .chatbot-send-button {
                margin-left: 0.5rem;
                width: 25%;
                padding: 0.5rem 1rem;
                background-color: var(--color-background-mute);
                color: var(--color-text);
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition:
                  background-color 0.3s,
                  transform 0.2s;

                &:hover {
                  background-color: var(--color-border-hover);
                }
                .chatbot-send-button-text {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 100%;
                }
              }
            }
          }
        }

        .profile {
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 0rem 2rem;
          height: 90%;
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
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--color-background);
          border-radius: 5px;
          .chatbot-container {
            width: 100%;
            max-width: none;

            .chatbot-dialog {
              width: 100%;
              height: 300px;
              bottom: 120%;
            }
          }
          .profile {
            width: 100%;
            padding: 1rem;
          }
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
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--color-background);
          border-radius: 5px;
          .chatbot-container {
            width: 100%;
            max-width: none;

            .chatbot-dialog {
              width: 100%;
              height: 300px;
              bottom: 110%;
              left: 0;
            }
          }
          .profile {
            width: 100%;
            padding: 1rem;
          }
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
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-background);
        border-radius: 5px;
        .profile {
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
