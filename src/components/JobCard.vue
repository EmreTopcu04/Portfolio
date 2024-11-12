<template>
  <div class="job-card">
    <div class="upper-section">
      <div class="image-wrapper">
        <img
          v-if="image == 'gts'"
          src="../assets/icons/gtsfly_logo.jpg"
          alt="job image"
          class="image"
        />
        <img
          v-else-if="image == 'akdeniz'"
          src="../assets/icons/Akdeniz_Universitesi.png"
          alt="job image"
          class="image"
        />
        <img
          v-else-if="image == 'tusaş'"
          src="../assets/icons/tusas_logo.jpeg"
          alt="job image"
          class="image"
        />
      </div>

      <div class="right-section">
        <div class="title-section">
          <div class="title">{{ title }}</div>
          <div class="company">{{ company }}</div>
        </div>

        <div class="location">{{ location }}</div>
        <p>{{ time }}</p>
      </div>
    </div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    image: String,
    title: String,
    company: String,
    location: String,
    time: String,
    description: String,
  },
  data() {
    return {
      imageUrl: this.image,
    }
  },
}
</script>

<style scoped lang="scss">
.job-card {
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
    }
  }
  .description {
    margin-top: 1rem;
    font-size: 1rem;
    color: #e0e0e0;
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
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

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
  }
}
</style>
