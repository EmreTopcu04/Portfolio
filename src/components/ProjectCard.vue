<template>
  <div class="project-card-c">
    <div class="left-side">
      <div v-if="image == 'chess_bot'" class="image-wrapper">
        <img src="../assets/icons/chess.png" alt="project image" class="image" />
      </div>
      <div v-else-if="image == 'assembly'" class="image-wrapper">
        <img src="../assets/icons/assembly.png" alt="project image" class="image" />
      </div>
      <div v-else-if="image == 'recipe'" class="image-wrapper">
        <img src="../assets/icons/recipe-app.png" alt="project image" class="image" />
      </div>
      <div v-else-if="image == 'subscription'" class="image-wrapper">
        <img src="../assets/icons/email.png" alt="project image" class="image" />
      </div>
    </div>
    <div class="right-side">
      <div class="title-description-wrapper">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <a :href="link" target="_blank" class="link">
        <img src="../assets/icons/github.svg" alt="github" class="github-icon" />
        <div class="link-text">View Code</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    image: String,
    title: String,
    description: String,
    link: String,
  },
  data() {
    return {
      imageUrl: this.image,
    }
  },
}
</script>

<style scoped lang="scss">
.project-card-c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  border-left: 5px solid #f9a826;
  border-radius: 5px;
  padding: 1rem 2rem;
  gap: 2rem;
  margin: 2rem 0;
  .left-side {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .image {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
      }
    }
  }
  .right-side {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .title-description-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 1rem;
      h3 {
        width: 100%;
        font-size: 1.5rem;
        font-weight: 600;
        color: #e0e0e0;
      }
      p {
        font-size: 1rem;
        width: 100%;
      }
    }
    .link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
      padding-top: 1rem;
      text-decoration: none;
      .github-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        filter: invert(80%);
        width: 2rem;
        height: 2rem;
      }
      .link-text {
        text-align: center;
        font-size: 1rem;
        color: #e0e0e0;
      }
      &:hover {
        .link-text {
          color: hsl(0, 0%, 98%);
        }
        .github-icon {
          filter: invert(100%);
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;

    .left-side {
      .image-wrapper {
        .image {
          width: 80%;
          height: auto;
        }
      }
    }

    .right-side {
      .title-description-wrapper {
        h3 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
      .link {
        .github-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
        .link-text {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 1rem;

    .left-side {
      .image-wrapper {
        .image {
          width: 80%;
          height: auto;
        }
      }
    }

    .right-side {
      .title-description-wrapper {
        h3 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
      .link {
        .github-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
        .link-text {
          font-size: 0.9rem;
        }
      }
    }
  }
  @media (max-height: 768px) {
    flex-direction: column;
    padding: 1rem;

    .left-side {
      .image-wrapper {
        .image {
          width: 80%;
          height: auto;
        }
      }
    }

    .right-side {
      .title-description-wrapper {
        h3 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
      .link {
        .github-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
        .link-text {
          font-size: 0.9rem;
        }
      }
    }
  }
  @media (max-height: 480px) {
    flex-direction: column;
    padding: 1rem;

    .left-side {
      .image-wrapper {
        .image {
          width: 60%;
          height: auto;
        }
      }
    }

    .right-side {
      .title-description-wrapper {
        h3 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
      .link {
        .github-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
        .link-text {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
