<template>
  <div class="education-card">
    <div class="upper-section">
      <div class="image-wrapper">
        <img
          v-if="image == 'akdeniz'"
          src="../assets/icons/Akdeniz_Universitesi.png"
          alt="education image"
          class="image"
        />
      </div>

      <div class="right-section">
        <div class="title-section">
          <div class="title">{{ title }}</div>
          <div class="company">{{ school }}</div>
        </div>

        <div class="location">{{ location }}</div>
        <div class="time">{{ time }}</div>
        <div class="class_name" v-if="isEnglish">{{ 'Expected Rank: ' + class_name }}</div>
        <div class="class_name" v-else>{{ 'Beklenen Derece: ' + class_name }}</div>
        <div class="gpa-wrapper">
          <div v-if="isEnglish">{{ 'GPA: ' + gpa }}</div>
          <div v-else>{{ 'Not Ortalaması: ' + gpa }}</div>
        </div>
      </div>
    </div>
    <div
      class="description"
      @click="isCoursesVisible = !isCoursesVisible"
      :class="{ clicked: isCoursesVisible }"
    >
      <div class="description-text" v-if="isEnglish">Click to see more</div>
      <div class="description-text" v-else>Daha fazlası için tıkla</div>

      <img
        :class="{ rotated: isCoursesVisible }"
        src="../assets/icons/up-arrow.svg"
        alt="up-arrow"
      />
    </div>
    <div class="years" v-if="isCoursesVisible">
      <div class="years-wrapper">
        <div class="year-wrapper">{{ currentSemesterName }}</div>
        <div class="courses-wrapper" v-for="course in currentSemesterCourses" :key="course.name">
          <li class="course-name">{{ course.name }}</li>
        </div>
      </div>
      <div class="buttons-wrapper">
        <button @click="prevSemester" v-if="this.currentSemesterIndex > 0" class="back-button">
          <div v-if="isEnglish">Back</div>
          <div v-else>Geri</div>
        </button>
        <button
          @click="nextSemester"
          v-if="this.currentSemesterIndex < this.years.length - 1"
          class="next-button"
        >
          <div v-if="isEnglish">Next</div>
          <div v-else>İleri</div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EducationCard',
  props: {
    image: String,
    title: String,
    location: String,
    time: String,
    school: String,
    gpa: String,
    class_name: String,
    years: Array,
    isEnglish: Boolean,
  },
  data() {
    return {
      imageUrl: this.image,
      isCoursesVisible: false,
      currentSemesterIndex: 0,
    }
  },
  computed: {
    currentSemesterName() {
      return this.years[this.currentSemesterIndex].name
    },
    currentSemesterCourses() {
      return this.years[this.currentSemesterIndex].courses
    },
  },
  methods: {
    nextSemester() {
      this.currentSemesterIndex++
    },
    prevSemester() {
      this.currentSemesterIndex--
    },
  },
}
</script>
<style scoped lang="scss">
.education-card {
  height: 100%;
  width: 100%;
  border-left: 5px solid #f9a826;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 2rem 0;
  .upper-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-right: 1rem;
      }
    }

    .right-section {
      display: flex;
      flex-direction: column;
      width: 100%;
      .title-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 1rem;
        .title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #e0e0e0;
        }
        .company {
          font-size: 1rem;
        }
      }
      .location {
        font-size: 1rem;
        color: #e0e0e0;
      }
      .time {
        font-size: 1rem;
        color: #e0e0e0;
      }
      .class_name {
        font-size: 1rem;
        color: hsl(0, 0%, 77%);
      }
      .gpa-wrapper {
        display: flex;
        font-size: 1rem;
        color: hsl(0, 0%, 77%);
      }
    }
  }
  .description {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: fit-content;
    gap: 1rem;
    margin: 2rem 0;
    color: #f1f1f1;
    padding: 0.2rem 0.4rem;
    border-bottom: 3px solid #f1f1f1;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s;
    cursor: pointer;
    .description-text {
      display: flex;
      align-items: center;
      font-size: 1rem;
    }

    img {
      width: 15px;
      height: 15px;
      filter: invert(100);
      transition: transform 0.3s ease;
      transform: rotate(90deg);
      &.rotated {
        transform: rotate(180deg);
      }
    }

    &.clicked {
      cursor: pointer;
    }
  }
  .years {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .years-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .year-wrapper {
        font-size: 1.2rem;
        font-weight: bold;
        color: #e0e0e0;
      }
      .courses-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
        .course-name {
          font-size: 1rem;
          color: #e0e0e0;
        }
        .grade {
          font-size: 1rem;
          color: #e0e0e0;
        }
      }
    }
    .buttons-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 2%;
      .back-button,
      .next-button {
        margin-top: 1rem;
        width: 15%;
        color: #f1f1f1;
        background: transparent;
        border: 1px solid #f1f1f1;
        border-radius: 5px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .upper-section {
      flex-direction: column;
      align-items: flex-start;

      .image-wrapper {
        .image {
          width: 100px;
          height: 100px;
        }
      }

      .right-section {
        .title-section {
          flex-direction: column;
          align-items: flex-start;
          .title {
            font-size: 1rem;
          }
          .company {
            font-size: 0.9rem;
          }
        }
        .location {
          font-size: 0.9rem;
        }
      }
    }
    .description {
      font-size: 0.9rem;
    }
    .years {
      .years-wrapper {
        .year-wrapper {
          font-size: 1rem;
        }
        .courses-wrapper {
          .course-name,
          .grade {
            font-size: 0.9rem;
          }
        }
      }
      .buttons-wrapper {
        flex-direction: column;
        align-items: flex-start;
        .back-button,
        .next-button {
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    .upper-section {
      flex-direction: column;
      align-items: flex-start;

      .image-wrapper {
        .image {
          width: 100px;
          height: 100px;
        }
      }

      .right-section {
        .title-section {
          flex-direction: column;
          align-items: flex-start;
          .title {
            font-size: 1rem;
          }
          .company {
            font-size: 0.9rem;
          }
        }
        .location {
          font-size: 0.9rem;
        }
      }
    }
    .description {
      font-size: 0.9rem;
    }
    .years {
      .years-wrapper {
        .year-wrapper {
          font-size: 1rem;
        }
        .courses-wrapper {
          .course-name,
          .grade {
            font-size: 0.9rem;
          }
        }
      }
      .buttons-wrapper {
        flex-direction: column;
        align-items: flex-start;
        .back-button,
        .next-button {
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  @media (max-height: 480px) {
    padding: 0.5rem;

    .upper-section {
      flex-direction: column;
      align-items: flex-start;

      .image-wrapper {
        .image {
          width: 100px;
          height: 100px;
        }
      }

      .right-section {
        .title-section {
          flex-direction: column;
          align-items: flex-start;
          .title {
            font-size: 0.9rem;
          }
          .company {
            font-size: 0.8rem;
          }
        }
        .location {
          font-size: 0.8rem;
        }
      }
    }
    .description {
      font-size: 0.8rem;
      width: 100%;
    }
    .years {
      .years-wrapper {
        .year-wrapper {
          font-size: 0.8rem;
        }
        .courses-wrapper {
          .course-name,
          .grade {
            font-size: 0.8rem;
          }
        }
      }
      .buttons-wrapper {
        flex-direction: column;
        align-items: flex-start;
        .back-button,
        .next-button {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>
